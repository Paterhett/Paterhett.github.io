let deck = [];
for (let i = 2; i < 15; i++) {
  deck.push({
    rank: i,
    suit: "Hearts",
  });
  deck.push({
    rank: i,
    suit: "Spades",
  });
  deck.push({
    rank: i,
    suit: "Diamonds",
  });
  deck.push({
    rank: i,
    suit: "Clubs",
  });
}
console.log(deck);
