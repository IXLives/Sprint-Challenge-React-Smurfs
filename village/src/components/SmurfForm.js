import React, { Component } from "react";
import axios from "axios";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  editSmurf = e => {
    const { name, age, height } = this.state;
    const updated = { name, age, height };
    const id = e.key;
    console.log(id);
    e.preventDefault();

    axios.put(`http://localhost:3333/smurfs/${id}`, updated).then(response => {
      this.props.updateSmurfs(response.data);
      this.setState({
        name: "",
        age: 0,
        email: ""
      });
    });
  };

  addSmurf = e => {
    // add code to create the smurf using the api

    const { name, age, height } = this.state;
    const newSmurf = { name, age, height };
    e.preventDefault();
    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then(response => {
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

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
          {/* <button type='edit' onClick = {this.editSmurf}>Edit Smurf</button> */}
        </form>
      </div>
    );
  }
}

export default SmurfForm;
