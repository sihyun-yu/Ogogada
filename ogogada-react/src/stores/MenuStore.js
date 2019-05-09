import { Container } from "unstated";
import isInteger from "lodash/isInteger";
import metaJSON from "../assets/meta.js";

const menus_left = metaJSON.menus_left;
const menus_right = metaJSON.menus_right;

class MenuStore extends Container {
  state = {
    menus: menus_left,
    selected: {},
  };

  changeMenuDisplay = status => {
    if (status == "left") {
      this.setState({
        menus: menus_left
      });
    }
    if (status == "right") {
      this.setState({
        menus: menus_right
      });
      console.log("right");
    }
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
