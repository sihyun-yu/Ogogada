import React from "react";
import Button from "@material-ui/core/Button";

const NumberItemComponent = props => {
  return (
    <div className="number-item">
      <Button
        className="number-item__button"
        variant="contained">
       {props.number}
      </Button>
    </div>
  );
};

export default NumberItemComponent;
