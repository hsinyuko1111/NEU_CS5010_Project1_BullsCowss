# **Bulls and Cows Game: Business Requirements**

- [📄 View v1 Business Requirements](docs/cows_bulls_business_requirment.pdf)

- [📄 View UML Diagram](docs/cows_bulls_uml.pdf)

- [📄 View Mockup Interface](docs/cows_bulls_interface.pdf)

## **1️⃣ Project Overview**
The **Bulls and Cows Game** is a modern adaptation of the classic **code-breaking game**, allowing users to guess either **numbers or characters** in an interactive and engaging experience. The game provides **real-time feedback** on guesses and supports **customizable difficulty levels** to cater to both casual and competitive players.

---

## **2️⃣ Core Features**
✅ **Dual Mode Guessing:**  
- Players can **choose between** number-based (e.g., `"1234"`) and character-based (e.g., `"ABCD"`) sequences.  
- Case insensitivity is applied to character mode.  

✅ **Real-Time Feedback:**  
- Players receive **Bulls** (correct character in the correct position) and **Cows** (correct character in the wrong position).  

✅ **Customizable Difficulty Levels:**  
- Players can select a **sequence length** of **3, 4, or 5 characters/numbers**.  

✅ **Leaderboard System (Persistent):**  
- The **leaderboard stores player scores permanently** using **JSON file storage**, even after restarting the game.  
- Scores are tracked based on **game type and difficulty level**.  

✅ **CLI-Based User Interaction:**  
- Players enter guesses through the **command line**, receive feedback, and can choose to play again.  

✅ **Error Handling:**  
- Ensures **input validation** to prevent invalid guesses (e.g., wrong sequence length).  

---

## **3️⃣ Target Audience**
- 🎮 **Casual Gamers** – Looking for a fun and logical challenge.  
- 🏆 **Competitive Players** – Interested in ranking high on the leaderboard.  
- 📚 **Educators** – Can use the game to teach **logical reasoning** and **problem-solving skills**.  
- 🧩 **Puzzle Enthusiasts** – Enjoy solving challenges with deductive reasoning.  

---

## **4️⃣ Rules of the Game**
1. The game **randomly generates** a secret sequence based on the selected mode (numbers or characters).  
2. Players submit **guesses** and receive feedback in the form of **Bulls and Cows**:
   - **Bull**: Correct character **in the correct position**.  
   - **Cow**: Correct character **in the wrong position**.  
3. Players **continue guessing** until they correctly determine the full sequence.  
4. The leaderboard **tracks scores based on the number of attempts taken**.  

---

## **5️⃣ Challenge Questions**
🔹 **How can we ensure a balance between challenge and accessibility for different players?**  
🔹 **What mechanisms can be added to prevent brute-force guessing instead of logical deduction?**  
🔹 **How can we enhance engagement with additional game mechanics (e.g., time-based challenges, multiplayer mode)?**  

---

## **6️⃣ Key Concepts (Nouns & Verbs)**
### **🟣 Nouns (Game Objects)**
- **Game**  
- **Player**  
- **Sequence**  
- **Guess**  
- **Feedback**  
- **Leaderboard**  
- **Difficulty Level**  
- **Score**  
- **Attempts**  
- **Mode**  
- **Position**  
- **Challenge**  
- **Ranking**  

### **🟡 Verbs (Game Actions)**
- **Submit**  
- **Guess**  
- **Track**  
- **Choose**  
- **Determine**  
- **Continue**  
- **Generate**  
- **Validate**  
- **Provide**  
- **Prevent**  

---

## **7️⃣ Summary of Classes, Attributes, and Associations**
| **Class**        | **Attributes**                             | **Associations** |
|-----------------|---------------------------------|----------------|
| **Game (Abstract)** | `mode`, `difficulty`, `leaderboard`, `player` | Manages `Player`, `Guess` |
| **NumberGame (Extends Game)** | Implements `generateSecretSequence()` | Inherits from `Game` |
| **CharacterGame (Extends Game)** | Implements `generateSecretSequence()` | Inherits from `Game` |
| **Player**      | `name`, `score`, `attempts` | Plays `Game` |
| **Guess**       | `input`, `bulls`, `cows`, `timestamp` | Created by `GuessBuilder` |
| **GuessBuilder** | `setGuess()`, `setBulls()`, `setCows()`, `build()` | Builds `Guess` objects |
| **Feedback**    | `bulls`, `cows` | Provided by `Game` |
| **Leaderboard (Singleton)** | `rankings` (Persistent JSON Storage) | Tracks `Players` |
| **GameManager (Factory Pattern)** | `startGame()`, `showLeaderboard()` | Manages `Game` |

---

## **8️⃣ User Personas & User Stories**
### **🎮 User Types**
Users can be classified into the following categories based on their engagement and competitive playstyle:

- **Casual Player** – Plays for fun without focusing on rankings.
- **Competitive Player** – Aims to improve ranking and minimize attempts.
- **Social Competitor** – Compares performance with others to find rivals.
- **Unregistered Player** – Can play but does not have a tracked leaderboard score.

---

### **📌 Dimensions of Player Classification**
| **Dimension** | **Categories** |
|--------------|---------------|
| **Game Mode Preference** | Numbers vs. Characters |
| **Engagement Level** | Casual vs. Competitive |
| **Leaderboard Interaction** | Passive (Plays for fun) vs. Active (Tracks ranking) |
| **Social Play** | Independent (Self-improvement) vs. Competitive (Compares with others) |

---

### **📌 Key Classification Dimensions**
| **Dimension** | **Definition** |
|--------------|------------------|
| **Dimension 1: Competitive vs. Casual** | Some players focus on **improving ranks**, others play for fun. |
| **Dimension 2: Leaderboard Engagement** | Some **actively track stats**, others play without focusing on ranks. |

---

### **📌 4 User Types Based on Key Dimensions**
| **Player Type** | **Competitive** | **Leaderboard Focus** | **Description** |
|---------------|---------------|------------------|-----------------|
| **Ranked Competitor** 🏆 | ✅ Yes | ✅ Active | Tries to climb the leaderboard and optimize guesses. |
| **Social Competitor** 👥 | ✅ Yes | ❌ Passive | Compares performance with others but doesn’t chase rank. |
| **Casual Player** 🎮 | ❌ No | ✅ Active | Plays for fun but occasionally checks ranking. |
| **Relaxed Solver** ☕ | ❌ No | ❌ Passive | Plays purely for fun, no competitive interest. |

---

### **🎮 Emma, the Casual Solver**
- **Age:** 25  
- **Background:** Works as a teacher, enjoys light mental challenges to relax.  
- **Engagement Level:** Low – Plays occasionally.  
- **Game Mode Preference:** Characters – Finds letter-based sequences more fun.  
- **Pain Points:**  
  - Prefers a **simple UI** without distractions.  
  - Doesn't like overly difficult challenges.  
- **Key Features Needed:**  
  - **Quick-play mode**  
  - **Instant feedback**  
- **Story Points:**  
  - `"As a casual gamer, I want to play a quick round of Bulls and Cows so that I can relax."`  
  - `"As a casual gamer, I want instant feedback on my guesses to improve my strategy."`  
  - `"As a casual gamer, I want the option to adjust difficulty settings before starting a game so that I can choose a comfortable challenge level."`

---

### **🏆 James, the Competitive Thinker**
- **Age:** 30  
- **Background:** Software engineer, enjoys strategy games.  
- **Engagement Level:** High – Plays regularly to improve skills.  
- **Game Mode Preference:** Numbers – Prefers analytical challenges.  
- **Pain Points:**  
  - Wants **detailed statistics** on past performance.  
  - Needs a **well-structured leaderboard**.  
- **Key Features Needed:**  
  - **Leaderboard tracking**  
  - **Game statistics**  
  - **Competitive ranking system**  
- **Story Points:**  
  - `"As a competitive player, I want a leaderboard to compare my performance."`  
  - `"As a competitive player, I want a difficulty-based ranking to improve my problem-solving speed."`  
  - `"As a competitive player, I want to review my past game history so that I can analyze my performance and refine my strategy."`

---

### **🔢 Oliver, the Social Competitor**
- **Age:** 27  
- **Background:** Works as a data analyst, enjoys strategy and competition.  
- **Engagement Level:** Medium – Plays regularly but focuses on **social competition**.  
- **Game Mode Preference:** Numbers – Prefers analyzing patterns in numerical sequences.  
- **Competitive Play Level:** High – Wants to **compare** his performance with other players.  
- **Pain Points:**  
  - Feels **disconnected from other players** without a ranking system.  
  - Finds it hard to **identify players of similar skill levels** to challenge.  
  - Wants **more insights** on how he ranks compared to friends.  
- **🔹 Key Features Needed:**  
  - **Leaderboard Comparison** 
  - **Player Stats Tracking**  
  - **Suggested Competitors** 
- **📖 Story Points:**  
  - `"As a competitive player, I want to be able to compare my performance with others so that I can know who to play with to improve myself."`  
  - `"As a competitive player, I want to see statistics on other players so that I can find fair opponents."`  
  - `"As a social gamer, I want to be able to track my rank over time so that I can measure my progress."`  


## **9️⃣ UML Associations & Relationships**

| **Relationship Type** | **Description** |
|---------------------|----------------|
| **Associations** | **Player submits Guess** → A Player makes multiple Guess objects. |
|                 | **Game provides Feedback** → Game calculates bulls & cows for Guess. |
|                 | **GameManager creates Player** → GameManager is responsible for player creation. |
|                 | **GameManager starts and tracks multiple Games** → GameManager manages multiple Game instances. |
| **Aggregation** | **GameManager manages Leaderboard** → Leaderboard exists separately but is managed by GameManager. |
|                | **Game contains multiple Guesses** → Guess objects exist independently but are tracked by Game. |
|                | **Leaderboard tracks multiple Players** → Leaderboard maintains Player rankings. |
| **Composition** | **Game owns Player** → Player is directly tied to a Game, and they exist together. |
| **Generalization** | **Different game modes inherit from Game** → `NumberGame` and `CharacterGame` extend `Game`. |

- [📄 View UML Diagram](docs/cows_bulls_uml.pdf)

## **🔟  Mockup Interface**


- [📄 View Mockup Interface](docs/cows_bulls_interface.pdf)

---

## ** ✨ AI Usage in This Project**
Throughout this project, AI tools like **ChatGPT 4o** were used to:
### 1️⃣ Refining Business Requirements
**📌 Prompts Used:**
* "Help me refine this business requirement file based on the changes I have made."
* "How do I link a file in my markdown file?"
* "Can you help me list prompts I used and section I put the answer?"

**📌 Where the Answer Was Placed:**
- ✅ **Section: Business Requirements (Updated Document)**
- ✅ **Section: Markdown File Formatting (Business Documentation in `README.md`)**

### 2️⃣ Object-Oriented Programming (OOP) Design
**📌 Prompts Used:**
* "Provide at least one example in your code of the application of each one of the OOP pillars (Abstraction, Encapsulation, Inheritance, and Polymorphism)."
* "Show at least one example of your code demonstrating each one of the SOLID principles."

**📌 Where the Answer Was Placed:**
- ✅ **Section: OOP Implementation (Abstraction, Encapsulation, Inheritance, Polymorphism)**
- ✅ **Section: SOLID Principles Breakdown**

### 3️⃣ Design Patterns Implementation
**📌 Prompts Used:**
* "Provide at least three examples of application of design patterns in your code (e.g., Singleton, Builder, Factory, etc.)."
* "Where should I apply the Builder pattern in my code?"

**📌 Where the Answer Was Placed:**
- ✅ **Section: Design Patterns (Singleton, Builder, Factory)**
- ✅ **Section: `GuessBuilder.js` Implementation**

### 4️⃣ Debugging and Code Readability
**📌 Prompts Used:**
* "Why does my leaderboard reset every time I restart the game?"
* "Why does my processGuess() always say 'Invalid guess'?"
* "Can you simplify this function for me?"

**📌 Where the Answer Was Placed:**
- ✅ **Section: Debugging and Fixing `Leaderboard.js` (Persistent JSON Storage)**
- ✅ **Section: Optimized Code Refactoring (Simplifying `updateScore()`)**

### 5️⃣ User Personas & Gameplay Enhancements
**📌 Prompts Used:**
* "Can you add another story persona based on this user story?"
* "Help me add two more story points for these people."
* "Can you add dimensions like this example?"

**📌 Where the Answer Was Placed:**
- ✅ **Section: User Personas (Emma, James, and Oliver)**
- ✅ **Section: User Classification & Dimensions**

### 6️⃣ Markdown Formatting & Documentation
**📌 Prompts Used:**
* "How do I link the file in my Markdown file?"
* "Can you convert this into Markdown format?"

**📌 Where the Answer Was Placed:**
- ✅ **Section: Markdown-Formatted Business Requirements (`business_requirements.md`)**
- ✅ **Section: Proper Markdown Linking and File References**

### 📌 Final AI Usage Summary
AI tools like **ChatGPT 4o** were used extensively in:
- ✅ **Refining Business Requirements**
- ✅ **Improving OOP Design and SOLID Principles Implementation**
- ✅ **Suggesting and Applying Design Patterns (Singleton, Factory, Builder)**
- ✅ **Debugging Code (Leaderboard Persistence, Guess Validation, Function Optimization)**
- ✅ **Enhancing User Personas and Gameplay Flow**
- ✅ **Structuring and Formatting Documentation in Markdown**

While AI-assisted, **final decisions, code reviews, and modifications were done manually** to ensure accuracy and best practices. 

🚀 **Conclusion:** AI was an essential tool in optimizing this project but did not replace the need for logical reasoning and manual adjustments.

