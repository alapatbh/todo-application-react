import React, { Component } from 'react';
import './App.css';
import TodoList from '../Components/Todo/TodoList/TodoList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList  className="todoStyle"/>        
      </div>
    );
  }
}

export default App;
