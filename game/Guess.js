// game/Guess.js

/**
 * @class Guess
 */
export default class Guess {
    /**
     * @param {string} guess - Player's guess
     * @param {number} bulls - Correct positions
     * @param {number} cows - Correct characters but wrong positions
     */
    constructor(guess, bulls, cows) {
      this.guess = guess;
      this.bulls = bulls;
      this.cows = cows;
      this.timestamp = new Date();
    }
  }
  