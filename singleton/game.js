const Scoreboard = require("./Scoreboard");

class Game {

    constructor(name) {
        this.name = name;
        this.playersList = [];
        this.scoreObjectList = []; //delete after moving to scoreboard
        this.currentRound = 1;
        this.scoreboard = Scoreboard.getInstance();
    }

    static addGame(game) {
        if (game === undefined) {
            return console.log(`Please spell the game'${player}' correctly`);
        } else {
            console.log(`We will play ${game}!!!!!!`)
            return new Game(game);
        }
    };

    addPlayers(...players) {
        for (let i = 0; i < players.length; i++) {
            this.playersList.push(players[i])
            console.log(`Ready player ${players[i]}`)
        }
    }

    showPlayers() {
        console.log("These are the super-players ready for the battle")
        console.log(this.playersList)
    }

    playRound() {
        console.log(`Round ${this.currentRound} starts: `)
        for (let i = 0; i < this.playersList.length; i++) {
            const points = Math.floor(Math.random() * 100);
            let scoreObj = { player: this.playersList[i], score : points, round : this.currentRound};
            //this.scoreObjectList.push(scoreObj); 
            this.scoreboard.scoreList.push(scoreObj)
            if(points > 0) {console.log(`${this.playersList[i]} makes ${points} points, awesome!`)}
            else if(points <=0) {console.log(`${this.playersList[i]} makes ${points} points, this is a disaster! Good luck next round!`)}
        }
        this.currentRound ++
    }

    bestRound() {

        const max = this.scoreboard.scoreList.reduce(function(prev, current) {
            return (prev.score > current.score) ? prev : current
        })
        console.log(`The maximun score is ${max.score}, achieved by ${max.player} in round ${max.round}`)
    }

    ranking() {
        const totalRanking = [];
        for (let i = 0; i < this.playersList.length; i++) {
            const tempPlayer = this.playersList[i];
            let sumPoints = 0;
            for (let j = 0; j < this.scoreboard.scoreList.length; j++ ) {
                    if (this.scoreboard.scoreList[j].player === tempPlayer) {
                        sumPoints += this.scoreboard.scoreList[j].score
                    }
            }
            totalRanking.push([tempPlayer,sumPoints])
            sumPoints = 0;
        }
        console.log(`The final classification: `)
        console.log(totalRanking.sort(sortObject));
        function sortObject(a, b) {
            if (a[1] === b[1]) {return 0}
            else {return ((a[1] > b[1]) ? -1 : 1)}
        }
        console.log(`And the winner is ${totalRanking[0][0]} with ${totalRanking[0][1]} points!!!!`)
    }
}

module.exports = Game