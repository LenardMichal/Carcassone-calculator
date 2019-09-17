import React, {useState} from 'react';
import Meeple from '../Meeple/Meeple';
import PtsButton from '../PtsButton/PtsButton';

import settings from './defaults';

const MeepleContainer = () => {
  const [meeples, setMeeples] = useState(settings);
  const [substract, toggleSubstract] = useState(false)
 

  function toggleActive (index) {
    let tempMeeples = [...meeples];
    tempMeeples[index].active = !tempMeeples[index].active;
    setMeeples(tempMeeples);
  }

  //Function that returns arr with added points to active meeps
  function addPoints(arr, points, substraction = false, multi = 1){
    let newArr = arr.map((el) => {
      if(el.active === true) {
        let substract =  substraction ? -1 : 1;
        el.score += substract * multi * points    
      } 
      return el;
    });
    return newArr;
  }


  let meeplesView = meeples.map((meeple, index) => {
    return <Meeple
     score={meeple.score} 
     onClickHandler={toggleActive.bind(this, index)}
     key={index} 
     active={meeple.active}
     />
  });

  let addValueButtons = [];

  for(let i = 0; i < 20 ;i++) {
    addValueButtons.push(<PtsButton 
      value={i+1} 
      clickHandler={() => {
        let temp = addPoints(meeples, i+1);
        setMeeples(temp);
      }} 
      key={i}/>)
  }
  return (
    <div>
      {meeplesView}
      {addValueButtons}
    </div>
  )
}

export default MeepleContainer;