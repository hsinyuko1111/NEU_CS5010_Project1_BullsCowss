// game/GameManager.js
import NumberGame from "./NumberGame.js";
import CharacterGame from "./CharacterGame.js";
import Player from "./Player.js";
import Leaderboard from "./LeaderBoard.js"; // Import Singleton Leaderboard

/**
 * @class GameManager
 */
export default class GameManager {
    /**
     * Creates a new player.
     * @param {string} name - Player's name
     * @returns {Player}
     */
    static createPlayer(name) {
        return new Player(name);
    }

    /**
     * Starts a new game and adds the player to the leaderboard.
     * @param {string} gameType - "numbers" or "characters"
     * @param {number} difficulty - Length of the secret sequence
     * @param {Player} player - The player instance
     * @returns {Game}
     */
    static startGame(gameType, difficulty, player) {
        let game;
        switch (gameType.toLowerCase()) {
            case "numbers":
                game = new NumberGame(difficulty, player);
                break;
            case "characters":
                game = new CharacterGame(difficulty, player);
                break;
            default:
                throw new Error("Invalid game type!");
        }

        // ✅ Initialize player's score in the Leaderboard (Step where it happens)
        // ✅ Ensure player is added to the leaderboard if they are new
        if (!Leaderboard.rankings[player.name]) {
          Leaderboard.updateScore(player, 0);
      }


        return game;
    }

    /**
     * Displays the top players from the leaderboard.
     * @param {number} n - Number of top players to show
     */
    static showLeaderboard(n = 5) {
        console.log("🏆 Leaderboard:");
        console.table(Leaderboard.getTopPlayers(n));
    }
}

