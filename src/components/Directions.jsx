import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import '../styles/App.css';
import axios from 'axios';


const Directions = props => {
  let [assignmentId, setAssignmentId] = useState(props.location.state.assignment)
  let [redirect, setRedirect] = useState(false)
  let [stepOne, setStepOne] = useState('')
  let [stepTwo, setStepTwo] = useState('')
  let [stepThree, setStepThree] = useState('')
  let [stepFour, setStepFour] = useState('')
  let [stepFive, setStepFive] = useState('')
  let [stepSix, setStepSix] = useState('')
  let [stepSeven, setStepSeven] = useState('')
  let [stepEight, setStepEight] = useState('')

    const handleStepOne = (e) => {
      setStepOne(e.target.value)
    }

    const handleStepTwo = (e) => {
      setStepTwo(e.target.value)
    }

    const handleStepThree = (e) => {
      setStepThree(e.target.value)
    }

    const handleStepFour = (e) => {
      setStepFour(e.target.value)
    }

    const handleStepFive = (e) => {
      setStepFive(e.target.value)
    }

    const handleStepSix = (e) => {
      setStepSix(e.target.value)
    }

    const handleStepSeven = (e) => {
      setStepSeven(e.target.value)
    }

    const handleStepEight = (e) => {
      setStepEight(e.target.value)
    }

    const saveDirections = (e) => {
      e.preventDefault()
      const data = axios.post('https://resolved-kite-43.hasura.app/v1/graphql', {
        query: `mutation addDirections {
          insert_directions(objects:
          {assignment_id: ${assignmentId},
          instruction: "${stepOne}" }) {
          returning {
            instruction
            assignment_id
            }
          }
        }`
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        setRedirect(true)
      }).catch(error => {
        console.log(error)
      })
      const dataTwo = axios.post('https://resolved-kite-43.hasura.app/v1/graphql', {
        query: `mutation addDirections {
          insert_directions(objects:
          {assignment_id: ${assignmentId},
          instruction: "${stepTwo}" }) {
          returning {
            instruction
            assignment_id
            }
          }
        }`
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        setRedirect(true)
      }).catch(error => {
        console.log(error)
      })
      const dataThree = axios.post('https://resolved-kite-43.hasura.app/v1/graphql', {
        query: `mutation addDirections {
          insert_directions(objects:
          {assignment_id: ${assignmentId},
          instruction: "${stepThree}" }) {
          returning {
            instruction
            assignment_id
            }
          }
        }`
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        setRedirect(true)
      }).catch(error => {
        console.log(error)
      })
      const dataFour = axios.post('https://resolved-kite-43.hasura.app/v1/graphql', {
        query: `mutation addDirections {
          insert_directions(objects:
          {assignment_id: ${assignmentId},
          instruction: "${stepFour}" }) {
          returning {
            instruction
            assignment_id
            }
          }
        }`
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        setRedirect(true)
      }).catch(error => {
        console.log(error)
      })
      const dataFive = axios.post('https://resolved-kite-43.hasura.app/v1/graphql', {
        query: `mutation addDirections {
          insert_directions(objects:
          {assignment_id: ${assignmentId},
          instruction: "${stepFive}" }) {
          returning {
            instruction
            assignment_id
            }
          }
        }`
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        setRedirect(true)
      }).catch(error => {
        console.log(error)
      })
      const dataSix = axios.post('https://resolved-kite-43.hasura.app/v1/graphql', {
        query: `mutation addDirections {
          insert_directions(objects:
          {assignment_id: ${assignmentId},
          instruction: "${stepSix}" }) {
          returning {
            instruction
            assignment_id
            }
          }
        }`
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        setRedirect(true)
      }).catch(error => {
        console.log(error)
      })
      const dataSeven = axios.post('https://resolved-kite-43.hasura.app/v1/graphql', {
        query: `mutation addDirections {
          insert_directions(objects:
          {assignment_id: ${assignmentId},
          instruction: "${stepSeven}" }) {
          returning {
            instruction
            assignment_id
            }
          }
        }`
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        setRedirect(true)
      }).catch(error => {
        console.log(error)
      })
      const dataEight = axios.post('https://resolved-kite-43.hasura.app/v1/graphql', {
        query: `mutation addDirections {
          insert_directions(objects:
          {assignment_id: ${assignmentId},
          instruction: "${stepEight}" }) {
          returning {
            instruction
            assignment_id
            }
          }
        }`
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        setAssignmentId((response.data['data']['insert_directions']['returning'][0].assignment_id))
        setRedirect(true)
      }).catch(error => {
        console.log(error)
      })
      }
      
      if (redirect) return <Redirect to={{pathname: "/ChooseHelper", state: {assignmentId: assignmentId}}} />
  
      return (
    <form onSubmit={saveDirections}>
      <div className="input-field">
          <label for="stepOne">Step One</label>
          <input type="text" className="form-control" className="directions" value={stepOne} onChange={handleStepOne}></input>
        </div>
        <div className="input-field">
          <label for="stepTwo">Step Two</label>
          <input type="text" className="form-control" className="directions" value={stepTwo} onChange={handleStepTwo}></input>
        </div>
        <div className="input-field">
          <label for="stepThree">Step Three</label>
          <input type="text" class="form-control" className="directions" value={stepThree} onChange={handleStepThree}></input>
        </div>
        <div className="input-field">
          <label for="stepFour">Step Four</label>
          <input type="text" className="form-control" className="directions" value={stepFour} onChange={handleStepFour}></input>
        </div>
        <div className="input-field">
          <label for="stepFive">Step Five</label>
          <input type="text" className="form-control" className="directions" value={stepFive} onChange={handleStepFive}></input>
        </div>
        <div className="input-field">
          <label for="stepSix">Step Six</label>
          <input type="text" className="form-control" className="directions" value={stepSix} onChange={handleStepSix}></input>
        </div>
        <div className="input-field">
          <label for="stepSeven">Step Seven</label>
          <input type="text" className="form-control" className="directions" value={stepSeven} onChange={handleStepSeven}></input>
        </div>
        <div className="input-field">
          <label for="stepEight">Step Eight</label>
          <input type="text" className="form-control" className="directions" value={stepEight} onChange={handleStepEight}></input>
        </div>
        <div className="input-field">
          <input type="submit"></input>
        </div>
      </form>
  )
}

export default Directions;