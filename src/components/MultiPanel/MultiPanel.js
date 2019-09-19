import React, { Fragment} from 'react';

const MultiPanel = ({counts = 5, onClickHandler}) => {
  let view = [];

  
  //Creates 
  for (let i = 1 ; i <= counts ; i++ ) {
    let indexKey = 'x' + i;
    let newElement = (
      <Fragment key={i}>
        <label 
          htmlFor={indexKey}
          key={"label" + i}
          >{indexKey}
        </label>
        <input 
          name='multiplication'
          type='radio' 
          id={indexKey} 
          onClick={() => {onClickHandler(i)}}
          key={"radio" + i}
          defaultChecked={1 === i ? true : false}
          />
      </Fragment>
    )
    view.push(newElement);
  }
  
  return <div>
    {view}
  </div>
}


export default MultiPanel