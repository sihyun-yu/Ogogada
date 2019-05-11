import React from "react";
import "../../../stylesheets/Description.css";
import { Button, Icon } from 'semantic-ui-react'
import Timer from "./Timer.jsx"
//import Button from "@material-ui/core/Button";

const DescriptionComponent = props => {
  return (
    <div className="description__container">
      <div id="description" >
        <h3>Level: {props.level}</h3>
      </div>
      <div id="user_id">
        <h3>ID: {props.username}</h3>
      </div>
      <div id="timer">
        <Icon name='stopwatch'></Icon>
        <Timer></Timer>
      </div>
    </div>
    
  );
};

export default DescriptionComponent;
