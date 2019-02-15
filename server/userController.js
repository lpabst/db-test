module.exports = (app, db) => ({
  test: function (req, res) {
    console.log("db test");
    db.updateInfo([3, 'newValue'])
      .then(() => console.log('done updating'))
  }
})
