import React, { Component } from "react";
import axios from "axios";

class EditForm extends Component {
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
        console.log(id)
        e.preventDefault();
    
        axios.put(`http://localhost:3333/smurfs/${id}`, updated)
          .then(response => {
            this.props.updateSmurfs(response.data);
            this.setState({
              name: "",
              age: 0,
              email: ""
            });
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
              
              <button type='edit' onClick = {this.editSmurf}>Edit Smurf</button>
            </form>
          </div>
        );
      }
    }
    
    export default EditForm;
    