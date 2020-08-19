import React, { useState } from 'react'
import '../styles/App.css'
import axios from 'axios'
import { Redirect } from 'react-router-dom'


const ChooseHelper = (props) => {
  let [id, setId] = useState(props.location.state.assignmentId)
  let [redirect, setRedirect] = useState(false)
  let [helper, setHelper] = useState('')
  const chooseHelper = (e) => {
    e.preventDefault()
    setHelper(e.target.id)
    console.log(e.target.id)
    const chosenHelper = axios.post('https://resolved-kite-43.hasura.app/v1/graphql', {
      query: `mutation addHelper {
        update_assignments(where: {id: {_eq: ${id}}}, _set: {helper: "${e.target.id}"}) {
          returning {
            helper
            id
          }
        }
      }`
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      console.log(response.data)
      setId((response.data['data']['update_assignments']['returning'][0].id))
      setRedirect(true)
    }).catch(error => {
      console.log(error)
    })
  }
  if (redirect) return <Redirect to={{pathname: "/ChooseEnvironment", state: {id: id, helper: helper}}} />

  return (
    <>
    <h1>First, choose a helper to teach your lesson:</h1>
    <div className="row">
      <img className="helper" id="bunny" src="bunny.png" onClick={chooseHelper}></img>
      <img className="helper" id="kitten" src="kitten.png" onClick={chooseHelper} />
      <img className="helper" id="puppy"src="puppy.png" onClick={chooseHelper}/>
    </div>
    <div className="row">
      <img className="helper" id="frog" src="frog.png" onClick={chooseHelper}/>
      <img className="helper" id="horse" src="horse.png" onClick={chooseHelper}/>
      <img className="helper" id="elephant" src="elephant.png" onClick={chooseHelper}/>
    </div>
    </>
  )
}

export default ChooseHelper;