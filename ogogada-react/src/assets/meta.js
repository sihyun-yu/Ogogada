const meta = {
  menus: [
    ["americano HOT", 1500],
    ["americano ICE", 1800],
    ["Caffe Latte HOT", 2000],
    ["Caffe Latte ICE", 2300],
    ["Caramel macchiato HOT", 2500],
    ["Caramel macchiato ICE", 2800],
    ["Caffe Mocha HOT", 2500],
    ["Caffe Mocha ICE", 2800],
    ["Earl Grey HOT", 3000],
    ["Earl Grey ICE", 3300]
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
  ]
};

export default meta;
