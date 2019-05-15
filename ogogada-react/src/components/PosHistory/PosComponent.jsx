import React from "react";
import { Subscribe } from "unstated";
import { HomeStore } from "../../stores";
import "../../stylesheets/Pos.css";
import MenuList from "./MenuList/MenuListComponent.jsx";
import NumberList from "./NumberList/NumberListComponent.jsx";
import Description from "./Description/DescriptionComponent.jsx";
import SummaryTable from "./SummaryTable/SummaryTableComponent.jsx";
import Payment from "./Payment/PaymentComponent.jsx";

import SummaryCoupon from "./SummaryTable/SummaryCouponComponent.jsx";
import SummaryPaymentMethod from "./SummaryTable/SummaryPaymentMethodComponent.jsx";



const PosComponent = props => {
  console.log("PosComponent:", props);
    return (
        <div className="pos">
          <div className="left-content">
            <MenuList 
            {...props}
            level={props.match.params.level}
            username={props.match.params.id}/>
            <div className="left-below__container">
              <div className="left-below-left__contatiner">
                <NumberList
                  level={props.match.params.level}
                  username={props.match.params.id}/>
              </div>
              <div className="left-below-right__container">
                <SummaryCoupon 
                  level={props.match.params.level}
                  username={props.match.params.id}/>

                <SummaryPaymentMethod 
                  level={props.match.params.level}
                  username={props.match.params.id}/>

                <Payment {...props}
                  level={props.match.params.level}
                  username={props.match.params.id}/>
  
              </div>
               
            </div>
          </div>
          <div className="right-content">
            <Description
            level={props.match.params.level}
            username={props.match.params.id}/>
            <SummaryTable 
            level={props.match.params.level}/>
          </div>
        </div>
    );
};

export default PosComponent;