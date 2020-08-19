import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import axios from 'axios';

const Classroom = (props) => {
  console.log(props.location.state.assignmentId)
  let [helper, setHelper] = useState(props.location.state.helper)
  let [environment, setEnvironment] = useState(props.location.state.environment)
  let [assignmentId, setAssignmentId] = useState(props.location.state.assignmentId)
  let backgroundImage = environment + ".png"
  console.log(backgroundImage)
  useEffect(() => {
    const directions = axios.post('https://resolved-kite-43.hasura.app/v1/graphql', {
      query: `query findDirections {
        directions(where: {assignment_id: 
          {_eq: ${assignmentId}}) {
          instruction
        }
      }`
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      console.log(response.data)
    }).catch(error => {
      console.log(error)
    })
  }, [])


  
  return (
   <>
   <img id="classRoomBackground" src="barn.png" />
   </>
  )
}

export default Classroom;