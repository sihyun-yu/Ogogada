import React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from "./components/Home/HomeComponent.jsx"
import SignIn from "./components/SignIn/SignInComponent.jsx"
import MenuList from "./components/Pos/MenuList/MenuListComponent.jsx";
import NumberList from "./components/Pos/NumberList/NumberListComponent.jsx";
import Pos from "./components/Pos/PosComponent.jsx"
import SummaryTable from "./components/Pos/SummaryTable/SummaryTableComponent.jsx";
import Payment from "./components/Pos/Payment/PaymentComponent.jsx";
import { Provider } from "unstated";
import * as stores from "./stores";

import "./stylesheets/App.css";
import 'semantic-ui-css/semantic.min.css';

class App extends React.Component {
  render() {
    return (
      <Provider inject={[...stores]}>
        <div className="app">
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/history" component={Home} />
            <Route exact path="/pos" component={Pos} />
            <Route exact path="/ranking" component={Home} />
          </Switch>
        </div>
        {/*<div className="app">
          <div className="left-content">
            <MenuList />
            <NumberList/>
            <Payment /> 
          </div>
          <div className="right-content">
            <SummaryTable />
          </div>
    </div>*/}
    </Provider>
    );
  }
}

export default App;
