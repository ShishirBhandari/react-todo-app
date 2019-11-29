import React from 'react';

import styles from './Search.module.css';

const search = props => {
  return (
    <div className={styles.Search}>
      <span>TODO APP</span>
      <form className={styles.SearchForm}>
        <input
          type='search'
          placeholder='Search Todo'
          onChange={e => props.searchTodos(e, e.target.value)}
        ></input>
        {/* <input
          type='button'
          value='Search'
          onClick={e => props.searchTodos(e, e.target.previousSibling.value)}
        ></input> */}
      </form>
    </div>
  );
};

export default search;
