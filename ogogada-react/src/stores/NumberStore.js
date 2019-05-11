import { Container } from "unstated";
import isInteger from "lodash/isInteger";
import metaJSON from "../assets/meta.js";

class NumberStore extends Container {
  state = {
    numbers: metaJSON.numbers,
    selected: {},
    code: "",
    display: "",
  };


  buttonClickAtGifticon = (menu, number) => {
    console.log(menu);
    console.log(number);
    if (number === "C") {
      this.setState({
        code: "",
        display: ""
      })
    }
    else {
      var code = this.state.code + number;
      var display = this.state.display + "*";

      this.setState({
        code: code,
        display: display
      })
    }
  };
}

export default NumberStore;
