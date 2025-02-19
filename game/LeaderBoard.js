// game/Leaderboard.js

/**
 * Singleton Leaderboard class to track player scores globally.
 */
class Leaderboard {
  static instance = null;

  constructor() {
      if (!Leaderboard.instance) {
          this.rankings = {};
          Leaderboard.instance = this;
      }
      return Leaderboard.instance;
  }

  /**
   * Updates the player's score.
   * @param {Player} player - The player object
   * @param {number} score - The player's score
   */
  updateScore(player, score) {
      this.rankings[player.name] = score;
  }

  /**
   * Retrieves the top players based on score.
   * @param {number} n - Number of top players to retrieve
   * @returns {Array} - Array of top players and their scores
   */
  getTopPlayers(n = 5) {
      return Object.entries(this.rankings)
          .sort((a, b) => b[1] - a[1]) // Sort descending by score
          .slice(0, n); // Return top N players
  }
}

// Create a single instance and export it
const instance = new Leaderboard();
Object.freeze(instance);
export default instance;

  