import React from "react";
import Button from "@material-ui/core/Button";
import "../../../stylesheets/SummaryTable.css";

const SummaryTableComponent = props => {
  const getTotalValue = (menu, count) => menu[1] * count;
  return (
    <div className="summary-menu-item">
      <div className="summary-menu-item__name">{props.menu[0]}</div>
      <div className="summary-menu-item__count">
        <div className="count__value">{props.count}</div>
        <div className="count__adjust">
          <div className="count__adjust-up" onClick={props.handleIncrement}>
            +
          </div>
          <div className="count__adjust-down" onClick={props.handleDecrement}>
            -
          </div>
        </div>
      </div>
      <div className="summary-menu-item__total">
        {getTotalValue(props.menu, props.count)} 원
        <div className="summary-menu-item__delete">
          <Button
            className="summary-menu-item__delete-button"
            variant="contained"
            color="secondary"
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
