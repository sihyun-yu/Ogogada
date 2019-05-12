//name, price, level, left/right
const meta = {
  menus_left: [
    ["Americano HOT", 1500, 1, 0],
    ["Americano ICE", 1800, 1, 0],
    ["Caffe Latte HOT", 2000, 2, 0],
    ["Caffe Latte ICE", 2300, 2, 0],
    ["Caramel macchiato HOT", 2500, 2, 0],
    ["Caramel macchiato ICE", 2800, 2, 0],
    ["Caffe Mocha HOT", 2500, 2, 0],
    ["Caffe Mocha ICE", 2800, 2, 0]
  ],
  menus_right: [
    ["a", 1000, 3, 1],
    ["b", 1800, 3, 1],
    ["c", 2000, 3, 1],
    ["d", 2300, 3, 1],
    ["e", 2500, 4, 1],
    ["f", 2800, 4, 1],
    ["g", 2500, 4, 1],
    ["h", 2800, 4, 1],
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
  answers: [
    {level: 1, answer: {0:1, 1:1}},
    {level: 2, answer: {}},
    {level: 3, answer: {}},
    {level: 4, answer: {}},
    {level: 5, answer: {}},
  ]

};

export default meta;
