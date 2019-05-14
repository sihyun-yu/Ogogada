import React from "react";
import { Image, Button, Icon } from 'semantic-ui-react'

var menuChangeStyle = {
  width: "100%",
  height: "100%",
  "font-size": "13em",
  "line-height": "14.5vh"
};

var hiddenStyle = {
  padding: "1px",
  height:"14.5vh",
  "font-size": "18px",
  display: "flex",
  "align-items": "center",
  "justify-content": "center",
  "text-align": "center",
  "color": "black",
  "flex-direction": "coloumn"
};

const MenuItemComponent = props => {
  var icon_name = (props.status == "left") ? "triangle left" : "triangle right";
  if (props.level >= 2) {
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
  }

  else {
    return (
    <Button
      color='white'
      style={hiddenStyle}
      className="hide-item">
        <div className="hide-item__image">
          <Image className="hide-item__image__image" src='/images/hidden.png' size='tiny' />
        </div>
    </Button>
    );
  }
};

export default MenuItemComponent;
