import React from "react";
import { Link } from "react-router-dom";

const Smurf = props => {
  const smurf = props.smurfs.find(i => String(i.id) === props.match.params.id);

  if (!smurf) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Smurf">
      <h3>{smurf.name}</h3>
      <strong>{smurf.height} tall</strong>
      <p>{smurf.age} smurf years old</p>
      <Link to={`/edit-smurf/${smurf.id}`}>Edit</Link>
    </div>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
