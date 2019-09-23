import React from 'react';
import styles from './PtsButton.module.css'

const PtsButton = ({value, clickHandler, testID, isNegative, multiplication}) => {
  return <button 
  className={styles.main}
  data-testid={testID}
  onClick={clickHandler}>
  {isNegative ? '-' : null}{value * multiplication}
  </button>
}

export default PtsButton;