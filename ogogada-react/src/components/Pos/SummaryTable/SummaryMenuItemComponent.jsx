import React from "react";
import Button from "@material-ui/core/Button";
import "../../../stylesheets/SummaryTable.css";
import metaJSON from "../../../assets/meta.js";

var deleteButtonStyle = {
  width: "20%",
  "minWidth": "0px"
}

const SummaryTableComponent = props => {
  //console.log(numByButton);
  //console.log(numByButton);
  const getTotalValue = (menu, count) => menu[1] * count;  
  const getActualValue = (menu, count, coupon) => menu[1] * count * (1 - metaJSON.coupons[coupon])
  return (
    <div className="summary-menu-item"
        onClick={() => {
        props.resetNumber();
        props.setCurrentMenuID(props.id);
    }}>
      <div className="summary-menu-item__name">
        <p>{props.menu[0]}</p>
      </div>
      <div className="summary-menu-item__count">
        <div className="count__value">
          <p>{props.count}</p>
        </div>
        <div className="count__adjust">
          <div className="count__adjust-up" onClick={props.handleIncrement}>
            <p>+</p>
          </div>
          <div className="count__adjust-down" onClick={props.handleDecrement}>
            <p>-</p>
          </div>
        </div>
      </div>
      <div className="summary-menu-item__total">
        <p>{getTotalValue(props.menu, props.count)} ₩</p>
      </div>
      <div className="summary-menu-item__actual">
        <div className="summary-menu-item__actual2">
        <p>{getActualValue(props.menu, props.count, props.coupon)} ₩</p>
        </div>
        <div className="summary-menu-item__delete">
          <Button
            className="summary-menu-item__delete-button"
            variant="contained"
            color="secondary"
            style={deleteButtonStyle}
            onClick={() => {
              props.handleDelete(props.id);
            }}
          >
            X
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SummaryTableComponent;
