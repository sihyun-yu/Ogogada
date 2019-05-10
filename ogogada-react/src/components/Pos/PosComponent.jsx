import React from "react";
import { Subscribe } from "unstated";
import { HomeStore } from "../../stores";
import "../../stylesheets/Pos.css";
import MenuList from "./MenuList/MenuListComponent.jsx";
import NumberList from "./NumberList/NumberListComponent.jsx";
import Description from "./Description/DescriptionComponent.jsx";
import SummaryTable from "./SummaryTable/SummaryTableComponent.jsx";
import Payment from "./Payment/PaymentComponent.jsx";



const PosComponent = props => {
  console.log(props);
    return (
        <div className="pos">
          <div className="left-content">
            <MenuList 
            level={props.match.params.level}
            username={props.match.params.id}/>
            <div className="left-below__container">
              <NumberList/>
              <Payment /> 
            </div>
          </div>
          <div className="right-content">
            <Description />
            <SummaryTable />
          </div>
        </div>
    );
};

export default PosComponent;