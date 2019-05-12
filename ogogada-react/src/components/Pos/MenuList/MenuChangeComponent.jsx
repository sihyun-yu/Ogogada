import React from "react";
import { Image, Button, Icon } from 'semantic-ui-react'

var menuChangeStyle = {
  background: '#E0E0E0',
  padding: "1px",
  height:"14.5vh"
};

const MenuItemComponent = props => {
  console.log(props.status);
  var icon_name = (props.status == "left") ? "triangle left" : "triangle right";
  return (
      <Icon
        name={icon_name}
        style={menuChangeStyle}
        className="menu-change-item"
        onClick={() => {
          props.handleChangeMenuDisplay(props.status);
        }}
      >
      </Icon>
  );
};

export default MenuItemComponent;
