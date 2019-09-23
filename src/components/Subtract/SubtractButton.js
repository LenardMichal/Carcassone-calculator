import React from 'react';
import Classes from './SubtractButton.module.css';

const SubstractButton = ({onClickHandler, active}) => {
  
  let activeClasses = [Classes.main, active ? Classes.active : ''].join(' ');
  
  
  return <button
  onClick={onClickHandler}
  className={activeClasses}
  >
    Subtract
  </button>
}


export default SubstractButton;