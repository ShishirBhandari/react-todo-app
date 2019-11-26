import React from 'react';

import styles from './Todo.module.css';
import classes from './Todo.module.css';

const todo = props => {
  const todo = props.todo;

  var currentTitle = '';
  var currentDescription = '';
  var editable = false;

  const titleChanged = e => {
    console.log('editing');
    currentTitle = e.target.innerHTML;
  };

  const descriptionChanged = e => {
    currentDescription = e.target.innerHTML;
  };

  return (
    <li
      className={
        styles.Todo + ' ' + (todo.completedAt == null ? '' : styles.IsCompleted)
      }
    >
      <div className={styles.Header + ' clearfix'}>
        <div className={classes.LeftWrapper}>
          <form className={classes.Checkbox}>
            {/* <input type='checkbox' onChange={props.todoCompleted} /> */}
            <span
              className={todo.completedAt == null ? '' : styles.Checked}
              onClick={props.todoCompleted}
            >
              <i className='material-icons'>check</i>
            </span>
          </form>

          <p>
            {todo.createdAt.toDateString().slice(4)},{' '}
            {todo.createdAt.toTimeString().slice(0, 8)}
          </p>
        </div>

        <div className={styles.Action}>
          <span
            onClick={
              todo.editing
                ? e =>
                    props.editTodo(
                      e,
                      e.target.parentElement.parentElement.parentElement
                        .nextSibling.children[0].innerHTML,
                      e.target.parentElement.parentElement.parentElement
                        .nextSibling.children[1].innerHTML
                    )
                : props.editClicked
            }
          >
            <i className='material-icons'>
              {todo.editing ? 'save' : 'edit'}
              {/* edit */}
            </i>
          </span>
          <span className={styles.Red} onClick={props.deleteTodo}>
            <i className='material-icons'>delete</i>
          </span>
        </div>
      </div>

      <div className={styles.Content}>
        {/* <span>{todo.title}</span>
        <p>{todo.description}</p> */}

        <span
          className={todo.editing ? '' : classes.NotEditable}
          contentEditable={todo.editing}
          onChange={titleChanged}
        >
          {/* <input
            type='text'
            name='title'
            value={todo.title}
            readOnly={true}
            onChange={titleChanged}
          ></input> */}

          {todo.title}
        </span>

        <p
          className={todo.editing ? '' : classes.NotEditable}
          contentEditable={todo.editing}
          onChange={descriptionChanged}
        >
          {/* <textarea
            name='description'
            readOnly={true}
            onChange={descriptionChange}
          >
            {todo.description}
          </textarea> */}

          {todo.description}
        </p>

        {/* <button
          className={styles.Content}
          onClick={e => props.editTodo(e, currentTitle, currentDescription)}
        >
          Save
        </button> */}
      </div>
    </li>

    // <li
    //   className={
    //     styles.Todo +
    //     ' ' +
    //     (todo.completedAt == null ? 'hello' : styles.IsCompleted)
    //   }
    // >
    //   <form>
    //     <input type='checkbox' onChange={props.todoCompleted} />
    //   </form>

    //   <div className={styles.Content}>
    //     <span>{todo.title}</span>
    //     <div className={styles.HorizontalLine}></div>
    //     <p>{todo.description}</p>
    //     <p>{todo.createdAt.toDateString()}</p>
    //   </div>

    //   <div className={styles.Action}>
    //     <span onClick={props.editTodo}>
    //       <i className='material-icons'>edit</i>
    //     </span>
    //     <span className={styles.Red} onClick={props.deleteTodo}>
    //       <i className='material-icons'>delete</i>
    //     </span>
    //   </div>
    // </li>
  );
};

export default todo;
