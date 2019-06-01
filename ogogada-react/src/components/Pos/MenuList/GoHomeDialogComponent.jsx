import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Button } from 'semantic-ui-react'
import "../../../stylesheets/GoHomeDialogComponent.css";

const GoHomeDialogComponent = props => {
  return (
    <Dialog open={props.goHomeOpen} onClose={props.closePopup}>
      <DialogTitle>Go to home</DialogTitle>
      <div className="payment-dialog__total">
        Are you sure?
      </div>
      <div className="payment-dialog__buttons">
        <Button
          className="payment-dialog__button"
          style={{ marginLeft: "50px", marginRight: "10px" }}
          variant="contained"
          color="primary"
          size="massive"
          // disabled={props.pendingCardPayment}
          onClick={()=> {
            props.routeChange();
            props.openQuestion();
            props.handleCompletePayment();
            props.closeRefund();
            props.closeGifticon();
            props.closePopup();
          }}
        >
          Yes
        </Button>
        <Button
          className="payment-dialog__button"
          style={{ marginLeft: "10px", marginRight: "50px" }}
          variant="contained"
          color="secondary"
          size="massive"
          onClick={()=> {
            props.closePopup();
          }}
        >
          No
        </Button>
      </div>
    </Dialog>
  );
};

export default GoHomeDialogComponent;
