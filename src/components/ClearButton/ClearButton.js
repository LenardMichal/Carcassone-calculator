import React from 'react';
import styles from './ClearButton.module.css';

const ClearButton = ({onDblClickHandler}) => {
  return (
    <button
    className={styles.main}
    onDoubleClick={onDblClickHandler}>
      Clear
    </button>
  )
}


export default ClearButton;