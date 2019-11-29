import React, { Component } from 'react';
import './App.css';

import Search from './../components/Search/Search';
import Todos from './../components/Todos/Todos';
import { EventEmitter } from 'events';
import upperCase from 'upper-case';

class App extends Component {
  todos = [
    {
      id: 1,
      title: 'Go to Market',
      description: 'TBD: Lorem Ipsum Porem',
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
      title: 'List items',
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
    },
    {
      id: 5,
      title: 'Cook food.',
      description: 'TBD: Lorem Ipsum  Porem',
      createdAt: new Date(),
      completedAt: null,
      deletedAt: null
    }
  ];

  state = {
    // todos: this.todos
    todos: [...this.todos]
  };

  todoCompleted = (event, index) => {
    event.preventDefault();

    var todo = this.state.todos[index];

    todo.completedAt = !todo.completedAt ? new Date() : null;

    var newTodos = this.todos;
    newTodos[index] = todo;
    // this.todos[index] = todo;

    this.setState({
      todos: [...newTodos]
    });
  };

  editClicked = (e, index) => {
    var todo = this.state.todos[index];
    todo.editing = !todo.editing;

    var newTodos = this.todos;
    newTodos[index] = todo;
    // this.todos[index] = todo;

    this.setState({
      todos: [...newTodos]
    });
  };

  editTodo = (e, index, title, description) => {
    var todo = this.state.todos[index];
    todo.title = title;
    todo.description = description;
    todo.editing = false;

    var newTodos = this.todos;
    newTodos[index] = todo;
    // this.todos[index] = todo;

    this.setState({
      todos: [...newTodos]
    });
  };

  deleteTodo = index => {
    var todo = this.state.todos[index];
    todo.deletedAt = new Date();

    var newTodos = this.todos;
    newTodos[index] = todo;
    // this.todos[index] = todo;

    this.setState({
      todos: [...newTodos]
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

    var newTodos = this.todos;
    newTodos.push(todo);

    // this.todos.push(todo);

    this.setState({
      todos: [...newTodos]
    });
  };

  searchTodos = (e, query) => {
    console.log(query);

    if (query === '') {
      this.setState({
        todos: [...this.todos]
      });

      return;
    }

    var newTodos = [];

    console.log(this.todos);

    this.todos.forEach(todo => {
      query = query.toLowerCase();
      if (
        todo.title.toLowerCase().includes(query) ||
        todo.description.toLowerCase().includes(query)
      ) {
        newTodos.push(todo);
      }
    });

    this.setState({
      todos: [...newTodos]
    });

    return;
  };

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <Search searchTodos={this.searchTodos}></Search>
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
