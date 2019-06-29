import React, { Component } from "react";
import { Link } from "react-router-dom";
import Smurf from "./Smurf";
import axios from "axios";
import {
  Card,
  CardBody,
  CardTitle,
  CardText
} from 'reactstrap';

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
                <Card key={smurf.id}>
                  <CardBody>
                    <CardTitle>{smurf.name} Smurf</CardTitle>
                    <CardText>{smurf.height} cm tall</CardText>
                    <CardText>{smurf.age} smurf years old</CardText>
                  </CardBody>
                </Card>
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
