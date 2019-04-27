const meta = {
  menus: [
    ["아메리카노(Take out)", 500],
    ["아메리카노", 1000],
    ["카페라떼", 1500],
    ["카라멜 마끼아또", 2000]
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
