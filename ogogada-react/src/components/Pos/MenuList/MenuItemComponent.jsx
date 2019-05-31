import React from "react";
import { Image, Button } from 'semantic-ui-react'

var buttonStyle = {
  // background: 'white',
  padding: "1px",
  height:"14.5vh",
  display: "flex",
  "flex-direction": "column",
  "justify-content": "center",
  "align-items": "center",
};

var imgStyle = {
  height: "8vh",
  width: "auto"
}

var iceStyle = {
  color: 'blue',
}

var hotStyle = {
  color: 'red',
}

const MenuItemComponent = props => {
  if (props.level >= props.menu[2]) {
    var len = props.menu[0].length
    // 메뉴 이름
    var menu = props.menu[0].substring(0, len-4)
    // HOT인지 ICE인지
    var temp = props.menu[0].substring(len-3)
    if (temp == 'ICE') {
      return (
        <Button
          style={buttonStyle}
          onClick={() => {
            props.handleAddSelectedMenu(props.id);
            props.refreshValues(props.id)
          }}
        >
          {/* image 안하기로 함 일단 */}
          {/* <div className="menu-item__image">
            <Image className="menu-item__image__image"
            src='/images/americano_ice.png'
            style={imgStyle}
            size='tiny' />
          </div> */}
          <div className="menu-item__name">{menu}<div style={iceStyle}>{temp}</div></div>
          <div className="menu-item__price">
            <span className="price__value">{props.menu[1]}</span>
            <span className="price__unit">won</span>
          </div>
        </Button>
      );
    } 
    else if (temp == 'HOT') {
      return (
        <Button
          style={buttonStyle}
          onClick={() => {
            props.handleAddSelectedMenu(props.id);
            props.refreshValues(props.id)
          }}
        >
          {/* image 안하기로 함 일단 */}
          {/* <div className="menu-item__image">
            <Image className="menu-item__image__image"
            src='/images/americano_ice.png'
            style={imgStyle}
            size='tiny' />
          </div> */}
          <div className="menu-item__name">{menu}<div style={hotStyle}>{temp}</div></div>
          <div className="menu-item__price">
            <span className="price__value">{props.menu[1]}</span>
            <span className="price__unit">won</span>
          </div>
        </Button>
      );
    }
  }

  else {
    return (
      /*
      숨겨짋 버튼에 대한 부분은 여기에다가 넣으면 됨 
      */
        <Button
        style={buttonStyle}
          className="hide-item">
            <div className="hide-item__image">
              <Image className="hide-item__image__image" src='/images/hidden.png' size='tiny' />
            </div>
        </Button>
    );
  };
}
export default MenuItemComponent;
