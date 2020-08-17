import React from 'react';
import '../styles/App.css';
import {BrowserRouter as Link} from 'react-router-dom'

const Home = () => {
  const newAssignment = () => {

  }
  return (
    <div>
      <h2>Don't have time to film lessons for asynchronous learning after teaching all day?</h2>
      <h2>Don't worry, we've got you covered!</h2>
      <p>Simply click the link below to create a lesson, choose an 'instructor' and a 'classroom' and you're set!</p>
      <p>Send out the link to families and your scholars can listen to step by step directions while you are busy teaching small groups!</p>
      <button onClick={newAssignment}>Click to Begin</button>
    </div>
  )
}

export default Home;