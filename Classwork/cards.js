let deck = [];
for (let i = 2; i < 15; i++) {
  deck.Push({
    rank: i,
    suit: "Hearts",
  });
  deck.Push({
    rank: i,
    suit: "Spades",
  });
  deck.Push({
    rank: i,
    suit: "Diamonds",
  });
  deck.Push({
    rank: i,
    suit: "Clubs",
  });
}
