import readline from "readline";
import GameManager from "./game/GameManager.js";
import Player from "./game/Player.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * Starts the game by asking for the player's name and preferences.
 */
function startGame() {
    rl.question("Enter your name: ", (name) => {
        const player = GameManager.createPlayer(name);

        rl.question("Choose game type (numbers/characters): ", (gameType) => {
            rl.question("Enter difficulty level (3-5): ", (difficulty) => {
                difficulty = parseInt(difficulty);

                if (![3, 4, 5].includes(difficulty)) {
                    console.log("Invalid difficulty. Please enter a number between 3 and 5.");
                    askPlayAgain();
                    return;
                }

                try {
                    const game = GameManager.startGame(gameType, difficulty, player);
                    console.log(`Game started: ${gameType} with difficulty ${difficulty}`);

                    // Debugging: Show the secret sequence (remove this in production)
                    //console.log(`(Secret: ${game.secretSequence})`);

                    askForGuess(game, player);
                } catch (error) {
                    console.error("Error:", error.message);
                    askPlayAgain();
                }
            });
        });
    });
}

/**
 * Recursively asks the user for guesses until they win.
 * @param {Game} game - The active game instance
 * @param {Player} player - The player instance
 */
function askForGuess(game, player) {
    rl.question("Enter your guess: ", (guess) => {
        if (!guess || guess.length !== game.difficulty) {
            console.log(`❌ Invalid gue ss length! Expected ${game.difficulty} characters.`);
            askForGuess(game, player);
            return;
        }

        try {
            const result = game.processGuess(guess);
            console.log(`Bulls: ${result.bulls}, Cows: ${result.cows}`);

            if (result.bulls === game.difficulty) {
                console.log("🎉 Congratulations! You guessed the correct sequence!");

                const finalScore = Math.max(10 - game.attempts, 1);

                GameManager.updateLeaderboard(player, game.mode, game.difficulty, finalScore);
                GameManager.showLeaderboard(game.mode, game.difficulty, 5);

                askPlayAgain();
            } else {
                askForGuess(game, player); 
            }
        } catch (error) {
            console.error("⚠️ Error processing guess:", error.message);
            askForGuess(game, player); 
        }
    });
}

/**
 * Asks the player if they want to play again.
 */
function askPlayAgain() {
    rl.question("\nDo you want to play again? (yes/no): ", (answer) => {
        if (answer.toLowerCase() === "yes") {
            console.log("\n🎮 Restarting game...");
            startGame(); 
        } else {
            console.log("\n👋 Thanks for playing! Goodbye!");
            rl.close(); 
        }
    });
}


startGame();
