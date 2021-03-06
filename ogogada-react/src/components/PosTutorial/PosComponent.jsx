import React from "react";
import { Subscribe } from "unstated";
import { HomeStore } from "../../stores";
import "../../stylesheets/Pos.css";
import MenuList from "./MenuList/MenuListComponent.jsx";
import NumberList from "./NumberList/NumberListComponent.jsx";
import DescriptionTutorial from "./Description/DescriptionTutorialComponent.jsx";
import SummaryTable from "./SummaryTable/SummaryTableComponent.jsx";
import Payment from "./Payment/PaymentComponent.jsx";

import SummaryCoupon from "./SummaryTable/SummaryCouponComponent.jsx";
import SummaryPaymentMethod from "./SummaryTable/SummaryPaymentMethodComponent.jsx";

import { MenuStore, CouponStore, PaymentMethodStore, HistoryStore } from "../../stores";


class PosTutorialComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.location.state;
    this.routeChange = this.routeChange.bind(this);
  }

  routeChange = () => {
    this.props.history.push({
      pathname : '../../../home/',
      state: {
        id: this.props.history.location.state.id,
        pw: this.props.history.location.state.pw,
        level: this.props.history.location.state.level,
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
    return (
      <Subscribe to={[MenuStore, CouponStore, PaymentMethodStore, HistoryStore]}>
        {(menuStore, couponStore, paymentMethodStore, history) => (
          <div className="pos">
            <div className="left-content">
              <MenuList 
              {...this.props}
              level={this.props.match.params.level}
              username={this.props.match.params.id}
              routeChange={this.routeChange}
              handleCompletePayment={this.handleCompletePayment}
              handleCloseDialog={this.handleCloseDialog}/>
              <div className="left-below__container">
                <div className="left-below-left__contatiner">
                  <NumberList
                    level={this.props.match.params.level}
                    username={this.props.match.params.id}
                    gifticonOpen = {menuStore.state.gifticonOpen}/>
                </div>
                <div className="left-below-right__container">
                  <SummaryCoupon 
                    level={this.props.match.params.level}
                    username={this.props.match.params.id}/>

                  <SummaryPaymentMethod 
                    level={this.props.match.params.level}
                    username={this.props.match.params.id}/>

                  <Payment {...this.props}
                    level={this.props.match.params.level}
                    username={this.props.match.params.id}
                    openQuestion={menuStore.openQuestion.bind(menuStore)}/>

                </div>
                
              </div>
            </div>
            <div className="right-content">
              <DescriptionTutorial
              level={this.props.match.params.level}
              username={this.props.match.params.id}
              openPopup = {menuStore.openPopup.bind(menuStore)}
              openQuestion={menuStore.openQuestion.bind(menuStore)}/>
              <SummaryTable 
              level={this.props.match.params.level}/>
            </div>
          </div>
        )}
      </Subscribe>
    );
    
  }
}
/*
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
            username={props.match.params.id}
            routeChange={() => {
              props.history.push({
                pathname : '../../../home/',
                state: {
                  id: this.state.id,
                  pw: this.state.pw,
                  level: this.state.level,
                }
              });
            }}/>
            <SummaryTable 
            level={props.match.params.level}/>
          </div>
        </div>
    );
};
*/

export default PosTutorialComponent;