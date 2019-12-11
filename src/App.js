import React from 'react';
import './App.css';
import PostContainer from './components/PostContainer'
import Details from './components/Details'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li className="navbar"><Link to="/">Home</Link></li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route exact path="/" component={PostContainer}/>
        <Route path="/posts/:index" component={Details}/>
      </Switch>
    </Router>
  );
}

export default App;
