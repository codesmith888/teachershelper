import React from 'react';
import '../styles/App.css';
import axios from 'axios';
import Directions from './components/Directions';

const CreateAssignment = () => {
  const handleSubmit = () => {
    let newAssignment = await axios({
      url: 'https://resolved-kite-43.hasura.app/v1/graphql',
      method: 'post', 
      headers: headers, 
      data: {
        mutation: 
        mutation insertNewAssignment($id: Int) {
          insert_assignments_one(object: {name: "School Bus", id: $id}) {
            name
            id
          }
        }
        
      }
    })
    <Redirect to= "Directions" assignmentId={newAssignment.id}/>
  }
  return (
    <div className="createAssignment">
      <h2>Step 1: Create Your Assignment</h2>
      <h4>Your Teach Helper is going to give step by step directions, so simply fill in your directions below. Feel free to upload a picture of the final project as well!</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="assignmentName">Assignment Name:</label>
          <input type="text" className="form-control" className="assignmentName"></input>
        </div>
        <div className="form-group">
          <label for="assignmentPic">Assignment Image:</label>
          <input type="file" className="form-control-file" id="assignmentImage"></input>
        </div>
        <div className="form-group">
          <input type="submit" className="form-control"></input>
        </div>
      </form>
    </div>
  )
}

export default CreateAssignment;