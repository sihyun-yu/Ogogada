import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Button } from 'semantic-ui-react'

const PaymentDialogComponent = props => {
  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <DialogTitle>Payment Check</DialogTitle>
      <div className="payment-dialog__details">
        {/* {props.selectedMenus.map((menu, index) => (
          <div className="payment-dialog__detail-container" key={index}>
            <div className="payment-dialog__detail">{menu[0]}</div>
            <div className="payment-dialog__detail">{menu[2]}</div>
            <div className="payment-dialog__detail">{menu[1] * menu[2] + " ₩"}</div>
          </div>
        ))} */}
      </div>
      <div className="payment-dialog__total">
        Total {props.price}₩ {props.pendingCardPayment ? "in CARD" : "in CASH"}
      </div>
      {/* {props.pendingCardPayment && (
        <div className="payment-dialog__pending">
          <div className="lds-ring">
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      )} */}
      <div className="payment-dialog__buttons">
        <Button
          className="payment-dialog__button"
          style={{ marginLeft: "50px", marginRight: "10px" }}
          variant="contained"
          color="primary"
          size="massive"
          // disabled={props.pendingCardPayment}
          onClick={()=> {props.handleCompletePayment();
            props.forRouter.push(props.goBackHistory)
            props.resetIndex();}}
        >
          Submit
        </Button>
        <Button
          className="payment-dialog__button"
          style={{ marginLeft: "10px", marginRight: "50px" }}
          variant="contained"
          color="secondary"
          size="massive"
          onClick={props.handleCancelPayment}
        >
          Cancel
        </Button>
      </div>
    </Dialog>
  );
};

export default PaymentDialogComponent;
