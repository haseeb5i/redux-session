import React from "react";
import {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync,
} from "../redux/counterSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

import styles from "./Counter.module.css";

export function Counter() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);
  

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(incrementByAmount(2))}
        >
          2+
        </button>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(incrementAsync())}
        >
          + async
        </button>
      </div>
    </div>
  );
}
