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

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: "",
      body: ""
    }
  }

  postUpdate = (titleUpdate, bodyUpdate) => {
    this.setState( { title : titleUpdate, body : bodyUpdate} )
  }

  render() {
    return (
      <Router>
        <div>
          <nav className="nav">
            <ul>
              <li className="nav"><Link to="/" className="nav">Home</Link></li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route exact path="/">
            <PostContainer updateState={this.postUpdate}/>
          </Route>
          <Route path="/posts/:index" render={(props) => <Details {...props} title={this.state.title} body={this.state.body}/> }/>
          
        </Switch>
      </Router>
    );
  }
}

export default App;
