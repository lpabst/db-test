const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const app = module.exports = express();
const config = require('./config.js');

app.use(bodyParser.json());

massive(config.connection)
    .then(db => {
        app.use(express.static(__dirname + './../build'))

        const userController = require("./userController.js")(app, db)

        //////////Endpoints for the front end
        app.get('/api/test', userController.test)

        db.getInfo()
            .then(res => {
                console.log(res)
            })


        app.listen(config.port, console.log("you are now connected on " + config.port));
    })

