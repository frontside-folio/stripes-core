import React from 'react';
import styles from './dummy.css';

export default function Dummy() {
  return (
    <h1
      data-test-dummy-welcome-message
      className={styles.dummyHeadline}
    >
      Hello World
    </h1>
  );
}
