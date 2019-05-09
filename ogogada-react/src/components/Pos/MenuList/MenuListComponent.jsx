import React from "react";
import { Subscribe } from "unstated";
import MenuItem from "./MenuItemComponent.jsx";
import { MenuStore } from "../../../stores";

import "../../../stylesheets/MenuList.css";

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
            <MenuItem
              key={"sibal"}
              id={"sibal"}
              menu={"sibal"}
            />
            <MenuItem
              key={"sibal"}
              id={"sibal"}
              menu={"sibal"}
            />
          </div>
        )}
      </Subscribe>
    </div>
  );
};

export default MenuListComponent;
