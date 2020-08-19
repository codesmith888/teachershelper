import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import '../styles/App.css';
import axios from 'axios';


const CreateAssignment = () => {
  let [assignmentName, setAssignmentName] = useState('')
  let [redirect, setRedirect] = useState(false)
  let [assignmentId, setAssignmentId] = useState(0)

  const handleName = (e) => {
    setAssignmentName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = axios.post('https://resolved-kite-43.hasura.app/v1/graphql', {
      query: `mutation addNewAssignment($name: String = "${assignmentName}") {
        insert_assignments(objects: {name: $name}) {
          returning {
            id
            name
          }
        }
      }`
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      setAssignmentId((response.data['data']['insert_assignments']['returning'][0].id))
      setRedirect(true)
    }).catch(error => {
      console.log(error)
    })
    }
    
    if (redirect) return <Redirect to={{pathname: "/Directions", state: {assignment: assignmentId}}} />
  
  return (
    <div className="createAssignment">
      <h2>Step 1: Name Your Assignment!</h2>
      <form onSubmit={handleSubmit}>
        <div class="input-field">
          <label for="assignmentName">Assignment Name:</label>
          <input type="text" className="form-control" id="assignmentName" value={assignmentName} onChange={handleName} />
        </div>
        <input type="submit" value="Submit" className="form-control" />
      </form>
    </div>
  )
}

export default CreateAssignment;