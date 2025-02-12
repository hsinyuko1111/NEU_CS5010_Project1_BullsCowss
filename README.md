# 🐂🐄 Bulls and Cows – NEU CS5010 OOP  

## 📌 Project Overview  
This project is an implementation of the classic **Bulls and Cows** game, developed as part of the **NEU CS5010 (Object-Oriented Programming)** course. The game is a code-breaking challenge where a player guesses a secret number, receiving feedback on the correctness of their guess.  

## 🎯 Game Rules  
- The secret number is a randomly generated sequence of **N unique digits**.  
- The player enters a guess, and the program provides feedback:  
  - **"Bull"** 🐂 → Correct digit in the correct position.  
  - **"Cow"** 🐄 → Correct digit but in the wrong position.  
- The goal is to guess the secret number with the fewest attempts.  
🏗️ Project Structure

📂 BullsandCows
│── 📜 README.md          # Project documentation
│── 📜 main.py            # Main game logic
│── 📜 game.py            # Bulls and Cows core functionality
│── 📜 tests.py           # Unit tests for game logic
│── 📜 requirements.txt   # Dependencies (if applicable)
└── 📂 assets/            # Any images or resources (if needed)

⚙️ Installation & Setup
1️⃣ Clone the Repository
```
git clone https://github.com/hsinyuko1111/NEU_CS5010_Project_BullsCows.git
cd NEU_CS5010_OOP_BullsandCows
```
2️⃣ Install Dependencies
```
npm install
```
3️⃣ Run the Game
```
node index.js
```
4️⃣ Run Tests 
```
npm test
```
🚀 Features

✅ Randomly generates a unique secret number.
✅ Provides accurate feedback on player guesses.
✅ Allows repeated gameplay with a simple interface.
✅ Includes unit tests for core game logic.

🛠️ Technologies Used
JavaScript (Node.js)
Object-Oriented Programming (OOP)
Jest (for Unit Testing)

🤝 Contributing
Feel free to fork the repo, open issues, or submit pull requests!

📜 License
This project is for educational purposes and follows an open-source license.
