import React, { Component } from 'react';
import './App.css';

import Display from './display/Display';
import Dashboard from './dashboard/Dashboard';

class App extends Component {
  render() {
    return (
     <div className='App'>
      <Display />
      <Dashboard />
     </div>
    );
  }
}

export default App;
