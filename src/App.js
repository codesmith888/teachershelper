import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './components/Home';
import CreateAssignment from './components/CreateAssignment'
import Classroom from './components/Classroom'
import Directions from './components/Directions'
import ChooseHelper from './components/ChooseHelper'
import ChooseEnvironment from './components/ChooseEnvironment'
import './styles/App.css';

function App() {
  return (
    <Router>
      <div>
        <nav class="navbar navbar-expand-lg">
          <Link to ="/" className="nav-link">Home</Link>
          <Link to ='/CreateAssignment' className="nav-link">New Assignment</Link>
          <Link to ='/Classroom' className="nav-link">Classroom</Link>
        </nav>
      </div>
      <div className="App">
        <h1 id="title">Teacher's Helper: </h1>
        <h4 id="subtitle">A Customizable Tool for Distance Learning</h4>
        <Route path="/" exact component={Home}/>
        <Route path="/CreateAssignment" exact component={CreateAssignment}/>
        <Route path="/Classroom" exact component={Classroom}/>
        <Route path="/Directions" exact component={Directions}/>
        <Route path="/ChooseHelper" exact component={ChooseHelper} />
        <Route path="/ChooseEnvironment" exact component={ChooseEnvironment} />
      </div>
    </Router>
    
  );
}

export default App;