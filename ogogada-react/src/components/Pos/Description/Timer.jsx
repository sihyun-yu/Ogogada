import React from "react";

function pad(n, width) {
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
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

  stopTimer() {
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
      <div style={{"display": "flex", "flex-direction": "row"}}>
        <h3>{pad(Math.floor((this.state.time/1000)/60), 2)} : {pad(Math.floor((this.state.time/1000)%60), 2)} : {pad(Math.floor((this.state.time%1000)/10), 2)}</h3>
        {start}
        {stop}
        {reset}
      </div>
    )
  }
}
export default Timer;