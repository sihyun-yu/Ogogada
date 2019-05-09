import React from "react";
import { Image, Button } from 'semantic-ui-react'

const PaymentMethodButton = props => {
  return (
      <Button
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
