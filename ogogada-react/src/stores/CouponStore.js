import { Container } from "unstated";
import metaJSON from "../assets/meta.js";

class CouponStore extends Container {
  state = {
    coupons: metaJSON.coupons,
    selected: 0
  };

  selectCoupon = id => {
    console.log("selectCoupon:", id);
    this.setState({
      selected: id
    });
  };
}

export default CouponStore;
