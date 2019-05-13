import React from "react";
import "../../../stylesheets/Payment.css";
import { Subscribe } from "unstated";
import { Button } from 'semantic-ui-react'
import { MenuStore, CouponStore, PaymentMethodStore } from "../../../stores";
import PaymentDialog from "./PaymentDialogComponent.jsx";
import { mockCardPayment } from "../../../api/paymentAPI.js";
import metaJSON from "../../../assets/meta.js";
import _ from 'lodash';

var paymentButtonStyle = {
  width: "100%",
  height: "100%",
  padding: "0px",
  // color: "black"
}

class PaymentComponent extends React.Component {
  constructor(props) {
    console.log("paymentComponent", props)
    super(props);
    this.state = {
      pendingCardPayment: false,
      dialogOpen: false,
      levelUp: false,
    };
  }


  handleOpenDialog = () => {
    this.setState({
      dialogOpen: true
    });
  };

  handleCloseDialog = () => {
    this.setState({
      dialogOpen: false
    });
  };

  handleCardPayment = () => {
    this.setState({
      pendingCardPayment: true
    });

    this.handleOpenDialog();

    mockCardPayment(() => {
      this.setState({
        pendingCardPayment: false
      });
    });
  };

  handleCompletePayment = cbArray => {
    cbArray.forEach(cb => {
      cb();
    });
  };

  handleLevelUp = () => {
    console.log("hey levelup");
    this.setState({
      levelUp: true,
    })
  }


  render() {
    const calculatedValue = (
      menus,
      selectedMenus,
      selectedCoupon,
      selectedPaymentMethod
    ) => {
      const selectedMenuTotal = Object.keys(selectedMenus)
        .sort((a, b) => parseInt(a, 10) > parseInt(b, 10))
        .reduce((sum, id) => sum + menus[id][1] * selectedMenus[id], 0);
      return Math.floor(
        selectedMenuTotal *
          (1 - selectedCoupon) *
          (selectedPaymentMethod === 1 ? 0.95 : 1)
      );
    };

    const paymentText = (
      menus,
      selectedMenus,
      selectedCoupon,
      selectedPaymentMethod
    ) =>
      `${selectedCoupon !== 0 ? `쿠폰할인 ${selectedCoupon * 100}%` : ""}${
        selectedCoupon !== 0 && selectedPaymentMethod === 1 ? ", " : " "
      }${selectedPaymentMethod === 1 ? "현금할인 5% " : ""}${
        selectedCoupon !== 0 || selectedPaymentMethod === 1 ? "적용하여 " : ""
      }${calculatedValue(
        menus,
        selectedMenus,
        selectedCoupon,
        selectedPaymentMethod
      )}원입니다.`;

    const selectedMenus = (menus, selectedMenus) =>
      Object.keys(selectedMenus)
        .sort((a, b) => parseInt(a, 10) > parseInt(b, 10))
        .map(id => menus[id].concat(selectedMenus[id]));

    const isCorrect = (user_menu, user_coupon, user_pay, cur_level) => {
      console.log("user inputs:", user_menu, user_coupon, user_pay, cur_level);
      for (var i in metaJSON.answers){
        var each = metaJSON.answers[i];
        if (each.level == cur_level ){
          console.log("answer: ", each.coupon == null);
          if (_.isEqual(user_menu, each.menu) 
          && (_.isEqual(user_coupon, each.coupon) || each.coupon == null)
          && _.isEqual(user_pay, each.method)){
            console.log("truye");
            return true
          }
        }
      }
      return false
    }
    console.log(this.props);
    console.log(this.props, "paymentComponent");
    console.log("PaymentComponent", this.props.history.location.pathname.split('/')[3]);
    return (
      <Subscribe to={[MenuStore, CouponStore, PaymentMethodStore]}>
        {(menuStore, couponStore, paymentMethodStore) => (
          <div className="payment__container">
            <div className="payment">
              {/* <div className="payment__text">
                {paymentText(
                  menuStore.state.totalmenu,
                  menuStore.state.selected,
                  couponStore.state.coupons[couponStore.state.selected],
                  parseInt(paymentMethodStore.state.selected, 10)
                )}
              </div> */}

              <div className="payment__button-container">
                <Button
                  className="payment__button"
                  variant="contained"
                  color="primary"
                  // size="large"
                  style={paymentButtonStyle}
                  disabled={
                    !isCorrect(menuStore.state.selected, couponStore.state.selected, paymentMethodStore.state.selected, 
                      this.props.history.location.pathname.split('/')[3])
                  }
                  onClick={
                    paymentMethodStore.state.selected === "0"
                      ? 
                        this.handleCardPayment
                      : this.handleOpenDialog
                  }
                >
                  PAYMENT
                </Button>
              </div>
            </div>
            {isCorrect(menuStore.state.selected, couponStore.state.selected, paymentMethodStore.state.selected, 
                    this.props.history.location.pathname.split('/')[3]) &&
              <PaymentDialog
                flagFlip={this.props.flagFlip}
                flag={this.props.flag}
                open={this.state.dialogOpen}
                levelUp = {this.state.levelUp}
                selectedMenus={selectedMenus(
                  menuStore.state.totalmenu,
                  menuStore.state.selected
                )}
                price={calculatedValue(
                  menuStore.state.totalmenu,
                  menuStore.state.selected,
                  couponStore.state.coupons[couponStore.state.selected],
                  parseInt(paymentMethodStore.state.selected, 10)
                )}
                pendingCardPayment={this.state.pendingCardPayment}
                handleClose={this.handleCloseDialog}
                handleCompletePayment={() => {
                  const resetValuesCallbackArray = [];
                  resetValuesCallbackArray.push(
                    menuStore.resetSelectedMenu.bind(menuStore)
                  );
                  resetValuesCallbackArray.push(
                    paymentMethodStore.selectPaymentMethod.bind(
                      paymentMethodStore,
                      "0"
                    )
                  );
                  resetValuesCallbackArray.push(
                    couponStore.selectCoupon.bind(couponStore, 0)
                  );

                  this.handleCompletePayment(resetValuesCallbackArray);

                  this.handleCloseDialog();
                }}
                handleCancelPayment={this.handleCloseDialog}
                handleLevelUp = {this.handleLevelUp}
                curLevel = {this.props.history.location.pathname.split('/')[3]}
                goBackHistory = {this.props.history}
              />
            }
          </div>
        )}
      </Subscribe>
    );
  }
}

export default PaymentComponent;
