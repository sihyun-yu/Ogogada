import React from "react";
import { Subscribe } from "unstated";
import NumberItem from "./NumberItemComponent.jsx";
import { NumberStore } from "../../../stores";
import { MenuStore } from "../../../stores"
import {HistoryStore} from "../../../stores"
import "../../../stylesheets/NumberList.css";

var divStyle = {
  background: "#EAD1D1",
  padding: "1px"
};

const NumberListComponent = props => {
  if(props.gifticonOpen == false) {
    return (
      <div className="number-list__container">
        <Subscribe to={[NumberStore, MenuStore, HistoryStore]}>
          {(number, menu, history) => (
            <div className="number-list">
              {number.state.numbers.map((numberItem) => (
                <NumberItem
                  number={numberItem}
                  currentMenuID={menu.state.currentMenuID}
                  changeNumberbyPad = {menu.changeNumberbyPad.bind(menu)}
                  numbersByPad = {menu.state.numbersByPad}
                  gifticonOpen = {menu.state.gifticonOpen}
                  addGifticonCode = {menu.addGifticonCode.bind(menu)}
                  id={parseInt(numberItem)}
                  level={props.level}
                  historyCheck={history.increaseIndex.bind(history)}
                  historyList={history.state.historyList[props.level]}
                  historyIndex={history.state.historyIndex}
  
                />
              ))}
            </div>
          )}
        </Subscribe>
      </div>
    );
  }
  else {
    return (
      <div className="number-list__container__gifticonOpen">
        <Subscribe to={[NumberStore, MenuStore, HistoryStore]}>
          {(number, menu, history) => (
            <div className="number-list">
              {number.state.numbers.map((numberItem) => (
                <NumberItem
                  number={numberItem}
                  currentMenuID={menu.state.currentMenuID}
                  changeNumberbyPad = {menu.changeNumberbyPad.bind(menu)}
                  numbersByPad = {menu.state.numbersByPad}
                  gifticonOpen = {menu.state.gifticonOpen}
                  addGifticonCode = {menu.addGifticonCode.bind(menu)}
                  id={parseInt(numberItem)}
                  level={props.level}
                  historyCheck={history.increaseIndex.bind(history)}
                  historyList={history.state.historyList[props.level]}
                  historyIndex={history.state.historyIndex}
  
                />
              ))}
            </div>
          )}
        </Subscribe>
      </div>
    );
  }
  
};

export default NumberListComponent;
