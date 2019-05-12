import { Container } from "unstated";
import isInteger from "lodash/isInteger";
import metaJSON from "../assets/meta.js";

const historylist = metaJSON.history;
console.log(historylist);


class HistoryStore extends Container {
  state = {
    historyIndex: 0,
    historyList: historylist
  };


  resetIndex = () => {
    this.setState({
      historyIndex:0
    })
  }

  increaseIndex = (level, type, id) => {
    if (type == historylist[level][this.state.historyIndex][0] && 
      id == historylist[level][this.state.historyIndex][1]) {
      var newIndex = this.state.historyIndex + 1;
      this.setState({
        historyIndex:newIndex
      });
    }
  }
}

export default HistoryStore;
