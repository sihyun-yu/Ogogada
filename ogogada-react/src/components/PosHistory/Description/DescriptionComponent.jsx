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
      <div className="home__button">
        <Button size="medium" onClick={() => {
          props.handleCompletePayment();
          props.routeChange();
          props.resetIndex();
          props.closeRefund();
          props.closeGifticon();
        }}>
          HOME
        </Button>
      </div>
    </div>
    
  );
};

export default DescriptionComponent;
