import React, { Component } from 'react';

import { getAll, setItem } from './common/storage'
import data from './data.json'
import Routes from './main/routes'

import './App.css';

class App extends Component {

  componentDidMount() {
    if (getAll() === null) {
        const storage = JSON.stringify(data)
        setItem(storage)
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
