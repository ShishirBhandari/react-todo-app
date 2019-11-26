import React from 'react';

import styles from './Search.module.css';

const search = () => {
  return (
    <div className={styles.Search}>
      <span>TODO APP</span>
      <form className={styles.SearchForm}>
        <input type='search' placeholder='Search Todo'></input>
        <input type='submit' value='Search'></input>
      </form>
    </div>
  );
};

export default search;
