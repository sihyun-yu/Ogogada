import React from "react";
import { Subscribe } from "unstated";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import SummrayTotal from "./SummaryTotalComponent.jsx";
import { PaymentMethodStore, HistoryStore } from "../../../stores";
import {Button} from 'semantic-ui-react'
import PaymentMethodButton from "./PaymentMethodButton.jsx"
const SummaryPaymentMethodComponent = props => {
  return (
    <Subscribe to={[PaymentMethodStore, HistoryStore]}>
      {(paymentMethodStore, history) => (
        <div className="summary-payment-method">
          <div className="summary-payment-method__radio-group-row">
            <div className="summary-payment-method__radio-group">
            <div className="summary-payment-method__card">
            <PaymentMethodButton
            label="CARD"
            id="0"

            level={props.level}
            handlePayment={paymentMethodStore.selectPaymentMethod.bind(paymentMethodStore)}
            historyCheck={history.increaseIndex.bind(history)}
            historyList={history.state.historyList[props.level]}
            historyIndex={history.state.historyIndex}

            />         

            </div>
            <div className="summary-payment-method__cash">
            <PaymentMethodButton
            label="CASH"
            id="1"
            level={props.level}
            handlePayment={paymentMethodStore.selectPaymentMethod.bind(paymentMethodStore)}
            historyCheck={history.increaseIndex.bind(history)}
            historyList={history.state.historyList[props.level]}
            historyIndex={history.state.historyIndex}
            />         
            </div>
            </div>
          </div>
          {/* <SummrayTotal label="총 합계" applyCoupon applyCashDiscount /> */}
        </div>
      )}
    </Subscribe>
  );
};

export default SummaryPaymentMethodComponent;
