import React from 'react';
import styles from './MultiPanel.module.css';

const MultiPanel = ({counts = 5, onClickHandler}) => {
  let view = [];

  
  //Creates 
  for (let i = 1 ; i <= counts ; i++ ) {
    let indexKey = 'x' + i;
    let newElement = (
      
      <div 
        key={i}
      >
        <label
          className={styles.label} 
          htmlFor={indexKey} 
        >
        {indexKey}
        </label>
        <input
          className={styles.radio} 
          name='multiplication'
          type='radio' 
          id={indexKey} 
          onClick={() => {onClickHandler(i)}}
          defaultChecked={1 === i ? true : false}
        />
      </div>
    )
    view.push(newElement);
  }
  
  return <div
  className={styles.container}>
    {view}
  </div>
}


export default MultiPanel