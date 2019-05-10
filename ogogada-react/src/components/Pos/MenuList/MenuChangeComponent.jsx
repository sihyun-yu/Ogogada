import React from "react";
import { Image, Button } from 'semantic-ui-react'

var menuChangeStyle = {
  background: '#E0E0E0',
  padding: "1px",
  height:"14.5vh"
};

const MenuItemComponent = props => {
  return (
      <Button
        style={menuChangeStyle}
        className="menu-change-item"
        onClick={() => {
          props.handleChangeMenuDisplay(props.status);
        }}
      >

      </Button>
  );
};

export default MenuItemComponent;
