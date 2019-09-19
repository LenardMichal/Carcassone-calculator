import React from 'react';
import styles from './Meeple.module.css';

const Meeple = ({active, onClickHandler, score = 0, testID}) => {

  // const [active, setActive] = useState(false)
  
  let stylingClasses = [styles.main, active ? styles.active : ''];

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