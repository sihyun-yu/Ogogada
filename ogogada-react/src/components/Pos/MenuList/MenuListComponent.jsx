import React from "react";
import { Subscribe } from "unstated";
import MenuItem from "./MenuItemComponent.jsx";
import MenuChangeItem from "./MenuChangeComponent.jsx"
import RefundItem from "./RefundComponent.jsx"
import GifticonItem from "./GifticonComponent.jsx"
import { MenuStore } from "../../../stores";

import "../../../stylesheets/MenuList.css";

/*여기서 DB 레벨 불러오면 될듯 함*/
var level = 2;

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
            <RefundItem
            />
            <GifticonItem
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
