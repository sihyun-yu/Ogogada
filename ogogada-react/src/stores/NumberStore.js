import { Container } from "unstated";
import isInteger from "lodash/isInteger";
import metaJSON from "../assets/meta.js";

class NumberStore extends Container {
  state = {
    numbers: metaJSON.numbers,
  };
}

export default NumberStore;
