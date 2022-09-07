import React, { useState } from 'react';

import styles from './Counter.module.css';

export function Counter() {
  const [count, setCount] = useState(0);


  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => setCount(prev => prev + 1)}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => setCount(prev => prev - 1)}
        >
          +
        </button>
      </div>
      {/* <div className={styles.row}>
      </div> */}
    </div>
  );
}
