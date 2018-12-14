import React, { Component } from 'react';

import { getPosts, savePosts } from './common/storage'
import data from './data.json'
import Routes from './main/routes'

import './App.css';

class App extends Component {
  componentDidMount() {
    if (getPosts() === null) {
      const storage = JSON.stringify(data)
      savePosts(storage)
    }
  }
  
  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;
