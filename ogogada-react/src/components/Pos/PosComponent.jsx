import React from "react";
import { Subscribe } from "unstated";
import { HomeStore, MenuStore ,CouponStore, PaymentMethodStore} from "../../stores";
import "../../stylesheets/Pos.css";
import MenuList from "./MenuList/MenuListComponent.jsx";
import NumberList from "./NumberList/NumberListComponent.jsx";
import Description from "./Description/DescriptionComponent.jsx";
import SummaryTable from "./SummaryTable/SummaryTableComponent.jsx";
import Payment from "./Payment/PaymentComponent.jsx";

import SummaryCoupon from "./SummaryTable/SummaryCouponComponent.jsx";
import SummaryPaymentMethod from "./SummaryTable/SummaryPaymentMethodComponent.jsx";

window.onhashchange = function() { 
  // console.log("window chnage!@");
}


class PosComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.location.state;
    this.routeChange = this.routeChange.bind(this);
  }

  routeChange = () => {
    this.props.history.push({
      pathname : '../../../home/',
      state: {
        id: this.state.id,
        pw: this.state.pw,
        level: this.state.level,
      }
    });
  }

  handleCloseDialog = () => {
    this.setState({
      dialogOpen: false
    });
  };

  handleCompletePayment = cbArray => {
    cbArray.forEach(cb => {
      cb();
    });
  };

  render () {
    // console.log("PosComponent state: ", this.props.location.state)
    // console.log("PosComponent level: ", this.props.location.state.level)
    // console.log("PosComponent history: ", this.props.history)
    return (
      <div>
        <Subscribe to ={[MenuStore, CouponStore, PaymentMethodStore]}>
          {(menu, couponStore, paymentMethodStore) => (
            <div className="pos">
              <div className="left-content">
                <MenuList 
                {...this.props}
                flagFlip={menu.flagFlip.bind(menu)} 
                flag={menu.state.timerFlag}
                level={this.props.match.params.level}
                username={this.props.match.params.id}/>
                <div className="left-below__container">
                  <div className="left-below-left__contatiner">
                    <NumberList/>
                  </div>
                  <div className="left-below-right__container">
                    <SummaryCoupon level={this.props.match.params.level} />
                    <SummaryPaymentMethod />
                    <Payment {...this.props} 
                    flagFlip={menu.flagFlip.bind(menu)} 
                    flag={menu.state.timerFlag}
                    userName={this.props.match.params.id}
                    level={this.props.location.state.level}
                    openQuestion={menu.openQuestion.bind(menu)}
                    // history={this.props.history}
                    />  
                  </div>
                  
                </div>
              </div>
              <div className="right-content">
                <Description
                level={this.props.match.params.level}
                username={this.props.match.params.id}
                flag={menu.state.timerFlag}
                routeChange={this.routeChange}
                openQuestion={menu.openQuestion.bind(menu)}
                handleCompletePayment={() => {
                  const resetValuesCallbackArray = [];
                  resetValuesCallbackArray.push(
                    menu.resetSelectedMenu.bind(menu)
                  );
                  resetValuesCallbackArray.push(
                    paymentMethodStore.selectPaymentMethod.bind(
                      paymentMethodStore,
                      "-1"
                    )
                  );
                  resetValuesCallbackArray.push(
                    couponStore.selectCoupon.bind(couponStore, 0)
                  );

                  this.handleCompletePayment(resetValuesCallbackArray);

                  this.handleCloseDialog();
                }}/>
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