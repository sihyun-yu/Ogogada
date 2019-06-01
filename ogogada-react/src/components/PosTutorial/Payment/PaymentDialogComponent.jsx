import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Button } from 'semantic-ui-react'

class PaymentDialogComponent extends React.Component {
  constructor(props) {
    super(props);
    this.routeChangeToHome = this.routeChangeToHome.bind(this);
    this.routeChangeToNextStage = this.routeChangeToNextStage.bind(this);
  }

  // change url to ranking
  routeChangeToHome = () => {
    this.props.history.push({
      pathname : '../../../home',
      state: {
        id: this.props.history.location.state.id,
        pw: this.props.history.location.state.pw,
        level: this.props.history.location.state.level,
      }
    })
  }
  routeChangeToNextStage = (level) => {
    // console.log ("routeChange in PaymentDialog: "+this.props.history)
     console.log ("routeChange userName "+this.props.userName)
    this.props.history.push({
      pathname : '../../../stage/' + level + "/" + this.props.userName,
      state: {
        id : this.props.userName,
        level: this.props.history.location.state.level,
        pw: this.props.history.location.state.pw,
      }
    });
  }

  render() {
    {
    if (this.props.tutorialFinished == false){
      return (
      <Dialog open={this.props.open}>
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
          Total {this.props.price}₩ {this.props.pendingCardPayment ? "in CARD" : "in CASH"}
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
            onClick={()=> {
              // this.props.handleCompletePayment();
              // this.props.forRouter.push(this.props.goBackHistory)
              this.props.resetIndex();
              // this.props.openQuestion();
              this.props.handleFinishTutorial();
            }}
          >
            Submit
          </Button>
          <Button
            className="payment-dialog__button"
            style={{ marginLeft: "10px", marginRight: "50px" }}
            variant="contained"
            color="secondary"
            size="massive"
            onClick={()=> {this.props.handleCancelPayment();}}
          >
            Cancel
          </Button>
        </div>
      </Dialog>
    );
  }
  else {
    return (
      <Dialog open={this.props.tutorialFinished} onClose={this.props.handleClose}>
        <DialogTitle>Tutorial finished!</DialogTitle>
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
          You've done tutorial {this.props.curLevel}
        </div>
        <div className="payment-dialog__total">
          Go to ...
        </div>
        <div className="payment-dialog__buttons">
          <Button
            className="payment-dialog__button"
            style={{ marginLeft: "50px", marginRight: "10px" }}
            // variant="contained"
            // color="primary"
            size="massive"
            // disabled={props.pendingCardPayment}
            onClick={()=>{
              this.props.handleCompletePayment();
              this.routeChangeToHome(this.props.curLevel);
              this.props.resetIndex();
              this.props.openQuestion();
            }}
          >
            Home
          </Button>
          <Button
            className="payment-dialog__button"
            style={{ marginLeft: "10px", marginRight: "50px" }}
            // variant="contained"
            // color="secondary"
            size="massive"
            onClick={()=>{
              this.props.handleCompletePayment();
              this.routeChangeToNextStage(this.props.curLevel);
              this.props.resetIndex();
              this.props.openQuestion();
            }}
          >
            Stage {this.props.curLevel}
          </Button>
        </div>
      </Dialog>
    );
  }
  }
  }
};


export default PaymentDialogComponent;
