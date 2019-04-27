import React from "react";

import MenuList from "./MenuList/MenuListComponent.jsx";
import SummaryTable from "./SummaryTable/SummaryTableComponent.jsx";
import Payment from "./Payment/PaymentComponent.jsx";
import { Provider } from "unstated";
import * as stores from "../stores";

import "../stylesheets/App.css";

class App extends React.Component {
  render() {
    return (
      <Provider inject={[...stores]}>
        <div className="app">
          <div className="content">
            <MenuList />
            <SummaryTable />
            <Payment />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
