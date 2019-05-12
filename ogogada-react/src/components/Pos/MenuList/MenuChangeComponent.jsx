import React from "react";
import { Image, Button, Icon } from 'semantic-ui-react'

var menuChangeStyle = {
  width: "100%",
  height: "100%",
  "font-size": "13em",
  "line-height": "14.5vh"
};

const MenuItemComponent = props => {
  var icon_name = (props.status == "left") ? "triangle left" : "triangle right";
  return (
    <div style={{"display": "flex", "width": "100%", "height": "100%"}}>
      <Icon
        name={icon_name}
        style={menuChangeStyle}
        onClick={() => {
          props.handleChangeMenuDisplay(props.status);
        }}
      >
      </Icon>
    </div>
  );
};

export default MenuItemComponent;
