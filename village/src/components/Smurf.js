import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardText
} from 'reactstrap';

const Smurf = props => {
  const smurf = props.smurfs.find(i => String(i.id) === props.match.params.id);

  if (!smurf) {
    return <div>Loading...</div>;
  }

  return (
    <Card key ={smurf.id}>
      <CardBody>  
        <CardTitle>{smurf.name} Smurf</CardTitle>
        <CardText>{smurf.height} cm tall</CardText>
        <CardText>{smurf.age} smurf years old</CardText>
        <Link to={`/edit-smurf/${smurf.id}`}>Edit</Link>
      </CardBody>
    </Card>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
