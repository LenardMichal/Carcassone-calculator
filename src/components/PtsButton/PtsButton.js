import React from 'react';

const PtsButton = ({value, clickHandler, testID}) => {
  return <button 
  data-testid={testID}
  onClick={clickHandler}>
    {value}
  </button>
}

export default PtsButton;