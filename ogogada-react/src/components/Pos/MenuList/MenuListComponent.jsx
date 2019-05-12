import React from "react";
import { Subscribe } from "unstated";
import MenuItem from "./MenuItemComponent.jsx";
import MenuChangeItem from "./MenuChangeComponent.jsx"
import RefundItem from "./RefundComponent.jsx"
import GifticonItem from "./GifticonComponent.jsx"


import { MenuStore } from "../../../stores";
import { NumberStore } from "../../../stores";

import { Store } from "../../../stores";
import GifticonDialog from "./GifticonDialogComponent.jsx"
import RefundDialog from "./RefundDialogComponent.jsx"
import QuestionDialog from "./QuestionDialogComponent.jsx"

import "../../../stylesheets/MenuList.css";


import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Button } from 'semantic-ui-react'

var menuchangebutton_style = {
  background: "#E0E0E0",
}
/*여기서 DB 레벨 불러오면 될듯 함*/
var level = 2;

const MenuListComponent = props => {
  console.log("menulistComponent", props.level);
  return (
    <div className="menus__container">
      <Subscribe to={[MenuStore, NumberStore]}>
        {(menu, number) => (
          <div className="allcomponent-container">
          <div className="menus">
            {menu.state.menus.map((menuItem, index) => (
              <MenuItem 
                key={index + menuItem[3] * 8}
                id={index + menuItem[3] * 8}
                menu={menuItem}
                handleAddSelectedMenu={menu.addSelectedMenu.bind(menu)}
                level={props.level}
                refreshValues={menu.refreshValues.bind(menu)}
              />
            ))}
            <RefundItem
            level={props.level}
            handleRefundDialog = {menu.openRefund.bind(menu)}
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
          </div>
          <div>
            <GifticonDialog
            open={menu.state.gifticonOpen}
            display={menu.state.display}
            handleGifticonDialog={menu.closeGifticon.bind(menu)}
            cnt={menu.state.cnt}
            closeGifticon={menu.closeGifticon.bind(menu)}
            checkGifticonCode={menu.checkGifticonCode.bind(menu)}
            tryAgain={menu.state.tryAgain}
            />
          </div>
          <div>
            <RefundDialog
            open={menu.state.refundOpen}
            handleRefundDialog={menu.closeRefund.bind(menu)}
            closeRefund={menu.closeRefund.bind(menu)}
            selectRefund={menu.selectRefund.bind(menu)}
            confirm = {menu.confirm.bind(menu)}
            isConfirmed = {menu.state.isConfirmed}
            refundIdx = {menu.state.refundIdx}
            />
          </div>
          <div>
            <QuestionDialog
              isConfirmed = {menu.state.questionConfirmed}
              confirm = {menu.closeQuestion.bind(menu)}
              open = {menu.openQuestion.bind(menu)}
              level = {props.level}
            />
          </div>
        </div>
        )}
      </Subscribe>
    </div>
  );
};

export default MenuListComponent;
