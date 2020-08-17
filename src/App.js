import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './components/Home';
import CreateAssignment from './components/CreateAssignment'
import Classroom from './components/Classroom'
import './styles/App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to ="/">Home</Link>
          <Link to ='/CreateAssignment'>New Assignment</Link>
          <Link to ='/Classroom'>Classroom</Link>
        </nav>
      </div>
      <div className="App">
        <h1>Teacher's Helper: </h1>
        <h4>A Customizable Tool for Distance Learning</h4>
        <Route path="/" exact component={Home}/>
        <Route path="/CreateAssignment" exact component={CreateAssignment}/>
        <Route path="/Classroom" exact component={Classroom}/>
      </div>
    </Router>
    
  );
}

export default App;