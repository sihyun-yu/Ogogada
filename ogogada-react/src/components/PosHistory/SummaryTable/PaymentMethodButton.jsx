import React from "react";
import { Image, Button } from 'semantic-ui-react'

var paymentButtonStyle = {
  margin: "4px 4px 4px 4px",
  width: "calc(100% - 8px)",
  height: "calc(100% - 8px)"
}

var borderPaymentButtonStyle = {
  margin: "4px 4px 4px 4px",
  width: "calc(100% - 8px)",
  height: "calc(100% - 8px)",
  border: "5px solid red"

}

const PaymentMethodButton = props => {
  if (props.historyList[props.historyIndex][0] == 'method' &&
    props.historyList[props.historyIndex][1] == parseInt(props.id)) {
      return (
          <Button
            style={borderPaymentButtonStyle}
            className="payment-select-item"
            onClick={() => {
              props.handlePayment(props.id);
              props.historyCheck(props.level, 'method', parseInt(props.id));
            }}
          >
      <div className="payment-label__name">{props.label} </div>          </Button>
    );
  }

  else {
      return (
          <Button
            style={paymentButtonStyle}
            className="payment-select-item"
          >
      <div className="payment-label__name">{props.label} </div>          </Button>
    );
  }
}

export default PaymentMethodButton;
