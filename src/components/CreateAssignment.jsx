import React from 'react';
import '../styles/App.css';

const CreateAssignment = () => {

  return (
    <div className="createAssignment">
      <h2>Step 1: Create Your Assignment</h2>
      <h4>Your Teach Helper is going to give step by step directions, so simply fill in your directions below. Feel free to upload a picture of the final project as well!</h4>
      <form>
        <div className="form-group">
          <label for="assignmentName">Assignment Name:</label>
          <input type="text" className="form-control" className="assignmentName"></input>
        </div>
        <div className="form-group">
          <label for="assignmentPic">Assignment Image:</label>
          <input type="file" className="form-control-file" id="assignmentImage"></input>
        </div>
        <div className="form-group">
          <label for="stepOne">Step One</label>
          <input type="text" className="form-control" className="directions"></input>
        </div>
        <div className="form-group">
          <label for="stepTwo">Step Two</label>
          <input type="text" className="form-control" className="directions"></input>
        </div>
        <div className="form-group">
          <label for="stepThree">Step Three</label>
          <input type="text" class="form-control" className="directions"></input>
        </div>
        <div className="form-group">
          <label for="stepFour">Step Four</label>
          <input type="text" className="form-control" className="directions"></input>
        </div>
        <div className="form-group">
          <label for="stepFive">Step Five</label>
          <input type="text" className="form-control" className="directions"></input>
        </div>
        <div className="form-group">
          <label for="stepSix">Step Six</label>
          <input type="text" className="form-control" className="directions"></input>
        </div>
        <div className="form-group">
          <label for="stepSeven">Step Seven</label>
          <input type="text" className="form-control" className="directions"></input>
        </div>
        <div className="form-group">
          <label for="stepEight">Step Eight</label>
          <input type="text" className="form-control" className="directions"></input>
        </div>
      </form>
    </div>
  )
}

export default CreateAssignment;