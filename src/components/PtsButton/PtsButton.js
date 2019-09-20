import React from 'react';
import styles from './PtsButton.module.css'

const PtsButton = ({value, clickHandler, testID}) => {
  return <button 
  className={styles.main}
  data-testid={testID}
  onClick={clickHandler}>
    {value}
  </button>
}

export default PtsButton;