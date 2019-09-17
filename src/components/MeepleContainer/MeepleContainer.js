import React, {useState} from 'react';
import Meeple from '../Meeple/Meeple';
import settings from './defaults';

const MeepleContainer = () => {
  const [meeples, setMeeples] = useState(settings);

 

  function toggleActive (index) {
    let tempMeeples = [...meeples];
    tempMeeples[index].active = !tempMeeples[index].active;
    setMeeples(tempMeeples);
  }

  function addPoints(arr, points, negate = false, multi = 1){
    let temps = arr.map((el, index) => {
      if(el.active === true) {
        
      }
    })
  }


  let meeplesView = meeples.map((meeple, index) => {
    return <Meeple
     score={meeple.score} 
     onClickHandler={toggleActive.bind(this, index)}
     key={index} 
     active={meeple.active}
     />
  })

  return (
    <div>
      {meeplesView}
    </div>
  )
}

export default MeepleContainer;