import React from "react";
import { Subscribe } from "unstated";
import { HomeStore, MenuStore } from "../../stores";
import "../../stylesheets/Pos.css";
import MenuList from "./MenuList/MenuListComponent.jsx";
import NumberList from "./NumberList/NumberListComponent.jsx";
import Description from "./Description/DescriptionComponent.jsx";
import SummaryTable from "./SummaryTable/SummaryTableComponent.jsx";
import Payment from "./Payment/PaymentComponent.jsx";

import SummaryCoupon from "./SummaryTable/SummaryCouponComponent.jsx";
import SummaryPaymentMethod from "./SummaryTable/SummaryPaymentMethodComponent.jsx";


class PosComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <Subscribe to ={[MenuStore]}>
          {(menu) => (
            <div className="pos">
              <div className="left-content">
                <MenuList 
                level={this.props.match.params.level}
                username={this.props.match.params.id}/>
                <div className="left-below__container">
                  <div className="left-below-left__contatiner">
                    <NumberList/>
                  </div>
                  <div className="left-below-right__container">
                    <SummaryCoupon />
                    <SummaryPaymentMethod />
                    <Payment {...this.props} 
                    flagFlip={menu.flagFlip.bind(menu)} 
                    flag={menu.state.timerFlag}
                    unlock = {menu.unlock.bind(menu)}
                    levelUp = {menu.state.levelUp}/>  
                  </div>
                  
                </div>
              </div>
              <div className="right-content">
                <Description
                level={this.props.match.params.level}
                username={this.props.match.params.id}
                flag={menu.state.timerFlag}/>
                <SummaryTable />
              </div>
            </div>
          )}
        </Subscribe>
      </div>
    );
  }
}
// const PosComponent = props => {
//   // MenuStore.clearSummaryTable()
//   console.log("PosComponent:", props);
//     return (
//         <div className="pos">
//           <div className="left-content">
//             <MenuList 
//             level={props.match.params.level}
//             username={props.match.params.id}/>
//             <div className="left-below__container">
//               <div className="left-below-left__contatiner">
//                 <NumberList/>
//               </div>
//               <div className="left-below-right__container">
//                 <SummaryCoupon />
//                 <SummaryPaymentMethod />
//                 <Payment {...props}/>  
//               </div>
               
//             </div>
//           </div>
//           <div className="right-content">
//             <Description
//             level={props.match.params.level}
//             username={props.match.params.id}/>
//             <SummaryTable />
//           </div>
//         </div>
//     );
// };

export default PosComponent;