import React from "react";
import "../../../stylesheets/DescriptionTutorial.css";
import { Button, Icon } from 'semantic-ui-react'
import Timer from "./Timer.jsx"
//import Button from "@material-ui/core/Button";

const DescriptionComponent = props => {
  return (
    <div className="description__container">
      <div className="description" >
        <p>Tutorial {props.level}</p>
      </div>
      <div className="replay__history" onClick={() => {
        props.openQuestion();
      }}>
        <Button size="medium" onClick={() => {
          }}>
            TASK
          {/* <Icon name='tasks' ><span className="task">Task</span></Icon> */}
        </Button>
      </div>
      <div className="home__button">
        <Button size="medium" onClick={() => {
          props.openPopup();
        }}>
          HOME
        </Button>
      </div>
    </div>
    
  );
};

export default DescriptionComponent;
