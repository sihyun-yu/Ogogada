import React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from "./components/Home/HomeComponent_new.jsx"
import SignIn from "./components/SignIn/SignInComponent.jsx"
import MenuList from "./components/Pos/MenuList/MenuListComponent.jsx";
import NumberList from "./components/Pos/NumberList/NumberListComponent.jsx";
import History from "./components/Home/History/HistoryComponent.jsx";
import Ranking from "./components/Home/Ranking/RankingComponent.jsx";
import RankingEach from "./components/Home/Ranking/RankingLevels/RankingLevelComponent.jsx"
import Pos from "./components/Pos/PosComponent.jsx"
import PosTutorial from "./components/PosTutorial/PosComponent.jsx"
import SummaryTable from "./components/Pos/SummaryTable/SummaryTableComponent.jsx";
import Payment from "./components/Pos/Payment/PaymentComponent.jsx";
import { Provider } from "unstated";
import * as stores from "./stores";
import Timer from "./components/Pos/Description/Timer.jsx"
import firebase from "firebase";
import firebaseConfig from "./assets/secret.js";

import "./stylesheets/App.css";
import 'semantic-ui-css/semantic.min.css';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

function writeToDatabase(input_id, input_pw, input_level) {
  //console.log("writeToDatabase",stack);

    firebase.database().ref('/accounts/'+input_id).set({
      "id": input_id,
      "pw": input_pw,
      "level": input_level,
    });
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


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
            <Route exact path="/tutorial/:level/:id" component={PosTutorial} />
            <Route exact path="/stage/:level/:id" component={Pos}/>
            <Route exact path="/timer" component={Timer} />
            <Route exact path="/ranking" component={Ranking} />
            <Route exact path="/ranking/:id" component={RankingEach} />
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
