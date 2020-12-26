class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.score =0;
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            score:this.score
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }

    getPlayer1score(){
        var getPlayerscore1 = database.ref('players/player1/score');
        getPlayerscore1.on("value", (data) =>{
            player1Score = data.val();
        })
    }

    getPlayer2score(){
        var getPlayerscore2 = database.ref('players/player2/score');
        getPlayerscore2.on("value", (data) =>{
            player2Score = data.val();
        })
    }

    
}
