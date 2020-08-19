import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import axios from 'axios';

const Classroom = (props) => {
  
  let [helper, setHelper] = useState(props.location.state.helper)
  let [environment, setEnvironment] = useState(props.location.state.environment)
  let [assignmentNum, setAssignmentNum] = useState(props.location.state.aId)
  let backgroundImage = environment + ".png"
  let helperImage = helper + ".png"
  let [firstDirection, setFirstDirection] = useState('')
  let [secondDirection, setSecondDirection] = useState('')
  let [thirdDirection, setThirdDirection] = useState('')
  let [fourthDirection, setFourthDirection] = useState('')
  let [fifthDirection, setFifthDirection] = useState('')
  let [sixthDirection, setSixthDirection] = useState('')
  let [seventhDirection, setSeventhDirection] = useState('')
  let [eighthDirection, setEighthDirection] = useState('')
 

  useEffect(() => {
    console.log(props.location.state.aId)
    const directions = axios.post('https://resolved-kite-43.hasura.app/v1/graphql', {
      query: `query findDirections {
        directions(where: {assignment_id: 
          {_eq: ${props.location.state.aId}}}) {
          instruction
        }
      }`
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      console.log(response.data)
      setFirstDirection((response.data['data']['directions'][0].instruction))
      setSecondDirection((response.data['data']['directions'][1].instruction))
      setThirdDirection((response.data['data']['directions'][2].instruction))
      setFourthDirection((response.data['data']['directions'][3].instruction))
      setFifthDirection((response.data['data']['directions'][4].instruction))
      setSixthDirection((response.data['data']['directions'][5].instruction))
      setSeventhDirection((response.data['data']['directions'][6].instruction))
      setEighthDirection((response.data['data']['directions'][7].instruction))
    }).catch(error => {
      console.log(error)
    })
  }, [])

  const stepOne = () => {
    let speechBubble = document.getElementById("instructionsBubble")
    speechBubble.innerHTML = firstDirection
  }

  const stepTwo = () => {
    let speechBubble = document.getElementById("instructionsBubble")
    speechBubble.innerHTML = secondDirection
  }

  const stepThree = () => {
    let speechBubble = document.getElementById("instructionsBubble")
    speechBubble.innerHTML = thirdDirection
  }

  const stepFour = () => {
    let speechBubble = document.getElementById("instructionsBubble")
    speechBubble.innerHTML = fourthDirection
  }

  const stepFive = () => {
    let speechBubble = document.getElementById("instructionsBubble")
    speechBubble.innerHTML = fifthDirection
  }

  const stepSix = () => {
    let speechBubble = document.getElementById("instructionsBubble")
    speechBubble.innerHTML = sixthDirection
  }

  const stepSeven = () => {
    let speechBubble = document.getElementById("instructionsBubble")
    speechBubble.innerHTML = seventhDirection
  }

  const stepEight = () => {
    let speechBubble = document.getElementById("instructionsBubble")
    speechBubble.innerHTML = eighthDirection
  }
  return (
    <div id="classroom">
      <img id="classRoomBackground" src={backgroundImage} />
      <img id="classroomHelper" src={helperImage} />
      <p id="instructionsBubble">Put directions here.</p>
      <div id="numbers" className="row">
        <img className="number" id="numberOne" src="numberOne.png" onClick={stepOne}/>
        <img className="number" id="numberTwo" src="numberTwo.png" onClick={stepTwo}/>
        <img className="number" id="numberThree" src="numberThree.png" onClick={stepThree}/>
        <img className="number" id="numberFour" src="numberFour.png" onClick={stepFour}/>
      </div>
      <div id="numbersTwo" className="row">
        <img className="number" id="numberFive" src="numberFive.png" onClick={stepFive}/>
        <img className="number" id="numberSix" src="numberSix.png" onClick={stepSix}/>
        <img className="number" id="number7" src="number7.png" onClick={stepSeven}/>
        <img className="number" id="numberEight" src="numberEight.png" onClick={stepEight}/>
      </div>
    </div>
  )
}

export default Classroom;