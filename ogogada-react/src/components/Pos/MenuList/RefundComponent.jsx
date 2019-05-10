import React from "react";
import { Image, Button } from 'semantic-ui-react'

const RefundComponent = props => {
  return (
      <Button
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
