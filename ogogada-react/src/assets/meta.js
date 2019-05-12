//name, price, level, left/right
const meta = {
  menus_left: [
    ["Americano HOT", 1500, 1, 0],
    ["Americano ICE", 1800, 1, 0],
    ["Caffe Latte HOT", 2000, 2, 0],
    ["Caffe Latte ICE", 2300, 2, 0],
    ["Caramel Macchiato HOT", 2500, 2, 0],
    ["Caramel Macchiato ICE", 2800, 2, 0],
    ["Caffe Mocha HOT", 2500, 2, 0],
    ["Caffe Mocha ICE", 2800, 2, 0]
  ],
  menus_right: [
    ["Green Tea Latte HOT", 2500, 3, 1],
    ["Green Tea Latte ICE", 2800, 3, 1],
    ["Earl Grey HOT", 2000, 3, 1],
    ["Earl Grey ICE", 2300, 3, 1],
    ["Chamomile HOT", 2000, 4, 1],
    ["Chamomile ICE", 2300, 4, 1],
    ["Peppermint HOT", 2000, 4, 1],
    ["Peppermint ICE", 2300, 4, 1],
  ],
  coupons: [0, 0.05, 0.1],
  paymentMethods: [
    { type: "card", label: "card", discount: 0 },
    { type: "cash", label: "cash", discount: 0.05 }
  ],
  numbers: [
  "7", "8", "9",
  "4", "5", "6",
  "1", "2", "3",
  "00", "0", "C"
  ],
  answers: [
    {level: 1, menu: {0:1, 1:1}, method: "card"},
    {level: 2, menu: {8:2, 4:1}, method: "card"},
    {level: 3, menu: {0:1}, coupon: 2, method: "card"},
    {level: 4, menu: {}},
    {level: 5, menu: {}},
  ]

};

export default meta;
