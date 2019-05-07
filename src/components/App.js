import React from "react";

import Home from "./Home/HomeComponent.jsx"
import MenuList from "./Pos/MenuList/MenuListComponent.jsx";
import NumberList from "./Pos/NumberList/NumberListComponent.jsx";

import SummaryTable from "./Pos/SummaryTable/SummaryTableComponent.jsx";
import Payment from "./Pos/Payment/PaymentComponent.jsx";
import { Provider } from "unstated";
import * as stores from "../stores";

import "../stylesheets/App.css";
import 'semantic-ui-css/semantic.min.css';

class App extends React.Component {
  render() {
    return (
      <Provider inject={[...stores]}>
        <div className="app">
          <Home/>
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
