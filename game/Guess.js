// game/Guess.js

/**
 * Represents a player's guess in the Bulls and Cows game.
 */
export default class Guess {
  /**
   * Creates a new `Guess` object.
   * @param {GuessBuilder} builder - The builder instance containing guess details.
   */
  constructor(builder) {
      /** @type {string} */
      this.guess = builder.guess;
      
      /** @type {number} */
      this.bulls = builder.bulls;
      
      /** @type {number} */
      this.cows = builder.cows;
      
      /** @type {string} */
      this.timestamp = builder.timestamp;
  }
}

  