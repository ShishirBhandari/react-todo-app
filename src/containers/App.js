import React, { Component } from 'react';
import './App.css';

import Search from './../components/Search/Search';
import Todos from './../components/Todos/Todos';
import { EventEmitter } from 'events';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Buy groceries',
        description: 'TBD: Lorem Ipsum  Porem',
        createdAt: new Date(),
        completedAt: null,
        deletedAt: null,
        editing: false
      },
      {
        id: 2,
        title: "Go to Ravi's house",
        description:
          'Lorem Ipsum: Lorem Ipsum Porem Lorem Ipsum Porem Lorem Ipsum Porem Lorem Ipsum Porem',
        createdAt: new Date(),
        completedAt: new Date(),
        deletedAt: null
      },
      {
        id: 3,
        title: 'Buy groceries',
        description: 'TBD: Lorem Ipsum  Porem',
        createdAt: new Date(),
        completedAt: null,
        deletedAt: null
      },
      {
        id: 4,
        title: 'Buy groceries',
        description: 'TBD: Lorem Ipsum  Porem',
        createdAt: new Date(),
        completedAt: null,
        deletedAt: null
      }
    ]
  };

  todoCompleted = (event, index) => {
    event.preventDefault();

    var todo = this.state.todos[index];

    todo.completedAt = !todo.completedAt ? new Date() : null;

    var newTodos = this.state.todos;
    newTodos[index] = todo;
    this.setState({
      todos: newTodos
    });
  };

  editClicked = (e, index) => {
    var todo = this.state.todos[index];
    todo.editing = !todo.editing;

    var newTodos = this.state.todos;
    newTodos[index] = todo;
    this.setState({
      todos: newTodos
    });
  };

  editTodo = (e, index, title, description) => {
    var todo = this.state.todos[index];
    todo.title = title;
    todo.description = description;
    todo.editing = false;

    var newTodos = this.state.todos;
    newTodos[index] = todo;
    this.setState({
      todos: newTodos
    });
  };

  deleteTodo = index => {
    var todo = this.state.todos[index];
    todo.deletedAt = new Date();

    var newTodos = this.state.todos;
    newTodos[index] = todo;
    this.setState({
      todos: newTodos
    });
  };

  addTodo = (e, title, description) => {
    e.preventDefault();

    var todo = {
      id: this.state.todos.length + 1,
      title: 'New Todo',
      description: 'description',
      createdAt: new Date(),
      completedAt: null,
      deletedAt: null,
      editing: true
    };

    var newTodos = this.state.todos;
    newTodos.push(todo);
    this.setState({
      todos: newTodos
    });
  };

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <Search></Search>
        </header>
        <div className='App-content'>
          <Todos
            todos={this.state.todos}
            todoCompleted={this.todoCompleted}
            editClicked={this.editClicked}
            editTodo={this.editTodo}
            deleteTodo={this.deleteTodo}
            addTodo={this.addTodo}
          ></Todos>
        </div>
      </div>
    );
  }
}

export default App;
