import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

const PaymentDialogComponent = props => {
  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <DialogTitle>결제 확인</DialogTitle>
      <div className="payment-dialog__details">
        {props.selectedMenus.map((menu, index) => (
          <div className="payment-dialog__detail-container" key={index}>
            <div className="payment-dialog__detail">{menu[0]}</div>
            <div className="payment-dialog__detail">{menu[2]}</div>
            <div className="payment-dialog__detail">{menu[1] * menu[2]}원</div>
          </div>
        ))}
      </div>
      <div className="payment-dialog__total">
        총 {props.price}원을 계산 {props.pendingCardPayment ? "중 입니다." : ""}
      </div>
      {props.pendingCardPayment && (
        <div className="payment-dialog__pending">
          <div className="lds-ring">
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      )}
      <div className="payment-dialog__buttons">
        <Button
          className="payment-dialog__button"
          style={{ marginRight: "12px" }}
          variant="contained"
          color="primary"
          size="large"
          disabled={props.pendingCardPayment}
          onClick={props.handleCompletePayment}
        >
          완료
        </Button>
        <Button
          className="payment-dialog__button"
          variant="contained"
          color="secondary"
          size="large"
          onClick={props.handleCancelPayment}
        >
          취소
        </Button>
      </div>
    </Dialog>
  );
};

export default PaymentDialogComponent;
