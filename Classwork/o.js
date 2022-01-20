let cl = console.log

let getRPS = function() {
    let rps = ["rock", "paper", "scissors"];
    return rps[Math.floor(Math.random() * rps.length)];
};                                       

let getUserInput = function() {
                                                                                                                                
};

let getWinner = function (userInput, computerinput) {
    if (userInput === computerinput) {
        return "tie";
    }
    if (
        (userInput === "rock" && computerInput === "scissors") || 
        (userInput === "scissors" && computerInput === "paper") ||
        (userInput === "paper" && computerInput === "rock")
    ) {
        return "win";
    } else {
        return "lose";
    }
};



let congratulate = function (result) {
    if (result === "tie") {
        cl("CAT");
    } else if (result === "win") {
        cl ("You won. Yay.");
    } else {
        cl ("Good job, you failed.");
    }
}

let userInput = getUserInput();
let computerInput = getRPS();
