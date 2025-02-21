// game/CharacterGame.js
import Game from "./Game.js";

/**
 * @class CharacterGame
 * Extends Game to provide a character-based Bulls and Cows game.
 */
export default class CharacterGame extends Game {
    static WORD_LIST = {
        3: ["cat", "dog", "bat", "sun", "cup"],
        4: ["fish", "tree", "moon", "lamp"],
        5: ["table", "chair", "grape", "cloud"]
    };

    constructor(difficulty, player) {
        if (![3, 4, 5].includes(difficulty)) {
            throw new Error("Invalid difficulty. Choose 3, 4, or 5.");
        }

        super("Characters", difficulty, player);
        this.generateSecretSequence();
    }

    /**
     * Selects a secret word from the word list based on difficulty.
     */
    generateSecretSequence() {
        const words = CharacterGame.WORD_LIST[this.difficulty];
        console.log("Words List: ", CharacterGame.WORD_LIST[this.difficulty])
        this.secretSequence = words[Math.floor(Math.random() * words.length)];
    }
}

