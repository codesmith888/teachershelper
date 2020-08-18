import React from 'react';
import '../styles/App.css';
import axios from 'axios';

const Directions = () => {
  return (
    <form>
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
        <div className="form-group">
          <input type="submit"></input>
        </div>
      </form>
  )
}

