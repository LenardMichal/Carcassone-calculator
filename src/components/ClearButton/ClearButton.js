import React from 'react';

const ClearButton = ({onDblClickHandler}) => {
  return (
    <button
    onDoubleClick={onDblClickHandler}>
      Clear
    </button>
  )
}


export default ClearButton;