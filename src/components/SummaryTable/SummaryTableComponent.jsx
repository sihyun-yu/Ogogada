import React from "react";
import "../../stylesheets/SummaryTable.css";

import SummaryMenuList from "./SummaryMenuListComponent.jsx";
import SummaryCoupon from "./SummaryCouponComponent.jsx";
import SummaryPaymentMethod from "./SummaryPaymentMethodComponent.jsx";

const SummaryTableComponent = props => {
  return (
    <div className="summary-table__container">
    <div className="summary-table">
      <SummaryMenuList />
      <SummaryCoupon />
      <SummaryPaymentMethod />
    </div>
    </div>
  );
};

export default SummaryTableComponent;
