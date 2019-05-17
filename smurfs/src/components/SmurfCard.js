import React from "react";
import { Link } from "react-router-dom";

const SmurfCard = props => {
  const smurf = props.smurfs.find(
    smurf => smurf.id.toString() === props.match.params.id
  );
  return (
    <div className="smurf-card">
      <div className="smurf-card-info">
        <h3>{smurf.name}</h3>
        <p>{smurf.height} tall</p>
        <p>{smurf.age} smurf years old</p>
      </div>
    </div>
  );
};

export default SmurfCard;