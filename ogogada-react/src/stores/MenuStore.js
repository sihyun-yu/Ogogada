import { Container } from "unstated";
import isInteger from "lodash/isInteger";
import metaJSON from "../assets/meta.js";

class MenuStore extends Container {
  state = {
    menus: metaJSON.menus,
    selected: {}
  };

  addSelectedMenu = id => {
    const newSelected = Object.assign({}, this.state.selected);

    newSelected[id] =
      isInteger(newSelected[id]) && newSelected[id] > 0
        ? newSelected[id] + 1
        : 1;

    this.setState({
      selected: newSelected
    });
  };

  decrementSelectedMenu = id => {
    const newSelected = Object.assign({}, this.state.selected);

    newSelected[id] =
      isInteger(newSelected[id]) && newSelected[id] > 0
        ? newSelected[id] - 1
        : 0;

    this.setState({
      selected: newSelected
    });
  };

  deleteSelectedMenu = id => {
    const newSelected = Object.assign({}, this.state.selected);

    delete newSelected[id];

    this.setState({
      selected: newSelected
    });
  };

  resetSelectedMenu = () => {
    this.setState({
      selected: {}
    });
  };
}

export default MenuStore;
