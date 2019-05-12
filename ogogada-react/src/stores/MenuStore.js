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
    cnt: 0, 
    // ===== Refund ======//
    refundOpen: false,
    refundIdx: -1,
    isConfirmed: false,
    // ===== Popup for questions ======//
    questionConfirmed: false,
  };

  clearSummaryTable = () => {
    console.log ("clearSummaryTable")
    this.setState({
      
      selected: {}
      
    });
    console.log ("clearSummaryTable")
  }

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
// ========== Question Popup ========/
  openQuestion = () => {
    console.log("openQUestion");
    this.setState({
      questionConfirmed: false,
    })
  }
  closeQuestion = () => {
    console.log("closeQuestion");
    this.setState({
      questionConfirmed: true,
    })
  }
// ===========Refund ============== /
  openRefund = () => {
    this.setState({
      refundOpen: true,
    });
    console.log("refund open");
  };
  
  closeRefund = () => {
    
    this.setState({
      refundOpen: false,
    })
  };

  selectRefund = () => {
    const newSelected = Object.assign({}, this.state.selected);
    newSelected[17] = 1;
    console.log("selectRefund: ", newSelected);
    this.setState({
      refundIdx: 1,
    })
  };

  confirm = () => {
    this.setState({
      isConfirmed: true,
    })
  }
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
    var newCode = this.state.code;

// Cancellation 
    if (number == 'C') {
      if (cnt == 0) return;
      if (cnt % 4 == 1 && cnt > 4) {
        newDisplay = newDisplay.slice(0,-1);
        newDisplay = newDisplay.slice(0,-1);
      }
      else {
        newDisplay = newDisplay.slice(0, -1);
      }
      newCode = newCode.slice(0,-1);
      cnt = cnt -1;

      this.setState({
        code: newCode,
        display: newDisplay,
        cnt: cnt
      });

      return;
    }
    if (cnt >= 12) return;


//Add new code
    newCode = newCode + number;
    if (cnt%4 == 0 && cnt > 0) {
      newDisplay = newDisplay + "-";
    }

    newDisplay = newDisplay + number;
    console.log(newCode);
    cnt = cnt + 1;
    this.setState({
      tryAgain: false,
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
      if (number != 'C') {
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

      else if (number == 'C') {
        var newNumber = numbersByPad;
        newNumber = newNumber.slice(0,-1);
        console.log(newNumber);
        if (newNumber == "") newNumber = "0"; 
        const newSelected = Object.assign({}, this.state.selected);
        newSelected[id] = parseInt(newNumber);

        this.setState ({
          selected: newSelected,
          numbersByPad: newNumber
        })
      }
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
