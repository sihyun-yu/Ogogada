import React from "react";
import { Subscribe } from "unstated";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import SummrayTotal from "./SummaryTotalComponent.jsx";
import { CouponStore, HistoryStore } from "../../../stores";
import { Image, Button, Icon } from 'semantic-ui-react'


var borderStyle = {
  border: "5px solid red"
};

var noStyle = {
  border: ""
};

const SummaryCouponComponent = props => {
  if (props.level >= 3) {
    return (
      <Subscribe to={[CouponStore, HistoryStore]}>
        {(couponStore, history) => (
          <div className="summary-coupon">
            <div className="summary-coupon__select-row">
              <div className="summary-coupon__label">
                <p className="summary-coupon__name">COUPON</p>
              </div>
              <div className="summary-coupon__selector">
                <Select
                  style={(history.state.historyList[props.level][history.state.historyIndex][0] == 'coupon') ? 
                      borderStyle:
                      noStyle}
                  value={couponStore.state.selected}
                  onChange={e => {
                    couponStore.selectCoupon(e.target.value);
                    console.log(e.target.value);
                    if (e.target.value == history.state.historyList[props.level][history.state.historyIndex][1]) {
                       history.increaseIndex(props.level, 'coupon', e.target.value);

                    }
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
            {/* <SummrayTotal label="쿠폰적용 합계" applyCoupon /> */}
          </div>
        )}
      </Subscribe>
    );
  }

  else {
  return (
      <Subscribe to={[CouponStore]}>
        {couponStore => (
          <div className="summary-coupon">
            <div className="summary-coupon__select-row">
              <Image className="hide-item__image__image" src='/images/hidden.png' size='tiny' />
 
            </div>
          </div>
        )}
      </Subscribe>
    );    
  }
};

export default SummaryCouponComponent;
