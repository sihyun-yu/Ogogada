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

import "./stylesheets/App.css";
import 'semantic-ui-css/semantic.min.css';

/*Firebase 이용 DB 여기서 받아오기*/
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

export default App;
