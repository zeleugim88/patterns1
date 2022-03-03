
const Game = require("./game");
const Scoreboard = require("./scoreboard")
//const Scoreboard = require("./scoreboard");

//Shall we play a game? What about this one?
//const game1 = new Game("Chess"); // Like this only if addGame was not static method

const game1 = Game.addGame("Chess")

//Does anybody want to play? Volunteers?

game1.addPlayers("Tata","Tete","Titi")

//All right, we have all the players already, here is owr Team: 

game1.showPlayers();

//So let's go! Game starts.
//Round 1
game1.playRound();
//Round 2 
game1.playRound();
//Round 3 
game1.playRound(); 

//It was a nice game guys, who actually won the game? Let's take a look to the scoreboard
game1.bestRound();

game1.ranking();

//Test Singleton pattern. 
/* const test2 = new Scoreboard(); //use constructor, it does not work
const test1 = Scoreboard.getInstance(); // use method, Scoreboard already exists */






