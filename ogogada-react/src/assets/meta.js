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
    ["Chamomile HOT", 2000, 4, 1],
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
    {level: 1, menu: {0:1, 1:1}, coupon: null, method: "0"},
    {level: 2, menu: {5:2, 8:1}, coupon: null, method: "0"},
    {level: 3, menu: {15:5}, coupon: 2, method: "0"},
    {level: 4, menu: {3:1, 16:1}, coupon: null, method: "0"},
    {level: 5, menu: {17: 1}},
  ],
  gifticon: "123456780101"
};

export default meta;
