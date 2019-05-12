import React from "react";
import { Image, Button } from 'semantic-ui-react'

var refundStyle = {
  background: '#C8C8C8',
  padding: "1px",
  height:"14.5vh"
};

var borderRefundStyle = {
  background: '#C8C8C8',
  padding: "1px",
  height:"14.5vh",
  border: "5px solid red",

}

const RefundComponent = props => {
  if (props.historyList[props.historyIndex][0] == 'refund' &&
    props.historyList[props.historyIndex][1] == props.id) {
      return (
      <Button
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

  else {
      return (
      <Button
        style={refundStyle}
        className="refund-item"
      >
      REFUND
      </Button>
    );
  }
};

export default RefundComponent;
