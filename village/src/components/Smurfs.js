import React, { Component } from "react";
import { Link } from "react-router-dom";
import Smurf from "./Smurf";
import axios from "axios";

class Smurfs extends Component {
  deleteSmurf = e => {
    e.preventDefault();
    const id = e.target.name;

    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        console.log(response.data);
        this.props.updateSmurfs(response.data);
        this.setState({
          name: "",
          age: 0,
          height: ""
        });
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  };

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Link to={`/smurf/${smurf.id}`} key={smurf.id}>
                <div className="Smurf" name = {smurf.id}>
                  <h3>{smurf.name} Smurf</h3>
                  <strong>{smurf.height} tall</strong>
                  <p>{smurf.age} smurf years old</p>
                  <button name = {smurf.id} onClick={this.deleteSmurf}>Exile Smurf!</button>
                </div>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
