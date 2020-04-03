import React, { Component } from 'react';
import './App.css';
import Action from '../Components/Action/Action.js'
import TodoList from '../Components/Todo/TodoList/TodoList.js';

class App extends Component {

  state={
    todoItemContent:''
  }
  addItemHandler = (itemContent) => {
    this.setState({
      todoItemContent:itemContent
    });
  
  }
  render() {
    return (
      <div className="App">
        <h1><u>Todo List</u></h1>
        <TodoList addItem={this.state.todoItemContent} className="todoStyle"/>   
        <Action addItem={this.addItemHandler}  />     
      </div>
    );
  }
}

export default App;
