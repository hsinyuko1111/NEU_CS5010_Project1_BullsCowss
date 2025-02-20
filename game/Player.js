// game/Player.js

/**
 * @class Player
 */
export default class Player {
    #name
    /**
     * @param {string} name
     */
    constructor(name) {
      this.#name = name;
    }
    getName() {
      return this.#name;
    }
  }
  