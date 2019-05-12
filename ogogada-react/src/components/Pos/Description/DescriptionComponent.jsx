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
    <div>
    <Subscribe to={[MenuStore]}>
      {(menu) => (
        <div>
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
            <div className="replay" onClick={menu.openQuestion.bind(menu)}>
              <Icon name='tasks' size='small'>task</Icon>
            </div>
          </div>
        </div>
      )}
    </Subscribe>
    </div>
    
  );
};

export default DescriptionComponent;
