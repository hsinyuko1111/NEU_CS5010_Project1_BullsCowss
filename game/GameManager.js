// game/GameManager.js
import NumberGame from "./NumberGame.js";
import CharacterGame from "./CharacterGame.js";
import Player from "./Player.js";
import Leaderboard from "./Leaderboard.js" // Import Singleton Leaderboard

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

        // ✅ Initialize player's score in the Leaderboard if they haven't played this game mode & difficulty
        if (!Leaderboard.rankings[gameType] || !Leaderboard.rankings[gameType][difficulty] || !Leaderboard.rankings[gameType][difficulty][player.getName()]) {
            this.updateLeaderboard(player, gameType, difficulty, 0);
        }

        return game;
    }

    /**
     * Updates the leaderboard after a game finishes.
     * @param {Player} player - The player instance
     * @param {string} gameType - "numbers" or "characters"
     * @param {number} difficulty - Game difficulty level (3, 4, 5)
     * @param {number} score - The player's score
     */
    static updateLeaderboard(player, gameType, difficulty, score) {
        Leaderboard.updateScore(player, gameType, difficulty, score);
    }

    /**
     * Displays the top players from the leaderboard.
     * @param {string} gameType - "numbers" or "characters"
     * @param {number} difficulty - Difficulty level (3, 4, 5)
     * @param {number} n - Number of top players to show
     */
    static showLeaderboard(gameType, difficulty, n = 5) {
        console.log(`\n🏆 Leaderboard for ${gameType} (Difficulty: ${difficulty}):`);
        console.table(Leaderboard.getTopPlayers(gameType, difficulty, n));
    }
}


