import React from "react";
import { Button } from 'semantic-ui-react'

var divStyle = {
  background: "#EAD1D1",
  width: "100%",
  height: "100%",
  "font-size": "25px",
};

const NumberItemComponent = props => {
  return (
    <div className="number-item">
      <Button
        style={divStyle}
        className="number-item__button"
        variant="contained"
        onClick={() => {
          if (props.gifticonOpen == false) {
              props.changeNumberbyPad(props.currentMenuID, props.numbersByPad, props.number);
          }
          else {
            props.addGifticonCode(props.number);
          }
        }}>
       {props.number}
      </Button>
    </div>
  );
};

export default NumberItemComponent;
