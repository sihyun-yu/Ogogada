import { Container } from "unstated";
import isInteger from "lodash/isInteger";
import metaJSON from "../assets/meta.js";

const menus_left = metaJSON.menus_left;
const menus_right = metaJSON.menus_right;
const totalmenu = menus_left.concat(menus_right).concat([["Americano ICE Gifticon", -1800, 1, 0]]);

class MenuStore extends Container {
  state = {
    tryAgain: false,
    menus: menus_left,
    selected: {},
    recentMenuID: "",
    totalmenu: totalmenu,
    currentMenuID:-1,
    numbersByPad: "",
    // ===== Gifticon ====== // 
    gifticonOpen: false,
    display: "",
    code: "",
    cnt: 0
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
    console.log(this.state.selected);
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


// ===========Giftion ============== /
  openGifticon = () => {
    this.setState({
      gifticonOpen: true,
      numbersByPad: "",
      currentMenuID: -1
    });
    console.log("gifticon open");
  };

  closeGifticon = () => {
    this.setState({
      tryAgain: false,
      gifticonOpen: false,
      code: "",
      display: "",
      cnt: 0
    })
  }

  addGifticonCode = (number) => {
    var cnt = this.state.cnt;  
    var newDisplay = this.state.display;
    if (cnt%4 == 0 && cnt < 12 && cnt > 0) {
      newDisplay = newDisplay + "-";
    }
    var newCode = this.state.code + number;
    newDisplay = newDisplay + "*";
    console.log(newCode);
    cnt = cnt + 1;
    this.setState({
      code: newCode,
      display: newDisplay,
      cnt: cnt
    })
  }

  checkGifticonCode = () => {
    if (this.state.code === metaJSON.gifticon) {
      const newSelected = Object.assign({}, this.state.selected);
      newSelected[16] = 1;
      this.setState({
        tryAgain: false,
        selected: newSelected,
        gifticonOpen: false,
        code: "",
        display: "",
        cnt: 0
      })
    }
    else {
      this.setState({
        tryAgain: true,
        gifticonOpen: true,
        code: "",
        display: "",
        cnt: 0
      })
    }
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
