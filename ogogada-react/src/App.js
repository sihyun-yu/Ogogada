import React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from "./components/Home/HomeComponent.jsx"
import SignIn from "./components/SignIn/SignInComponent.jsx"
import MenuList from "./components/Pos/MenuList/MenuListComponent.jsx";
import NumberList from "./components/Pos/NumberList/NumberListComponent.jsx";
import History from "./components/Home/History/HistoryComponent.jsx";
import Ranking from "./components/Home/Ranking/RankingComponent.jsx";
import RankingEach1 from "./components/Home/Ranking/RankingLevels/RankingLevel1Component.jsx"
import RankingEach2 from "./components/Home/Ranking/RankingLevels/RankingLevel2Component.jsx"
import RankingEach3 from "./components/Home/Ranking/RankingLevels/RankingLevel3Component.jsx"
import RankingEach4 from "./components/Home/Ranking/RankingLevels/RankingLevel4Component.jsx"
import RankingEach5 from "./components/Home/Ranking/RankingLevels/RankingLevel5Component.jsx"
import Pos from "./components/Pos/PosComponent.jsx"
import SummaryTable from "./components/Pos/SummaryTable/SummaryTableComponent.jsx";
import Payment from "./components/Pos/Payment/PaymentComponent.jsx";
import { Provider } from "unstated";
import * as stores from "./stores";
import firebase from "firebase";

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

firebase.database().ref('/records/').set({
  "1": [{"id":"seongha", "record": "10:00:00", "rank":1},{"id":"seongha", "record": "20:00:00", "rank":2},
    {"id":"seongha", "record": "30:00:00", "rank":3},{"id":"seongha", "record": "40:00:00", "rank":4},
    {"id":"seongha", "record": "50:00:00", "rank":5}, {"id":"seongha", "record": "60:00:00", "rank":6},
    {"id":"seongha", "record": "70:00:00", "rank":7}, {"id":"seongha", "record": "80:00:00", "rank":8}],
  "2": [{"id":"seongha", "record": "00:00:00", "rank":1},{"id":"seongha", "record": "00:00:00", "rank":2},
  {"id":"seongha", "record": "00:00:00", "rank":3},{"id":"seongha", "record": "00:00:00", "rank":4},
  {"id":"seongha", "record": "00:00:00", "rank":5}, {"id":"seongha", "record": "00:00:00", "rank":6},
  {"id":"seongha", "record": "00:00:00", "rank":7}, {"id":"seongha", "record": "00:00:00", "rank":8}],
  "3": [{"id":"seongha", "record": "00:00:00", "rank":1},{"id":"seongha", "record": "00:00:00", "rank":2},
  {"id":"seongha", "record": "00:00:00", "rank":3},{"id":"seongha", "record": "00:00:00", "rank":4},
  {"id":"seongha", "record": "00:00:00", "rank":5}, {"id":"seongha", "record": "00:00:00", "rank":6},
  {"id":"seongha", "record": "00:00:00", "rank":7}, {"id":"seongha", "record": "00:00:00", "rank":8}],
  "4": [{"id":"seongha", "record": "00:00:00", "rank":1},{"id":"seongha", "record": "00:00:00", "rank":2},
  {"id":"seongha", "record": "00:00:00", "rank":3},{"id":"seongha", "record": "00:00:00", "rank":4},
  {"id":"seongha", "record": "00:00:00", "rank":5}, {"id":"seongha", "record": "00:00:00", "rank":6},
  {"id":"seongha", "record": "00:00:00", "rank":7}, {"id":"seongha", "record": "00:00:00", "rank":8}],
  "5": [{"id":"seongha", "record": "00:00:00", "rank":1},{"id":"seongha", "record": "00:00:00", "rank":2},
  {"id":"seongha", "record": "00:00:00", "rank":3},{"id":"seongha", "record": "00:00:00", "rank":4},
  {"id":"seongha", "record": "00:00:00", "rank":5}, {"id":"seongha", "record": "00:00:00", "rank":6},
  {"id":"seongha", "record": "00:00:00", "rank":7}, {"id":"seongha", "record": "00:00:00", "rank":8}],

});
var id = "sihyun";
var pw = "1234";
var level = 1;
writeToDatabase(id, pw, level);
writeToDatabase("seongha", "4321", 1);
writeToDatabase("sangmin", "1111", 1);
writeToDatabase("yoonseo", "2222", 1);
checkNewRecord(1, "sihyun", "00:00:01");
checkNewRecord(1, "yoonseo", "00:00:03");
checkNewRecord(1, "sihyun2", "00:00:03");


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
            <Route exact path="/ranking/1" component={RankingEach1} />
            <Route exact path="/ranking/2" component={RankingEach2} />
            <Route exact path="/ranking/3" component={RankingEach3} />
            <Route exact path="/ranking/4" component={RankingEach4} />
            <Route exact path="/ranking/5" component={RankingEach5} />
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
