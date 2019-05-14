import React from "react";
import { Image, Button } from 'semantic-ui-react'

var refundStyle = {
  padding: "1px",
  height:"14.5vh",
  "font-size": "18px",
  display: "flex",
  "align-items": "center",
  "justify-content": "center",
  "text-align": "center",
  "color": "black",
  "flex-direction": "coloumn"
};

var borderRefundStyle = {
  padding: "1px",
  height:"14.5vh",
  "font-size": "18px",
  display: "flex",
  "align-items": "center",
  "justify-content": "center",
  "text-align": "center",
  "color": "black",
  "flex-direction": "coloumn",
  border: "5px solid red",

}

const RefundComponent = props => {
  if (props.historyList[props.historyIndex][0] == 'refund' &&
    props.historyList[props.historyIndex][1] == props.id && props.level >= 5) {
      return (
      <Button
        color='grey'
        style={borderRefundStyle}
        className="refund-item"
        onClick={() => {
          props.handleRefundDialog();
          props.historyCheck(props.level, 'refund', props.id);
          //          props.handleChangeMenuDisplay(props.status);
        }}
      >
      REFUND
      </Button>
    );
  }

  else if (props.level >= 5) {
      return (
      <Button
        color='grey'
        style={refundStyle}
        className="refund-item"
      >
      REFUND
      </Button>
    );
  }

  else {
  return (
        <Button
          className="hide-item"
          style={refundStyle}>
        <div className="hide-item__image">
          <Image className="hide-item__image__image" src='/images/hidden.png' size='tiny' />
        </div>
    </Button>
    );    
  }
};

export default RefundComponent;
