import React from "react";
import { Image, Button } from 'semantic-ui-react'

const MenuItemComponent = props => {
  return (
      <Button
        className="menu-change-item"
        onClick={() => {
          props.handleChangeMenuDisplay(props.status);
        }}
      >

      </Button>
  );
};

export default MenuItemComponent;
