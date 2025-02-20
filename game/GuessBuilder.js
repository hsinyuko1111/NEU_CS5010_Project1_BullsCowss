// game/GuessBuilder.js
import Guess from "./Guess.js";

/**
 * Builder class for constructing `Guess` objects.
 * Implements the Builder Pattern to simplify object creation.
 */
export default class GuessBuilder {
    /**
     * Initializes a new `GuessBuilder` with default values.
     */
    constructor() {
        /** @type {string} */
        this.guess = "";
        
        /** @type {number} */
        this.bulls = 0;
        
        /** @type {number} */
        this.cows = 0;
        
        /** @type {string} */
        this.timestamp = new Date().toISOString();
    }

    /**
     * Sets the guessed sequence.
     * @param {string} guess - The player's guessed sequence.
     * @returns {GuessBuilder} - The updated builder instance.
     */
    setGuess(guess) {
        this.guess = guess;
        return this; // Enables method chaining
    }

    /**
     * Sets the number of bulls (correct position and value).
     * @param {number} bulls - The count of bulls.
     * @returns {GuessBuilder} - The updated builder instance.
     */
    setBulls(bulls) {
        this.bulls = bulls;
        return this;
    }

    /**
     * Sets the number of cows (correct value, wrong position).
     * @param {number} cows - The count of cows.
     * @returns {GuessBuilder} - The updated builder instance.
     */
    setCows(cows) {
        this.cows = cows;
        return this;
    }

    /**
     * Sets a custom timestamp for the guess.
     * @param {string} timestamp - The ISO 8601 timestamp.
     * @returns {GuessBuilder} - The updated builder instance.
     */
    setTimestamp(timestamp) {
        this.timestamp = timestamp;
        return this;
    }

    /**
     * Builds and returns a `Guess` object based on the provided values.
     * @returns {Guess} - The constructed `Guess` instance.
     */
    build() {
        return new Guess(this);
    }
}
