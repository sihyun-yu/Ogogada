import React from "react";
import { Image, Button } from 'semantic-ui-react'

var divStyle = {
  
  padding: "1px"
};

const MenuItemComponent = props => {
 if (props.level >= props.menu[2]) {
    return (
        <Button
          className="menu-item"
          onClick={() => {
            props.handleAddSelectedMenu(props.id);
          }}
        >
          <div className="menu-item__image">
            <Image className="menu-item__image__image" src='/images/americano_ice.png' size='tiny' />
          </div>
          <div className="menu-item__name">{props.menu[0]}</div>
          <div className="menu-item__price">
            <span className="price__value">{props.menu[1]}</span>
            <span className="price__unit">won</span>
          </div>
        </Button>
    );
  }

  else {
    return (

      /*
      숨겨짋 버튼에 대한 부분은 여기에다가 넣으면 됨 
      */
        <Button
          className="hide-item">
          <div className="hide-item__name">Hidden</div>
        </Button>
    );
  };
}
export default MenuItemComponent;
