import React from 'react';
import Classes from './SubstractButton.module.css';

const SubstractButton = ({onClickHandler, active}) => {
  
  let activeClasses = [Classes.main, active ? Classes.active : ''].join(' ');
  
  
  return <button
  onClick={onClickHandler}
  className={activeClasses}
  >
    Substracte
  </button>
}


export default SubstractButton;