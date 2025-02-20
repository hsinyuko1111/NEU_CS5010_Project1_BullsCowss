// game/Game.js
import Guess from "./Guess.js";
import GuessBuilder from "./GuessBuilder.js";

/**
 * @class Game
 * @abstract
 */
export default class Game {
    /**
     * @param {string} mode - The type of game (numbers or characters)
     * @param {number} difficulty - Length of the secret sequence
     * @param {Player} player - Player instance
     */
    constructor(mode, difficulty, player) {
      if (this.constructor === Game) {
        throw new Error("Abstract class 'Game' cannot be instantiated.");
      }
      this.mode = mode;
      this.difficulty = difficulty;
      this.player = player;
      this.secretSequence = "";
      this.guessHistory = [];
      this.attempts = 0;
    }
  
    /** @abstract */
    generateSecretSequence() {
      throw new Error("Method 'generateSecretSequence()' must be implemented.");
    }
  
    /**
     * Processes the guess and returns bulls & cows count.
     * @param {string} guessInput
     * @returns {Guess}
     */
    processGuess(guessInput) {
      if (guessInput.length !== this.difficulty) {
        throw new Error("Invalid guess length!");
      }
  
      let bulls = 0, cows = 0;
      for (let i = 0; i < this.difficulty; i++) {
        if (guessInput[i] === this.secretSequence[i]) {
          bulls++;
        } else if (this.secretSequence.includes(guessInput[i])) {
          cows++;
        }
      }
  
      const guess = new GuessBuilder()
      .setGuess(guessInput)
      .setBulls(bulls)
      .setCows(cows)
      .build();

      this.guessHistory.push(guess);
      this.attempts++;
      return guess;

    }
  }
  