import React from "react";
import { Button } from 'semantic-ui-react'

var divStyle = {
  background: "#EAD1D1",
  width: "100%",
  height: "100%",
  "font-size": "25px",
};

var borderDivStyle = {
  background: "#EAD1D1",
  width: "100%",
  height: "100%",
  border: "5px solid red",
  "font-size": "25px",
}

const NumberItemComponent = props => {
  if (props.historyList[props.historyIndex][0] == 'number' &&
    props.historyList[props.historyIndex][1] == props.id && props.number != "00") {
      return (
        <div className="number-item">
          <Button
            style={borderDivStyle}
            className="number-item__button"
            variant="contained"
            onClick={() => {
              if (props.gifticonOpen == false) {
                  props.changeNumberbyPad(props.currentMenuID, props.numbersByPad, props.number);
                  props.historyCheck(props.level, 'number', props.id);

              }
              else {
                props.addGifticonCode(props.number);
                props.historyCheck(props.level, 'number', props.id);
              }
            }}>
           {props.number}
          </Button>
        </div>
      );
  }
  else {
      return (
        <div className="number-item">
          <Button
            style={divStyle}
            className="number-item__button"
            variant="contained">
           {props.number}
          </Button>
        </div>
      );    
  }
};

export default NumberItemComponent;
