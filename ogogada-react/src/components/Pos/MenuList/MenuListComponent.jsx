import React from "react";
import { Subscribe } from "unstated";
import MenuItem from "./MenuItemComponent.jsx";
import MenuChangeItem from "./MenuChangeComponent.jsx"
import RefundItem from "./RefundComponent.jsx"
import GifticonItem from "./GifticonComponent.jsx"
import { MenuStore } from "../../../stores";

import "../../../stylesheets/MenuList.css";

const MenuListComponent = props => {
  console.log(props.level);
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
                level={props.level}
              />
            ))}
            <RefundItem
            level={props.level}
            />
            <GifticonItem
            level={props.level}
            />
            <MenuChangeItem
            status={"left"}
            handleChangeMenuDisplay={menu.changeMenuDisplay.bind(menu)}
            />
            <MenuChangeItem
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
