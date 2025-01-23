let tabs = [
  "All",
  "New",
  "Creators",
  "Sports",
  "Politics",
  "Crypto",
  "Global Elections",
  "Mentions",
  "Pop Culture",
  "Business",
  "Science",
];

let suggestions = [
  "Top",
  "New",
  "Breaking News",
  "Golden Globes",
  "Trump Presidency",
  " Grammys",
  "South Korea",
  "Cybertruck",
  "2025 Predictions",
  "Elon Musk",
  "Bird flu",
  "Geo",
];

let cardData = [
  {
    volume: "3.5m",
    bookmark: true,
    img: "card/img1.svg",
    title: "Germany Parliamentary Election Winner?",
    type: "option",
    options: [
      { option: "CDU/CSU", chance: 65 },
      { option: "AFD", chance: 30 },
      { option: "AFD", chance: 3 },
    ],
  },
  {
    volume: "3.5m",
    bookmark: false,
    img: "card/img2.svg",
    title: "Premier League Winner",
    type: "option",
    options: [
      { option: "Liverpool", chance: 65 },
      { option: "Arsenal", chance: 30 },
      { option: "Manchester City", chance: 3 },
    ],
  },
  {
    volume: "3.5m",
    bookmark: true,
    img: "card/img3.svg",
    title: "Trump ends Ukraine war before inauguration?",
    type: "yes/no",
    chance: 65,
  },
  {
    volume: "3.5m",
    bookmark: true,
    img: "card/img3.svg",
    title: "Israel x Hamas ceasefire by January 31?",
    type: "yes/no",
    chance: 30,
  },
];

let recentTrading = [
  {
    img: "https://picsum.photos/200",
    text1: "Yoon arrested by January 31?",
    userImg: "https://picsum.photos/200",
    user: "kurkumas",
    option: false,
    rate: "67c",
    amount: "$39.15",
    time: "1737062165101",
  },
  {
    img: "https://picsum.photos/200",
    text1: "Will bitcoin hit $100k again by January 15?",
    userImg: "https://picsum.photos/200",
    user: "0xb5fc5dfhdhd...",
    option: true,
    rate: "78c",
    amount: "$390",
    time: "1737162165101",
  },
  {
    img: "https://picsum.photos/200",
    text1: "Will the Toronto Raptors win the 2025 NBA Finals?",
    userImg: "https://picsum.photos/200",
    user: "0xb5fc5dfhdhd553gu7dy",
    option: false,
    rate: "99c",
    amount: "$20.58",
    time: "1737132165101",
  },
  {
    img: "https://picsum.photos/200",
    text1: "Will Ethereum hit $4000 by December 31?",
    userImg: "https://picsum.photos/200",
    user: "unofzs",
    option: true,
    rate: "89c",
    amount: "$19.55",
    time: "1737112165101",
  },
  {
    img: "https://picsum.photos/200",
    text1: "Will Elon tweet 500 or more time Jan 3-Jan10?",
    userImg: "https://picsum.photos/200",
    user: "cigarettes",
    option: false,
    rate: "89c",
    amount: "$59.34",
    time: "1737362165101",
  },
];

let rankData = [
  {
    img: "https://picsum.photos/200",
    name: "Spoon",
    value: "$3,802,452",
  },
  {
    img: "https://picsum.photos/200",
    name: "StarryPath",
    value: "$3,749,600",
  },
  {
    img: "https://picsum.photos/200",
    name: "WinryRockbell",
    value: "$3,246,035",
  },
  {
    img: "https://picsum.photos/200",
    name: "Desy171626220",
    value: "$3,025,866",
  },
  {
    img: "https://picsum.photos/200",
    name: "AiBird",
    value: "$1,366,210",
  },
  {
    img: "https://picsum.photos/200",
    name: "interstellaar",
    value: "$1,489,270",
  },
  {
    img: "https://picsum.photos/200",
    name: "GMIB",
    value: "$1,461,629",
  },
  {
    img: "https://picsum.photos/200",
    name: "LuckyNFT4",
    value: "$764,291",
  },
  {
    img: "https://picsum.photos/200",
    name: "iAmRightYouRWrong",
    value: "$619,262",
  },
  {
    img: "https://picsum.photos/200",
    name: "TonyEffe",
    value: "$512,917",
  },
];

export { cardData, recentTrading, suggestions, tabs, rankData };
