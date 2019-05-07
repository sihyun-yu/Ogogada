import React from "react";
import { Container, Header, Button } from 'semantic-ui-react'
//import Button from "@material-ui/core/Button";

const MenuItemComponent = props => {
  return (
      <Button
        className="menu-item"
        onClick={() => {
          props.handleAddSelectedMenu(props.id);
        }}
      >
        <div className="menu-item__name">{props.menu[0]}</div>
        <div className="menu-item__price">
          <span className="price__value">{props.menu[1]}</span>
          <span className="price__unit">won</span>
        </div>
      </Button>
  );
};

export default MenuItemComponent;
