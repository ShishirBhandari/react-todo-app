import React from 'react';

import Todo from '../Todo/Todo';
import TodoForm from '../Todo/TodoForm';

import styles from './Todos.module.css';

const todos = props => {
  var todos = props.todos.sort((a, b) => {
    return a.completedAt - b.completedAt;
  });

  todos = todos.sort((a, b) => {
    return b.createdAt - a.createdAt;
  });

  return (
    <ul className={styles.Todos}>
      <li className={styles.AddButton} onClick={e => props.addTodo(e)}>
        +
      </li>

      {/* <TodoForm addTodo={props.addTodo}></TodoForm> */}

      {todos.map((todo, index) => {
        if (todo.deletedAt == null)
          return (
            <Todo
              todo={todo}
              todoCompleted={event => props.todoCompleted(event, index)}
              editClicked={e => props.editClicked(e, index)}
              editTodo={(e, t, d) => {
                return props.editTodo(e, index, t, d);
              }}
              deleteTodo={props.deleteTodo.bind(this, index)}
              key={todo.id}
            ></Todo>
          );
        else return null;
      })}
    </ul>
  );
};

export default todos;
