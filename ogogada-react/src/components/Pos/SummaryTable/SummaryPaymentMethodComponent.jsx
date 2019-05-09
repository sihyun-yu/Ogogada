import React from "react";
import { Subscribe } from "unstated";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import SummrayTotal from "./SummaryTotalComponent.jsx";
import { PaymentMethodStore } from "../../../stores";
import {Button} from 'semantic-ui-react'
import PaymentMethodButton from "./PaymentMethodButton.jsx"
const SummaryPaymentMethodComponent = props => {
  return (
    <Subscribe to={[PaymentMethodStore]}>
      {paymentMethodStore => (
        <div className="summary-payment-method">
          <div className="summary-payment-method__radio-group-row">
            <div className="summary-payment-method__radio-group">
            <PaymentMethodButton
            label="Card"
            id="0"
            handlePayment={paymentMethodStore.selectPaymentMethod.bind(paymentMethodStore)}/>         
            <PaymentMethodButton
            label="Cash"
            id="1"
            handlePayment={paymentMethodStore.selectPaymentMethod.bind(paymentMethodStore)}/>         
            </div>
          </div>
          <SummrayTotal label="총 합계" applyCoupon applyCashDiscount />
        </div>
      )}
    </Subscribe>
  );
};

export default SummaryPaymentMethodComponent;
