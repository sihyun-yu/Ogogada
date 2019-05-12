import React from "react";
import { Subscribe } from "unstated";
import { MenuStore, CouponStore, PaymentMethodStore, HistoryStore } from "../../../stores";

const SummaryTotalComponent = props => {
  const calculatedValue = (
    menus,
    selectedMenus,
    selectedCoupon,
  ) => {
    const selectedMenuTotal = Object.keys(selectedMenus)
      .sort((a, b) => parseInt(a, 10) > parseInt(b, 10))
      .reduce((sum, id) => sum + menus[id][1] * selectedMenus[id] * (1 - selectedCoupon), 0);
    return Math.floor(
      selectedMenuTotal *
        (props.applyCoupon ? 1 - selectedCoupon : 1)
    );
  };

  return (
    <Subscribe to={[MenuStore, CouponStore, PaymentMethodStore]}>
      {(menuStore, couponStore, paymentMethodStore, history) => (
        <div className="summary-total">
          <div className="summary-total__label">{props.label}</div>
          <div className="summary-total__percent">
            {couponStore.state.coupons[couponStore.state.selected]*100+"%"}
          </div>
          <div className="summary-total__total">
            {calculatedValue(
              menuStore.state.totalmenu,
              menuStore.state.selected,
              0,
              parseInt(paymentMethodStore.state.selected, 10)
            )}{" ₩"}
          </div>
          <div className="summary-total__actual">
            {calculatedValue(
                menuStore.state.totalmenu,
                menuStore.state.selected,
                couponStore.state.coupons[couponStore.state.selected],
                parseInt(paymentMethodStore.state.selected, 10)
              )}{" ₩"}
          </div>
        </div>
      )}
    </Subscribe>
  );
};

export default SummaryTotalComponent;
