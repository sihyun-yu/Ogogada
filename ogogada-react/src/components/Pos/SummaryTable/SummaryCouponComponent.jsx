import React from "react";
import { Subscribe } from "unstated";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import SummrayTotal from "./SummaryTotalComponent.jsx";
import { CouponStore } from "../../../stores";

const SummaryCouponComponent = props => {
  return (
    <Subscribe to={[CouponStore]}>
      {couponStore => (
        <div className="summary-coupon">
          <div className="summary-coupon__select-row">
            <div className="summary-coupon__label">적용할 쿠폰</div>
            <div className="summary-coupon__selector">
              <Select
                value={couponStore.state.selected}
                onChange={e => {
                  couponStore.selectCoupon(e.target.value);
                }}
                displayEmpty
              >
                {couponStore.state.coupons.map((coupon, index) => (
                  <MenuItem key={index} value={index}>
                    {coupon * 100} %
                  </MenuItem>
                ))}
              </Select>
            </div>
          </div>
          <SummrayTotal label="쿠폰적용 합계" applyCoupon />
        </div>
      )}
    </Subscribe>
  );
};

export default SummaryCouponComponent;
