import React from 'react';
import Classes from './SubstractButton.module.css';

const SubstractButton = ({onClickHandler, active}) => {
  let activeClasses = [Classes.main, active ? Classes.active : ''];
  
  
  return <button
  onClick={onClickHandler}
  className={activeClasses}
  >
    -
  </button>
}


export default SubstractButton;