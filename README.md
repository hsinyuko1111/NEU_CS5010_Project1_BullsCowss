[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/VunfKDX8)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=17824356&assignment_repo_type=AssignmentRepo)
# Bulls and Cows Game Project
## Description
The **Bulls and Cows Game** Project is an interactive number and character-based guessing game. Players attempt to deduce a secret sequence based on feedback after each guess. The game supports both number-based and character-based modes and offers multiple difficulty levels. It also tracks player scores and maintains a persistent leaderboard to encourage competition.

This project demonstrates a structured, object-oriented approach to game development, implementing solid architecture, design patterns, and data persistence for an engaging experience.

## Features
- Dual Game Modes: Players can choose between number-based or character-based guessing.
- Multiple Difficulty Levels: Supports 3, 4, and 5-length sequences.
- Real-Time Feedback: Players receive Bulls (correct character in the correct position) and Cows (correct character in the wrong position).
- Persistent Leaderboard: Scores are stored across sessions using JSON file storage.
- Interactive CLI: Players can enter guesses, view results, and restart the game.
- Error Handling: Ensures input validation and prevents invalid guesses.
- Object-Oriented Design: Implements abstraction, encapsulation, inheritance, and polymorphism for modular and scalable code.
- Design Patterns: Uses Singleton (Leaderboard), Factory (GameManager), and Builder (Guess Construction) for maintainability.


## How It Works
1. Players enter their name and choose a game mode (numbers or characters).
2. They select a difficulty level (sequence length: 3, 4, or 5).
3. The game generates a random secret sequence.
4. The player enters guesses, receiving Bulls and Cows feedback after each attempt.
5. Once the correct sequence is guessed, the game updates the leaderboard and prompts the player to play again.
6. The leaderboard is displayed, showcasing the top players based on performance.

## Architecture Overview
- GameManager: Handles game creation, player management, and leaderboard tracking.
- Game (Abstract Class): Defines the core game logic and rules.
- NumberGame & CharacterGame: Extend Game and implement generateSecretSequence() differently.
- Player: Represents a game participant with a name and tracking history.
- Guess: Stores a player's guess and its feedback.
- Leaderboard (Singleton): Maintains player scores across multiple game sessions using persistent storage.

## Technologies Used
- JavaScript (ES6 Modules)
- Node.js (CLI-based interaction)
- File System (fs) for JSON-based leaderboard storage
- Object-Oriented Programming Principles
- Design Patterns (Singleton, Factory, Builder)

## Future Enhancements
- Multiplayer Mode: Allow players to compete against each other.
- Timed Challenges: Introduce a countdown mode for increased difficulty.
- Hint System: Provide limited-use hints to players.
- Web Version: Expand into a browser-based game using a frontend framework.

## Features
- Supports text and multimodal prompts.
- Tracks essential metadata such as date, result, model, version, and type.
- Allows filtering, search, and iteration over stored prompts.
- Provides string representations of prompts for easy logging or debugging.
- Implements a flexible and extendable architecture.



## Instructions to Run

Please clone the repository and run

```bash
   git clone <repository-url>
   cd <repository-folder>
```

```bash
npm install
```

To run the basic example please run

```bash
npm start
```

To run the set of tests run

```bash
npm test
```

**As you can see in the source code the solutions are expected in the `solution` folder**

## GenAI Usage
Generative AI (ChatGPT) was used during the development of this project for assistance in the following areas:

### **What I Used**
- **Tool**: ChatGPT (GPT-4)
- **Prompts Given**:
  - See documents

### **Responses from GenAI**
Here are some key examples of how ChatGPT responded:
1. **Response..**:
   - See documents



