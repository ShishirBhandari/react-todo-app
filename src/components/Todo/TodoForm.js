import React from 'react';

import styles from './Todo.module.css';

const todoForm = props => {
  //   const todo = props.todo;

  var currentTitle = '';
  var currentDescription = '';

  const titleChanged = e => {
    currentTitle = e.target.value;
  };

  const descriptionChange = e => {
    currentDescription = e.target.value;
  };

  return (
    <li className={styles.Todo}>
      {/* <div className={styles.Header + ' clearfix'}>
        <div className={styles.LeftWrapper}>
          <form className={styles.Checkbox}>
            <span className=''>
              <i className='material-icons'>check</i>
            </span>
          </form>

          <p>
            {new Date().toDateString().slice(4)},{' '}
            {new Date().toTimeString().slice(0, 8)}
          </p>
        </div>

        <div className={styles.Action}>
          <span>
            <i className='material-icons'>edit</i>
          </span>
          <span className={styles.Red}>
            <i className='material-icons'>delete</i>
          </span>
        </div>
      </div> */}

      {/* <div className={styles.HorizontalLine}></div> */}

      <div className={styles.Content}>
        <span>
          <input
            type='text'
            name='title'
            placeholder='title'
            onChange={titleChanged}
          />
        </span>
        <p>
          <textarea
            name='description'
            placeholder='description'
            onChange={descriptionChange}
          />
        </p>
        <button
          className={styles.Content}
          onClick={e => props.addTodo(e, currentTitle, currentDescription)}
        >
          Save
        </button>
      </div>
    </li>
  );
};

export default todoForm;
