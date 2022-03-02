let buildDeck = function () {
  let deck = [];
  for (let i = 2; i < 15; i++) {
    deck.push(createCard("Hearts", i));
    deck.push(createCard("Spades", i));
    deck.push(createCard("Diamonds", i));
    deck.push(createCard("Clubs", i));
  }
  return deck;
};
let createCard = function () {
  let color = getSuitColor(suit);
  let name = getRankName(rank);
  let card = {
    rank: rank,
    suit: suit,
    name: name,
    color: color,
  };
  return card;
};
let getSuitColor = function () {
  if (suit === "Spades" || suit === "Clubs") {
    return "black";
  } else {
    return "red";
  }
};
let getRankName = function () {
  switch (rank) {
    case 11:
      return "Jack";
    case 12:
      return "Queen";
    case 13:
      return "King";
    case 14:
      return "Ace";
    default:
      return rank.toString;
  }
};
let dealCard = function () {
  let index = Math.floor(Math.random() * deck.length);
  let card = deck.splice(index, 1)[0];
  return card;
};
let dealHand = function () {
  return [dealCard(), dealCard(), dealCard(), dealCard(), dealCard()];
};
