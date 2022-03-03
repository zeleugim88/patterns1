const Game = require("./game");
class Scoreboard {
    scoreList = []; //instance

    constructor() {
    }

    static getInstance() {
        if (!Scoreboard.instance) {
            Scoreboard.instance = new Scoreboard
        }
            return Scoreboard.instance

    }
    
}
module.exports = Scoreboard;