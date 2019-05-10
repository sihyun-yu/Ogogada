import React from "react";
import { Subscribe } from "unstated";
import MenuItem from "./MenuItemComponent.jsx";
import MenuChangeItem from "./MenuChangeComponent.jsx"
import RefundItem from "./RefundComponent.jsx"
import GifticonItem from "./GifticonComponent.jsx"
import { MenuStore } from "../../../stores";

import "../../../stylesheets/MenuList.css";

<<<<<<< HEAD
var menuchangebutton_style = {
  background: "#E0E0E0",
}
=======
/*여기서 DB 레벨 불러오면 될듯 함*/
var level = 2;
>>>>>>> 04ef42fd7c397ccead4e4c7c9336a0280a80060e

const MenuListComponent = props => {
  console.log("this is", props);
  return (
    <div className="menus__container">
      <Subscribe to={[MenuStore]}>
        {(menu) => (
          <div className="menus">
            {menu.state.menus.map((menuItem, index) => (
              <MenuItem 
                key={index}
                id={index}
                menu={menuItem}
                handleAddSelectedMenu={menu.addSelectedMenu.bind(menu)}
                level={level}
              />
            ))}
<<<<<<< HEAD
            {/* 여기다가 화살표? 시발? 몰라 */}
            <MenuChangeButton
            style={menuchangebutton_style}
            status={"left"}
            handleChangeMenuDisplay={menu.changeMenuDisplay.bind(menu)}
            />
            <MenuChangeButton
            style={menuchangebutton_style}
=======
            <RefundItem
            level={level}
            />
            <GifticonItem
            level={level}
            />
            <MenuChangeItem
            status={"left"}
            handleChangeMenuDisplay={menu.changeMenuDisplay.bind(menu)}
            />
            <MenuChangeItem
>>>>>>> 04ef42fd7c397ccead4e4c7c9336a0280a80060e
            status={"right"}
            handleChangeMenuDisplay={menu.changeMenuDisplay.bind(menu)}
            />
          </div>
        )}
      </Subscribe>
    </div>
  );
};

export default MenuListComponent;
