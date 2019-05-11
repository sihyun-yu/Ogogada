import React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from "./components/Home/HomeComponent.jsx"
import SignIn from "./components/SignIn/SignInComponent.jsx"
import MenuList from "./components/Pos/MenuList/MenuListComponent.jsx";
import NumberList from "./components/Pos/NumberList/NumberListComponent.jsx";
import History from "./components/Home/History/HistoryComponent.jsx";
import Ranking from "./components/Home/Ranking/RankingComponent.jsx";
import Pos from "./components/Pos/PosComponent.jsx"
import SummaryTable from "./components/Pos/SummaryTable/SummaryTableComponent.jsx";
import Payment from "./components/Pos/Payment/PaymentComponent.jsx";
import { Provider } from "unstated";
import * as stores from "./stores";
import firebase from "firebase";

import "./stylesheets/App.css";
import 'semantic-ui-css/semantic.min.css';

/*Firebase 이용 DB 여기서 받아오기*/
var firebaseConfig = {
  apiKey: "AIzaSyDXOPz3fKpgr5p4b99tNj4QnKVzqeXsxyU",
  authDomain: "ogogada-dp6.firebaseapp.com",
  databaseURL: "https://ogogada-dp6.firebaseio.com",
  projectId: "ogogada-dp6",
  storageBucket: "ogogada-dp6.appspot.com",
  messagingSenderId: "327472332391",
  appId: "1:327472332391:web:9f65dd33579f2761"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

var id = "sihyun";
var level = 1;

class App extends React.Component {
  render() {
    return (
      <Provider inject={[...stores]}>
        <div className="app">
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/history" component={History} />
            <Route exact path="/pos/:id/:level" component={Pos}/>
            <Route exact path="/ranking" component={Ranking} />
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
