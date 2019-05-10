import React from "react";
import { Subscribe } from "unstated";
import MenuItem from "./MenuItemComponent.jsx";
import MenuChangeButton from "./MenuChangeComponent.jsx"
import { MenuStore } from "../../../stores";

import "../../../stylesheets/MenuList.css";

var menuchangebutton_style = {
  background: "#E0E0E0",
}

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
              />
            ))}
            {/* 여기다가 화살표? 시발? 몰라 */}
            <MenuChangeButton
            style={menuchangebutton_style}
            status={"left"}
            handleChangeMenuDisplay={menu.changeMenuDisplay.bind(menu)}
            />
            <MenuChangeButton
            style={menuchangebutton_style}
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
