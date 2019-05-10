import React from "react";
import { Image, Button } from 'semantic-ui-react'

var refundStyle = {
  background: '#C8C8C8',
  padding: "1px",
  height:"14.5vh"
};

const RefundComponent = props => {
  return (
      <Button
        style={refundStyle}
        className="refund-item"
        onClick={() => {
//          props.handleChangeMenuDisplay(props.status);
        }}
      >
      REFUND
      </Button>
  );
};

export default RefundComponent;
