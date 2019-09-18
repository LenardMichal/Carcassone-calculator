import React from 'react';
import Classes from './Meeple.module.css';

const Meeple = ({active, onClickHandler, score = 0, testID}) => {

  // const [active, setActive] = useState(false)
  
  let stylingClasses = [Classes.main, active ? Classes.active : ''];

  return (
  <div
   className = {stylingClasses}
   onClick = {onClickHandler}
   data-testid={testID}
   >
    {score}
  </div>
  )
}

export default Meeple;