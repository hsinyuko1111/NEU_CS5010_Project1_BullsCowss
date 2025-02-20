# 🏆 Bulls and Cows Game - OOP & Design Patterns Documentation

## Table of Contents
- [1. Object-Oriented Programming (OOP) Principles](#1️⃣-object-oriented-programming-oop-principles)
  - [1.1 Abstraction](#-11-abstraction)
  - [1.2 Encapsulation](#-12-encapsulation)
  - [1.3 Inheritance](#-13-inheritance)
  - [1.4 Polymorphism](#-14-polymorphism)
- [2. SOLID Principles](#2️⃣-solid-principles)
  - [2.1 Single Responsibility Principle (SRP)](#-21-single-responsibility-principle-srp)
  - [2.2 Open/Closed Principle (OCP)](#-22-openclosed-principle-ocp)
  - [2.3 Liskov Substitution Principle (LSP)](#-23-liskov-substitution-principle-lsp)
  - [2.4 Interface Segregation Principle (ISP)](#-24-interface-segregation-principle-isp)
  - [2.5 Dependency Inversion Principle (DIP)](#-25-dependency-inversion-principle-dip)
- [3. Design Patterns](#3️⃣-design-patterns)
  - [3.1 Singleton Pattern](#-31-singleton-pattern)
  - [3.2 Builder Pattern](#-32-builder-pattern)
  - [3.3 Factory Pattern](#-33-factory-pattern)
- [Conclusion](#-conclusion)

## 1️⃣ Object-Oriented Programming (OOP) Principles

This project demonstrates key **OOP pillars**: **Abstraction, Encapsulation, Inheritance, and Polymorphism**.

### ✅ 1.1 Abstraction

**📌 Definition:**  
Abstraction hides unnecessary details and only exposes **essential functionality**.

**🛠 Example in Code (Abstract `Game` Class)**  
The `Game` class provides a **common interface** for different game modes (`NumberGame`, `CharacterGame`), but does **not** define how sequences are generated.

```javascript
// game/Game.js
export default class Game {
    constructor(mode, difficulty, player) {
        if (this.constructor === Game) {
            throw new Error("Abstract class 'Game' cannot be instantiated.");
        }
        this.mode = mode;
        this.difficulty = difficulty;
        this.player = player;
    }

    generateSecretSequence() {
        throw new Error("Method 'generateSecretSequence()' must be implemented.");
    }
}
```

**🔴 Breaking Abstraction (Bad Example)**  
If we implemented `generateSecretSequence()` in Game, every child class would be forced to use the same method, removing flexibility.

### ✅ 1.2 Encapsulation

**📌 Definition:**  
Encapsulation hides internal state and only exposes necessary behaviors.

**🛠 Example in Code (Encapsulated Player Class)**  
The Player class ensures that player data (name) is private and accessed through a controlled method.

```javascript
// game/Player.js
export default class Player {
    #name;

    constructor(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }
}
```

**🔴 Breaking Encapsulation (Bad Example)**  
If we declared this.name as public, any part of the program could modify it without validation.

```javascript
player.name = ""; // ❌ Directly modifying player name
```

### ✅ 1.3 Inheritance

**📌 Definition:**  
Inheritance allows a child class to reuse properties and methods from a parent class.

**🛠 Example in Code (NumberGame and CharacterGame Extend Game)**

```javascript
// game/NumberGame.js
import Game from "./Game.js";

export default class NumberGame extends Game {
    constructor(difficulty, player) {
        super("Numbers", difficulty, player);
    }

    generateSecretSequence() {
        this.secretSequence = Math.random().toString().substr(2, this.difficulty);
    }
}
```

**🔴 Breaking Inheritance (Bad Example)**  
If we duplicated the `generateSecretSequence()` logic in NumberGame and CharacterGame instead of inheriting, code reuse would be lost.

### ✅ 1.4 Polymorphism

**📌 Definition:**  
Polymorphism allows methods in child classes to override parent methods while maintaining a common interface.

**🛠 Example in Code (Overriding generateSecretSequence() in CharacterGame)**

```javascript
// game/CharacterGame.js
import Game from "./Game.js";

export default class CharacterGame extends Game {
    static WORD_LIST = ["cat", "dog", "tree"];

    generateSecretSequence() {
        this.secretSequence = CharacterGame.WORD_LIST[
            Math.floor(Math.random() * CharacterGame.WORD_LIST.length)
        ];
    }
}
```

**🔴 Breaking Polymorphism (Bad Example)**  
If CharacterGame and NumberGame did not override `generateSecretSequence()`, they would both use the same method, breaking their unique functionality.

## 2️⃣ SOLID Principles

This project applies the SOLID principles for maintainability and scalability.

### ✅ 2.1 Single Responsibility Principle (SRP)

**📌 Definition:**  
A class should have only one reason to change.

**🛠 Example in Code (GameManager Handles Game Logic, Leaderboard Tracks Scores)**

```javascript
// game/GameManager.js
export default class GameManager {
    static startGame(gameType, difficulty, player) {
        return gameType === "numbers" ? new NumberGame(difficulty, player) : new CharacterGame(difficulty, player);
    }
}

// game/Leaderboard.js
export default class Leaderboard {
    updateScore(player, score) {
        this.rankings[player.name] = score;
    }
}
```

**🔴 Breaking SRP (Bad Example)**  
If we merged game logic and leaderboard tracking into one class, it would have multiple responsibilities.

### ✅ 2.2 Open/Closed Principle (OCP)

**📌 Definition:**  
Software should be open for extension but closed for modification.

**🛠 Example in Code (Game Can Be Extended Without Modifying It)**

We can add new game modes (HardcoreGame) without modifying Game.

### ✅ 2.3 Liskov Substitution Principle (LSP)

**📌 Definition:**  
Child classes should be able to replace parent classes without breaking the program.

**🛠 Example in Code (CharacterGame and NumberGame Behave Like Game)**

The program does not need to know if it's handling a NumberGame or CharacterGame.

### ✅ 2.4 Interface Segregation Principle (ISP)

**📌 Definition:**  
Interfaces should be specific, not force classes to implement unnecessary methods.

**🛠 Example in Code (Game Abstract Class Only Defines Necessary Methods)**

Game does not force all subclasses to implement irrelevant methods.

### ✅ 2.5 Dependency Inversion Principle (DIP)

**📌 Definition:**  
Classes should depend on abstractions rather than concrete implementations.

**🛠 Example in Code (GameManager Uses Game Instead of NumberGame)**

```javascript
// ✅ Uses abstraction
let game = GameManager.startGame("numbers", 4, player);
```

## 3️⃣ Design Patterns

### ✅ 3.1 Singleton Pattern

**🛠 Example in Code (Ensures One Leaderboard Instance)**

```javascript
// game/Leaderboard.js
export default class Leaderboard {
    static instance = null;

    constructor() {
        if (!Leaderboard.instance) {
            this.rankings = {};
            Leaderboard.instance = this;
        }
        return Leaderboard.instance;
    }
}
```

### ✅ 3.2 Builder Pattern

**🛠 Example in Code (Used for Creating Guess Objects)**

```javascript
// game/GuessBuilder.js
export default class GuessBuilder {
    setGuess(guess) { this.guess = guess; return this; }
    setBulls(bulls) { this.bulls = bulls; return this; }
    setCows(cows) { this.cows = cows; return this; }
    build() { return new Guess(this); }
}
```

### ✅ 3.3 Factory Pattern

**🛠 Example in Code (GameManager Creates Game Objects)**

```javascript
// game/GameManager.js
export default class GameManager {
    static startGame(gameType, difficulty, player) {
        return gameType === "numbers" ? new NumberGame(difficulty, player) : new CharacterGame(difficulty, player);
    }
}
```

## 🚀 Conclusion

This project follows OOP best practices, ensuring scalability, maintainability, and extensibility.
