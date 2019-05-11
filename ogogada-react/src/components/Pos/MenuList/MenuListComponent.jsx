import React from "react";
import { Subscribe } from "unstated";
import MenuItem from "./MenuItemComponent.jsx";
import MenuChangeItem from "./MenuChangeComponent.jsx"
import RefundItem from "./RefundComponent.jsx"
import GifticonItem from "./GifticonComponent.jsx"
import { MenuStore } from "../../../stores";
import GifticonDialog from "./GifticonDialogComponent.jsx"

import "../../../stylesheets/MenuList.css";

var menuchangebutton_style = {
  background: "#E0E0E0",
}
/*여기서 DB 레벨 불러오면 될듯 함*/
var level = 2;

const MenuListComponent = props => {
  console.log(props.level);
  return (
    <div className="menus__container">
      <Subscribe to={[MenuStore]}>
        {(menu) => (
          <div className="menus">
            {menu.state.menus.map((menuItem, index) => (
              <MenuItem 
                key={index + menuItem[3] * 8}
                id={index + menuItem[3] * 8}
                menu={menuItem}
                handleAddSelectedMenu={menu.addSelectedMenu.bind(menu)}
                level={props.level}
                changeRecentMenu={menu.changeRecentMenu.bind(menu)}
              />
            ))}
            <RefundItem
            level={props.level}
            />
            <GifticonItem
            level={props.level}
            handleGifticonDialog={menu.openGifticon.bind(menu)}
            />
            <MenuChangeItem
            status={"left"}
            style={menuchangebutton_style}
            handleChangeMenuDisplay={menu.changeMenuDisplay.bind(menu)}
            />
            <MenuChangeItem
            status={"right"}
            style={menuchangebutton_style}
            handleChangeMenuDisplay={menu.changeMenuDisplay.bind(menu)}
            />
            <GifticonDialog
            open={menu.state.gifticonOpen}
            handleGifticonDialog={menu.closeGifticon.bind(menu)}
            />
          </div>
        )}
      </Subscribe>
    </div>
  );
};

export default MenuListComponent;
