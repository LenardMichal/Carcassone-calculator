import React, {useState} from 'react';
import Meeple from '../Meeple/Meeple';
import PtsButton from '../PtsButton/PtsButton';
import SubstractButton from '../SubstractButton/SubstractButton';
import ClearButton from '../ClearButton/ClearButton';
import MultiPanel from '../MultiPanel/MultiPanel';
// startup settings
import settings from './defaults';

const MeepleContainer = () => {
  const [meeples, setMeeples] = useState(settings);
  const [substract, toggleSubstract] = useState(false)
  const [multiplication, setMultiplication] = useState(1);

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

  function clearPlayers() {
    let tempPlayers = [...meeples];
    tempPlayers.forEach( player => {
      player.score = 0;
      player.active = false;
    });

    return setMeeples(tempPlayers);
  }

  // Maps all players into view
  let meeplesView = meeples.map((meeple, index) => {
    return <Meeple
     score={meeple.score} 
     onClickHandler={toggleActive.bind(this, index)}
     key={index} 
     active={meeple.active}
     testID={"player" + index}
     />
  });

  // Creates view of buttons Add points button
  let addValueButtons = [];

  for(let i = 0; i < 10 ;i++) {
    addValueButtons.push(<PtsButton 
      value={i+1} 
      clickHandler={() => {
        let temp = addPoints(meeples, i+1, substract, multiplication);
        setMeeples(temp);
      }} 
      key={i}
      testID={"addPointsBtn" + (i + 1)}/>)
  }

  return (
    <div>
      {meeplesView}
      {addValueButtons}
      <SubstractButton active={substract} onClickHandler={() => {toggleSubstract(!substract)}}/>
      <ClearButton onDblClickHandler={clearPlayers}/>
      <MultiPanel onClickHandler={setMultiplication} />
    </div>
  )
}

export default MeepleContainer;