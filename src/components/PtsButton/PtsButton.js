import React from 'react';

const PtsButton = ({value, clickHandler}) => {
  return <button onClick={clickHandler}>
    {value}
  </button>
}

export default PtsButton;