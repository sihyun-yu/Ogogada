import React from "react";
import { Image, Button } from 'semantic-ui-react'

var paymentButtonStyle = {
  margin: "4px 4px 4px 4px",
  width: "calc(100% - 8px)",
  height: "calc(100% - 8px)"
}

const PaymentMethodButton = props => {
  return (
      <Button
        style={paymentButtonStyle}
        className="payment-select-item"
        onClick={() => {
          props.handlePayment(props.id);
        }}
      >
      <div className="payment-label__name">{props.label} </div>
      </Button>
  );
};

export default PaymentMethodButton;
