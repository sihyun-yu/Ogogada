import React from "react";
import { Subscribe } from "unstated";
import { MenuStore, CouponStore, PaymentMethodStore } from "../../../stores";

const SummaryTotalComponent = props => {
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
        (props.applyCoupon ? 1 - selectedCoupon : 1) *
        (props.applyCashDiscount && selectedPaymentMethod === 1 ? 0.95 : 1)
    );
  };

  return (
    <Subscribe to={[MenuStore, CouponStore, PaymentMethodStore]}>
      {(menuStore, couponStore, paymentMethodStore) => (
        <div className="summary-total">
          <div className="summary-total__label">{props.label}</div>
          <div className="summary-total__value">
            {calculatedValue(
              menuStore.state.totalmenu,
              menuStore.state.selected,
              couponStore.state.coupons[couponStore.state.selected],
              parseInt(paymentMethodStore.state.selected, 10)
            )}{" "}
            원
          </div>
        </div>
      )}
    </Subscribe>
  );
};

export default SummaryTotalComponent;
