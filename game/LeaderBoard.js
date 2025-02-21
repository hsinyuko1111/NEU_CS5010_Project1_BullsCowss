import fs from "fs";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
/**
 * Singleton Leaderboard class to track player scores globally and persist data.
 */
class Leaderboard {
    static instance = null;
    static FILE_PATH = path.join(dirname(fileURLToPath(import.meta.url)),"./leaderboard.json")

    constructor() {
      if (!Leaderboard.instance) {
          console.log("🏆 Initializing Leaderboard Singleton...");
          this.rankings = this.loadScores(); 
          Leaderboard.instance = this;
      }
      return Leaderboard.instance;
    }

    /**
     * Updates the player's score, games played, and last played timestamp.
     * Scores are stored based on game type and difficulty.
     *
     * @param {Player} player - The player object
     * @param {string} gameType - "numbers" or "characters"
     * @param {number} difficulty - Difficulty level (3, 4, 5)
     * @param {number} score - The player's score
     */
    updateScore(player, gameType, difficulty, score) {
      console.log(`Updating score for ${player.getName()} - Game: ${gameType}, Difficulty: ${difficulty}, Score: ${score}`); 
  
      this.rankings[gameType] ??= {};
      this.rankings[gameType][difficulty] ??= {};
      
      const playerRecord = this.rankings[gameType][difficulty][player.getName()] ??= {
          score: 0, 
          games_played: 0,
          last_played: ""
      };
      
      playerRecord.score = Math.max(playerRecord.score, score);
      playerRecord.games_played += 1; 
      playerRecord.last_played = new Date().toISOString(); 
  
      this.saveScores(); 
  }
  
    /**
     * Retrieves top players based on score for a given game type and difficulty.
     * @param {string} gameType - "numbers" or "characters"
     * @param {number} difficulty - Difficulty level (3, 4, 5)
     * @param {number} n - Number of top players to retrieve
     * @returns {Array} - Sorted list of top players
     */
    getTopPlayers(gameType, difficulty, n = 5) {
        if (!this.rankings[gameType] || !this.rankings[gameType][difficulty]) {
            return []; 
        }

        return Object.entries(this.rankings[gameType][difficulty])
            .map(([name, data]) => ({ name, ...data }))
            .sort((a, b) => b.score - a.score) 
            .slice(0, n);
    }
    /**
     * Saves the leaderboard scores to a JSON file.
     */
    saveScores() {
      try {
          fs.writeFileSync(Leaderboard.FILE_PATH, JSON.stringify(this.rankings, null, 2), 'utf8');
          console.log("✅ Leaderboard successfully saved!"); 
      } catch (error) {
          console.error("❌ Error saving leaderboard:", error);
      }
    }
    
  

    /**
     * Loads scores from the JSON file.
     * @returns {Object} - Leaderboard rankings
     */
    loadScores() {
      try {
          if (fs.existsSync(Leaderboard.FILE_PATH)) {
              const data = fs.readFileSync(Leaderboard.FILE_PATH, 'utf8');
              return JSON.parse(data) || {};
          }
      } catch (error) {
          console.error("❌ Error loading leaderboard:", error);
          return {}; 
      }
  }  
}

// ✅ Create a single instance and export it
const instance = new Leaderboard();
Object.freeze(instance);
export default instance;
