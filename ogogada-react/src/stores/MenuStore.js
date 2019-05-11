import { Container } from "unstated";
import isInteger from "lodash/isInteger";
import metaJSON from "../assets/meta.js";

const menus_left = metaJSON.menus_left;
const menus_right = metaJSON.menus_right;
const totalmenu = menus_left.concat(menus_right);
class MenuStore extends Container {
  state = {
    menus: menus_left,
    selected: {},
    gifticonOpen: false,
    recentMenuID: "",
    totalmenu: totalmenu,
    currentMenuID:-1,
    numbersByPad: ""
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
    console.log(id);
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

  openGifticon = () => {
    this.setState({
      gifticonOpen: true
    });
    console.log("gifticon open");
  };

  closeGifticon = () => {
    this.setState({
      gifticonOpen: false
    })
  }
// =========== 패드 부분 =========== /

// summary table에서 누른 id 들고오기 //
  setCurrentMenuID = id => {
    this.setState({
      currentMenuID: id
    })
  }

// 패드 누른 숫자로 업데이트
  changeNumberbyPad = (id, numbersByPad, number) => {
    if (id != -1) {
      var newNumber = (numbersByPad + number);
      console.log(id);
      console.log(newNumber);
      const newSelected = Object.assign({}, this.state.selected);
      newSelected[id] = parseInt(newNumber);

      this.setState({
        selected: newSelected,
        numbersByPad: newNumber
      });
    }
  }

  resetNumber = () => {
    //console.log("reset number");
    this.setState({
      numbersByPad: ""
    })
  }

  refreshValues = id => {
    this.setState({
      recentMenuID: id,
      currentMenuID: -1,
      numbersByPad: ""
    })
  }

}

export default MenuStore;
