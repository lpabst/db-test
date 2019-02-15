import React, { Component } from 'react';
import router from './router';
import axios from 'axios';

import './reset.css';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    axios.get('/api/test')
  }

  render() {
    return (
      <div className="App">

        {router}

      </div>
    );
  }
}


export default App;
