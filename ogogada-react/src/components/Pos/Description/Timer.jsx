import React from "react";
import "../../../stylesheets/Timer.css";
import firebase from "firebase"

function pad(n, width) {
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
}

var pStyle = {
  "margin": "0",
  "font-size": "15px"
}

function checkNewRecord (user_level, user_id, user_time) {
  // console.log (checkNewRecord)
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

function levelUp (user_level, user_id) {
  console.log (user_id + " level Up!!!!!!!!!!!!!!") 
  console.log("game_level1: " + user_level)
  firebase.database().ref("/accounts/"+user_id+"/level/").once('value', function (snapshot) {
    console.log("prev_level: " + snapshot.val())
    var prev_level = snapshot.val()
    console.log("game_level2: " + user_level)
    if (parseInt(prev_level) === parseInt(user_level)) {
      console.log("level ", parseInt(prev_level)+1);
      firebase.database().ref("/accounts/"+user_id+"/level/").set(parseInt(prev_level)+1);
    } 
  
 
  })
}


class Timer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      time: 0,
      start: 0,
      isOn: false
    }
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
  }

  componentDidMount() {
    this.setState({
      time: this.state.time,
      start: Date.now() - this.state.time,
      isOn: true
    })
    this.timer = setInterval(() => this.setState({
      time: Date.now() - this.state.start
    }), 1);
  }

  

  componentDidUpdate() {
    if(this.props.flag == false) {
      clearInterval(this.timer)
      
      // record to db
      checkNewRecord (this.props.level, this.props.username, this.state.time)

      console.log ("props level: " + this.props.level)
      // levelup to db
      levelUp (this.props.level, this.props.username)
    }
  }

  startTimer() {
    this.setState({
      time: this.state.time,
      start: Date.now() - this.state.time,
      isOn: true
    })
    this.timer = setInterval(() => this.setState({
      time: Date.now() - this.state.start
    }), 1);
  }

  stopTimer = () => {
    this.setState({isOn: false})
    clearInterval(this.timer)
  }

  resetTimer() {
    this.setState({time: 0})
  }

  render() {
    let start = (this.state.time == 0) ?
      <button onClick={this.startTimer}>start</button> :
      null
    let stop = (this.state.isOn) ?
      <button onClick={this.stopTimer}>stop</button> :
      null
    let reset = (this.state.time != 0 && !this.state.isOn) ?
      <button onClick={this.resetTimer}>reset</button> :
      null
    let resume = (this.state.time != 0 && !this.state.isOn) ?
      <button onClick={this.startTimer}>resume</button> :
      null
    return(
      <div className="timer__container" >
          <p style={pStyle}>{pad(Math.floor((this.state.time/1000)/60), 2)} : {pad(Math.floor((this.state.time/1000)%60), 2)} : {pad(Math.floor((this.state.time%1000)/10), 2)}</p>
        {/*<div className="timer__action">
          {start}
          {stop}
          {reset}
    </div>*/}
      </div>
    )
  }
}
export default Timer;