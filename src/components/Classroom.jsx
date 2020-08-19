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
    var synth = window.speechSynthesis
    var utterThis = new SpeechSynthesisUtterance(firstDirection)
    speechSynthesis.getVoices()
    speechBubble.innerHTML = firstDirection
    utterThis.lang='en-US'
    synth.speak(utterThis)
    utterThis.onend = () => {
      synth.cancel()
    }
  }

  const stepTwo = () => {
    let speechBubble = document.getElementById("instructionsBubble")
    var synth = window.speechSynthesis
    var utterThis = new SpeechSynthesisUtterance(secondDirection)
    speechSynthesis.getVoices()
    speechBubble.innerHTML = secondDirection
    utterThis.lang='en-US'
    synth.speak(utterThis)
    utterThis.onend = () => {
      synth.cancel()
    }
  }

  const stepThree = () => {
    let speechBubble = document.getElementById("instructionsBubble")
    var synth = window.speechSynthesis
    var utterThis = new SpeechSynthesisUtterance(thirdDirection)
    speechSynthesis.getVoices()
    speechBubble.innerHTML = thirdDirection
    utterThis.lang='en-US'
    synth.speak(utterThis)
    utterThis.onend = () => {
      synth.cancel()
    }
  }

  const stepFour = () => {
    let speechBubble = document.getElementById("instructionsBubble")
    var synth = window.speechSynthesis
    var utterThis = new SpeechSynthesisUtterance(fourthDirection)
    speechSynthesis.getVoices()
    speechBubble.innerHTML = fourthDirection
    utterThis.lang='en-US'
    synth.speak(utterThis)
    utterThis.onend = () => {
      synth.cancel()
    }
  }

  const stepFive = () => {
    let speechBubble = document.getElementById("instructionsBubble")
    var synth = window.speechSynthesis
    var utterThis = new SpeechSynthesisUtterance(fifthDirection)
    speechSynthesis.getVoices()
    speechBubble.innerHTML = fifthDirection
    utterThis.lang='en-US'
    synth.speak(utterThis)
    utterThis.onend = () => {
      synth.cancel()
    }
  }

  const stepSix = () => {
    let speechBubble = document.getElementById("instructionsBubble")
    var synth = window.speechSynthesis
    var utterThis = new SpeechSynthesisUtterance(sixthDirection)
    speechSynthesis.getVoices()
    speechBubble.innerHTML = sixthDirection
    utterThis.lang='en-US'
    synth.speak(utterThis)
    utterThis.onend = () => {
      synth.cancel()
    }
  }

  const stepSeven = () => {
    let speechBubble = document.getElementById("instructionsBubble")
    var synth = window.speechSynthesis
    var utterThis = new SpeechSynthesisUtterance(seventhDirection)
    speechSynthesis.getVoices()
    speechBubble.innerHTML = seventhDirection
    utterThis.lang='en-US'
    synth.speak(utterThis)
    utterThis.onend = () => {
      synth.cancel()
    }
  }

  const stepEight = () => {
    let speechBubble = document.getElementById("instructionsBubble")
    var synth = window.speechSynthesis
    var utterThis = new SpeechSynthesisUtterance(eighthDirection)
    speechSynthesis.getVoices()
    speechBubble.innerHTML = eighthDirection
    utterThis.lang='en-US'
    synth.speak(utterThis)
    utterThis.onend = () => {
      synth.cancel()
    }
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