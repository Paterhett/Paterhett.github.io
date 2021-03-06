let buildDeck = function () {
  let deck = [];
  for (let rank = 2; rank < 15; rank++) {
    deck.push(createCard("Hearts", rank));
    deck.push(createCard("Spades", rank));
    deck.push(createCard("Diamonds", rank));
    deck.push(createCard("Clubs", rank));
  }
  return deck;
};
let createCard = function (suit, rank) {
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
let getSuitColor = function (suit) {
  if (suit === "Spades" || suit === "Clubs") {
    return "black";
  } else {
    return "red";
  }
};
let getRankName = function (rank) {
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
      return rank.toString();
  }
};
let dealCard = function () {
  let inter = Math.floor(Math.random() * deck.length);
  let card = deck.splice(inter, 1)[0];
  return card;
};
let dealHand = function () {
  return [dealCard(), dealCard(), dealCard(), dealCard(), dealCard()];
};

let deck = buildDeck();

let hand = dealHand();

let getcard = function () {
  let card = hand.sort[0];
};

/*/-------------------------------------------------------------------------------------/*/

const textElement = document.getElementById("text");
const optionButtonsElement = document.getElementById("option-buttons");

let state = {};

function startGame() {
  state = {};
  showTextNode(1);
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find((textNode) => textNode.id === textNodeIndex);
  textElement.innerText = textNode.text;
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }

  textNode.options.forEach((option) => {
    if (showOption(option)) {
      const button = document.createElement("button");
      button.innerText = option.text;
      button.classList.add("btn");
      button.addEventListener("click", () => selectOption(option));
      optionButtonsElement.appendChild(button);
    }
  });
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state);
}

function selectOption(option) {
  const nextTextNodeId = option.nextText;
  if (nextTextNodeId <= 0) {
    return startGame();
  }
  state = Object.assign(state, option.setState);
  showTextNode(nextTextNodeId);
}
const textNodes = [
  {
    id: 1,
    text: "You wake up in a strange white room with a smooth wooden door. You see a deck of cards laying next to where you sit.",
    options: [
      {
        text: "Take the cards",
        setState: { cards: true },
        nextText: 2,
      },
      {
        text: "Leave the cards",
        setState: { nocards: true },
        nextText: 2,
      },
    ],
  },
  {
    id: 2,
    text: "You go through the door and come upon a black table.",
    options: [
      {
        text: "Sit at the table",
        requiredState: (currentState) => currentState.cards,
        nextText: 3,
      },
      {
        text: "Sit at the table",
        requiredState: (currentState) => currentState.nocards,
        nextText: 5,
      },
      {
        text: "Don't sit at the table",
        nextText: 4,
      },
    ],
  },
  {
    id: 3,
    text: "The table is surrounded by people that don't quite look human. You are the exception, of course. They seem to be expecting something to happen.",
    options: [
      {
        text: "'Do they want the cards?'",
        nextText: 6,
      },
      {
        text: "'What are they?' (try to touch one)",
        nextText: 4,
      },
    ],
  },
  {
    id: 4,
    text: "You hear a gun go off and your conciousness fades",
    options: [
      {
        text: "Restart",
        nextText: -1,
      },
    ],
  },
  {
    id: 5,
    text: "Human likeness: 'Where are the cards? Bzzt. You have none. You are of no worth.' (a gunshot is heard, your conciousness fades)",
    options: [
      {
        text: "Restart",
        nextText: -1,
      },
    ],
  },
  {
    id: 6,
    text: "You can't remember any card games, but you can remember the card values, at the very least",
    options: [
      {
        text: "Deal cards to the...others...as well as yourself.",
        nextText: 7,
      },
    ],
  },
  {
    id: 7,
    text: "You have the following cards in your hand:",
    options: [
      {
        text: "Proceed",
        nextText: 8,
      },
    ],
  },
  {
    id: 8,
    text: "They then proceed to look over their cards, and put the highest-ranking faceup in front of them.",
    options: [
      {
        text: "Lay your highest card down.",
        nextText: 9,
      },
      {
        text: "Don't lay any cards down.",
        nextText: 4,
      },
    ],
  },
  {
    id: 9,
    text: "Whether you won or lost, you know that you had fun.",
    options: [
      {
        text: "Restart",
        nextText: -1,
      },
    ],
  },
];

startGame();
