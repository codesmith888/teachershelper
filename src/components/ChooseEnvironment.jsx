import React, { useState } from 'react';
import '../styles/App.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';


const ChooseEnvironment = (props) => {
  let [aId, setAId] = useState(props.location.state.id)
  let [helper, setHelper] = useState(props.location.state.helper)
  let [redirect, setRedirect] = useState(false)
  let [environment, setEnvironment] = useState('')
  const chooseEnvironment = (e) => {
    e.preventDefault()
    setEnvironment(e.target.id)
    const chosenEnvironment = axios.post('https://resolved-kite-43.hasura.app/v1/graphql', {
      query: `mutation addEnvironment {
        update_assignments(where: {id: {_eq: ${aId}}}, _set: {environment: "${e.target.id}"}) {
          returning {
            environment
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
      setAId((response.data['data']['update_assignments']['returning'][0].id))
      setRedirect(true)
    }).catch(error => {
      console.log(error)
    })
  }
  if (redirect) return <Redirect to={{pathname: "/Classroom", state: {aId: aId, environment: environment, helper: helper} }} />

  return (
    <>
    <h1>Now Choose Your Classroom:</h1>
    <h3>Next, choose your classroom:</h3>
    <div className="row">
      <img className="environment" id="barn" src="barn.png" onClick={chooseEnvironment} />
      <img className="environment" id="beach" src="beach.png" onClick={chooseEnvironment}/>
      <img className="environment" id="pond" src="pond.png" onClick={chooseEnvironment}/>
    </div>
    <div className="row">
      <img className="environment" id="space" src="space.png" onClick={chooseEnvironment}/>
      <img className="environment" id="underTheSea" src="underTheSea.png" onClick={chooseEnvironment}/>
      <img className="environment" id="winter" src="winter.png" onClick={chooseEnvironment}/>
    </div>
    </>
  )
}

export default ChooseEnvironment;