// game/NumberGame.js
import Game from "./Game.js";

/**
 * @class NumberGame
 * @extends Game
 */
export default class NumberGame extends Game {
  constructor(difficulty, player) {
    super("Numbers", difficulty, player);
    this.generateSecretSequence();
  }

  /** Generates a secret sequence of unique numbers */
  generateSecretSequence() {
    const digits = "0123456789".split("");
    this.secretSequence = [...Array(this.difficulty)]
      .map(() => digits.splice(Math.floor(Math.random() * digits.length), 1)[0])
      .join("");
  }
}
