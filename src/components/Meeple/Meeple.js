import React from 'react';
import Classes from './Meeple.module.css';

const Meeple = ({active, onClickHandler, score = 0, testID, color}) => {

  
  // Join because passing just array don't work.
  let stylingClasses = [Classes.main, active ? Classes.active : ''].join(' ');
  
  
  return (
  <div
    className = {stylingClasses}
    onClick = {onClickHandler}
    data-testid={testID}
    style={{backgroundColor: color}}
    >
    {score}
  </div>
  )
}

export default Meeple;