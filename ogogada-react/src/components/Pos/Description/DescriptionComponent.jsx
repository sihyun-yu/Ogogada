import React from "react";
import "../../../stylesheets/Description.css";
import { Button, Icon } from 'semantic-ui-react'
import Timer from "./Timer.jsx"
import MenuList from "../MenuList/MenuListComponent";
import QuestionDialog from "../MenuList/QuestionDialogComponent";
import { MenuStore } from "../../../stores";
import { Subscribe } from "unstated";
//import Button from "@material-ui/core/Button";

const DescriptionComponent = props => {
  return (
    <Subscribe to={[MenuStore]}>
      {(menu) => (
          <div className="description__container">
            <div className="description" >
              <p>STAGE {props.level}</p>
            </div>
            <div className="timer">
              <div className="timer__icon">
                <Icon name='stopwatch'></Icon>
              </div>
              <div className="timer__timer">
                <Timer
                  flag={props.flag}
                  level={props.level}
                  username={props.username}  
                ></Timer>
              </div>
            </div>
            <div className="replay" onClick={menu.openQuestion.bind(menu)}>
              <Button size="medium" onClick={() => {
                }}>
                  TASK
                {/* <Icon name='tasks' ><span className="task">Task</span></Icon> */}
              </Button>
              {/* <Icon name='tasks' ><span className="task">Task</span></Icon> */}
            </div>
            <div className="home__button">
              <Button size="medium" onClick={() => {
                props.routeChange();
                props.openQuestion();
                props.handleCompletePayment();
                props.closeRefund();
                props.closeGifticon();
              }}>
                HOME
              </Button>
            </div>
          </div>
      )}
    </Subscribe>
  );
};

export default DescriptionComponent;
