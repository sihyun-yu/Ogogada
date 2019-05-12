import React from "react";
import "../../../stylesheets/Description.css";
import { Button, Icon } from 'semantic-ui-react'
import Timer from "./Timer.jsx"
//import Button from "@material-ui/core/Button";

const DescriptionComponent = props => {
  return (
    <div className="description__container">
      <div className="description" >
        <p>Level: {props.level}</p>
      </div>
      <div className="user_id">
        <p>ID: {props.username}</p>
      </div>
      <div className="timer">
        <div className="timer__icon">
          <Icon name='stopwatch'></Icon>
        </div>
        <div className="timer__timer">
          <Timer></Timer>
        </div>
      </div>
      <div className="replay">
        <Icon name='sound'></Icon>
      </div>
    </div>
    
  );
};

export default DescriptionComponent;
