import React from "react";
import { Button } from 'semantic-ui-react'

var divStyle = {
  background: "#EAD1D1",
  width: "100%",
  height: "100%"
};

const NumberItemComponent = props => {
  return (
    <div className="number-item">
      <Button
        style={divStyle}
        className="number-item__button"
        variant="contained"
        onClick={() => {
          props.addNumber(props.recentMenu, props.number)
        }}>
       {props.number}
      </Button>
    </div>
  );
};

export default NumberItemComponent;
