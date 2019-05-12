import React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from "./components/Home/HomeComponent.jsx"
import SignIn from "./components/SignIn/SignInComponent.jsx"
import MenuList from "./components/Pos/MenuList/MenuListComponent.jsx";
import NumberList from "./components/Pos/NumberList/NumberListComponent.jsx";
import History from "./components/Home/History/HistoryComponent.jsx";
import Ranking from "./components/Home/Ranking/RankingComponent.jsx";
import RankingEach from "./components/Home/Ranking/RankingLevels/RankingLevelComponent.jsx"
import Pos from "./components/Pos/PosComponent.jsx"
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

function checkNewRecord (user_level, user_id, user_time) {
  return firebase.database().ref('/records/'+user_level.toString()).once('value', function(snapshot){
    var records = snapshot.val()
    var user_rank = 9;
    for (var idx in records){
      if (records[idx]["record"] > user_time && user_rank > records[idx]["rank"]){
        user_rank = records[idx]["rank"];
        firebase.database().ref('/records/' + user_level.toString()+'/'+idx.toString()).
          update({"id": user_id, "record": user_time})
      }
    }
  })

}

function login (user_id, user_pw) {
  return new Promise(function(resolve, reject){
    firebase.database().ref('/accounts/').once('value', function(snapshot){
      var accounts = snapshot.val()
      for (var idx in accounts){
        if (user_id == idx && user_pw == accounts[idx]["pw"]){
          console.log("login!");
          return  resolve(true);
        }
        else if (user_id == idx && user_pw != accounts[idx]["pw"]){
          console.log("have accounts but wrong pw!");
          return resolve(false);
        }
      }
      
      return resolve(false);
    })
  })
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
            <Route exact path="/pos/:id/:level" component={Pos}/>
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

export {login};
export default App;
