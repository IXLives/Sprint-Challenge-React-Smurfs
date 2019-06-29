import React, { Component } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import {
  Navbar,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  updateSmurfs = smurfs => {
    this.setState({
      smurfs
    });
  };

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  }

  render() {
    return (
      <div className="App">
        <div className = 'NavBar'>
          <Navbar>
            <Nav>
              <NavItem>
                <NavLink href = '/'>Smurfs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href = '/smurf-form'>Smurf Form</NavLink>
              </NavItem>
            </Nav>
          </Navbar>
        </div>
        <Route
          exact
          path="/smurf-form"
          render={props => (
            <SmurfForm
              {...props}
              smurfs={this.state.smurfs}
              updateSmurfs={this.updateSmurfs}
            />
          )}
        />

        <Route
          exact
          path="/"
          render={props => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              updateSmurfs={this.updateSmurfs}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
