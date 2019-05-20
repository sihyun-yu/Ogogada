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
    ["Green Tea Latte HOT", 2500, 2, 1],
    ["Green Tea Latte ICE", 2800, 2, 1],
    ["Earl Grey HOT", 2000, 2, 1],
    ["Earl Grey ICE", 2300, 2, 1],
    ["Chamomile HOT", 2000, 2, 1],
    ["Chamomile ICE", 2300, 2, 1],
    ["Peppermint HOT", 2000, 2, 1],
    ["Peppermint ICE", 2300, 2, 1],
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
  gifticon: "123456780101",
  history: [[],
  [['menu', 0], ['method', 0], ['payment', 0]],
  [['menu', 7], ['list', 7], ['number', 2], ['change', 1], ['menu', 10], ['method', 0], ['payment', 0]],
  [['change', 1], ['menu', 15], ['list', 15], ['number', 5], ['coupon', 2], ['method', '0'], ['payment', 0]],
  [['menu', 1], ['gift', 0], ['number', 1], ['number', 2], ['number', 3], ['number', 4], ['number', 5], ['number', 6], ['number', 7], ['number', 8], ['number', 0], ['number', 1], ['number', 0], ['number', 1], ['giftsubmit', 0], ['payment', 0]],
  [['refund', 0], ['refundlist', 0], ['refundsubmit', 0], ['refundconfirm', 0]]
  ],
  historyAnswers: [
  {level: 1, menu: {0:1}, coupon: null, method: "0"},
  {level: 2, menu: {7:2, 10:1}, coupon: null, method: "0"},
  {level: 3, menu: {15:5}, coupon: 2, method: "0"},
  {level: 4, menu: {1:1, 16:1}, coupon: null, method: "1"},
  {level: 5, menu: {}}],
  questions : [
    "Take an order for one HOT americano and one ICE americano with card.",
    "Take an order for two ICE caramel macchiato and one HOT green tea latte with card.",
    "Take an order for five ICE peppermint by 10% discount with card.",
    "A customer wants to use one ICE americano gifticon and order one ICE caffelatte. \n Calculate the difference with card.",
    "A customer wants to cancel the order that he/she made just now. Refund the most recent order."
  ]
};

/*
1. 핫아메버튼 - 카드버튼 - 결제하기
2. 아이스 모카 - 아이스모카 메뉴리스트 아이템 클릭 - 2클릭 - next버튼 - 핫 얼그레이 - 카드 - 결제하기
3. 넥스트버튼 - 아이스 페퍼민트 - 그아이템 클릭 - 5 클릭 - 쿠폰 - 쿠폰10% - 카드 - 결제하기
4. 아이스 아메리카노 - 깊티콘버튼 - 1 - 2- 3- 4- 5 - 6- 7- 8- 0 - 1 - 0. - 1- 섭밋버튼 
5. 리펀드 버튼 - 리스트맨위아이템 - 리펀드 - 오케이
*/
export default meta;
