import readline from "readline";
import GameManager from "./game/GameManager.js";
import Player from "./game/Player.js";
import Leaderboard from "./game/LeaderBoard.js"; // Import Leaderboard

// Create a CLI interface
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

                // Validate difficulty
                if (![3, 4, 5].includes(difficulty)) {
                    console.log("Invalid difficulty. Please enter a number between 3 and 5.");
                    askPlayAgain();
                    return;
                }

                // Start game based on user choice
                try {
                    const game = GameManager.startGame(gameType, difficulty, player);
                    console.log(`Game started: ${gameType} with difficulty ${difficulty}`);

                    // Debugging: Show the secret sequence (remove this in production)
                    console.log(`(Secret: ${game.secretSequence})`);

                    // Ask user for a guess
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
        // ✅ Ensure guess is a string and has the correct length
        if (!guess || guess.length !== game.difficulty) {
            console.log(`❌ Invalid guess length! Expected ${game.difficulty} characters.`);
            askForGuess(game, player);
            return;
        }

        try {
            const result = game.processGuess(guess);
            console.log(`Bulls: ${result.bulls}, Cows: ${result.cows}`);

            if (result.bulls === game.difficulty) {
                console.log("🎉 Congratulations! You guessed the correct sequence!");

                // ✅ Update player's score (Higher score for fewer attempts)
                const finalScore = Math.max(10 - game.attempts, 1); // Example scoring system
                Leaderboard.updateScore(player, finalScore);

                // ✅ Show leaderboard at the end
                console.log("\n🏆 Final Leaderboard:");
                GameManager.showLeaderboard(5);

                // ✅ Ask if they want to play again
                askPlayAgain();
            } else {
                askForGuess(game, player); // Ask for another guess
            }
        } catch (error) {
            console.error("⚠️ Error processing guess:", error.message);
            askForGuess(game, player); // Retry on invalid input
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
            startGame(); // Restart the game
        } else {
            console.log("\n👋 Thanks for playing! Goodbye!");
            rl.close(); // Close the program
        }
    });
}

// Start the game for the first time
startGame();


