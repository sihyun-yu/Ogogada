import React from "react";
import Button from "@material-ui/core/Button";

const MenuItemComponent = props => {
  return (
    <div className="menu-item">
      <div className="menu-item__name">{props.menu[0]}</div>

      <div className="menu-item__price">
        <span className="price__value">{props.menu[1]}</span>
        <span className="price__unit">원</span>
      </div>

      <Button
        className="menu-item__button"
        variant="contained"
        onClick={() => {
          props.handleAddSelectedMenu(props.id);
        }}
      >
        추가
      </Button>
    </div>
  );
};

export default MenuItemComponent;
