import React from "react";
import { Image, Button, Icon } from 'semantic-ui-react'

var menuChangeStyle = {
  width: "100%",
  height: "100%",
  "font-size": "13em",
  "line-height": "14.5vh"
};

var borderMenuChangeStyle = {
  width: "100%",
  height: "100%",
  "font-size": "13em",
  "line-height": "14.5vh",
  border: "5px solid red"  
}

const MenuItemComponent = props => {
  var icon_name = (props.status == "left") ? "triangle left" : "triangle right";
  if (props.historyList[props.historyIndex][0] == 'change' &&
    props.historyList[props.historyIndex][1] == props.id) {
      return (
        <div style={{"display": "flex", "width": "100%", "height": "100%"}}>
          <Icon
            name={icon_name}
            style={borderMenuChangeStyle}
            onClick={() => {
              props.handleChangeMenuDisplay(props.status);
              props.historyCheck(props.level, 'change', props.id);
            }}
          >
          </Icon>
        </div>
      );
  }

  else {
      return (
        <div style={{"display": "flex", "width": "100%", "height": "100%"}}>
          <Icon
            name={icon_name}
            style={menuChangeStyle}
          >
          </Icon>
        </div>
      );    
  }
};

export default MenuItemComponent;
