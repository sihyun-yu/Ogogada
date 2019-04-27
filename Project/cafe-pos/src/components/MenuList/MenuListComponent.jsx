import React from "react";
import { Subscribe } from "unstated";
import MenuItem from "./MenuItemComponent.jsx";
import { MenuStore } from "../../stores";

import "../../stylesheets/MenuList.css";

const MenuListComponent = props => {
  return (
    <div className="menu-list__container">
      <Subscribe to={[MenuStore]}>
        {menu => (
          <div className="menu-list">
            {menu.state.menus.map((menuItem, index) => (
              <MenuItem
                key={index}
                id={index}
                menu={menuItem}
                handleAddSelectedMenu={menu.addSelectedMenu.bind(menu)}
              />
            ))}
          </div>
        )}
      </Subscribe>
    </div>
  );
};

export default MenuListComponent;
