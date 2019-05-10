const meta = {
  menus_left: [
    ["americano HOT", 1500, 1],
    ["americano ICE", 1800, 1],
    ["Caffe Latte HOT", 2000, 2],
    ["Caffe Latte ICE", 2300, 2],
    ["Caramel macchiato HOT", 2500, 2],
    ["Caramel macchiato ICE", 2800, 2],
    ["Caffe Mocha HOT", 2500, 2],
    ["Caffe Mocha ICE", 2800, 2]
  ],
  menus_right: [
    ["a", 1000, 3],
    ["b", 1800, 3],
    ["c", 2000, 3],
    ["d", 2300, 3],
    ["e", 2500, 4],
    ["f", 2800, 4],
    ["g", 2500, 4],
    ["h", 2800, 4],
  ],
  coupons: [0, 0.05, 0.1],
  paymentMethods: [
    { type: "card", label: "카드", discount: 0 },
    { type: "cash", label: "현금", discount: 0.05 }
  ],
  numbers: [
  "7", "8", "9",
  "4", "5", "6",
  "1", "2", "3",
  "00", "0", "C"
  ],

};

export default meta;
