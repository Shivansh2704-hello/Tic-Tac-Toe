// let buttons=document.querySelectorAll("button");
// let currentPlayer="X";
// currentPlayer=currentPlayer ==="X"? "O":"X";

//     buttons.addEventListener('Click',function()){
        
//     }
let buttons = document.querySelectorAll(".box button");
let currentPlayer = "X";
let msgBox = document.querySelector(".msg");
let gameOver = false;

// Define all possible winning combinations
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

// Add click event to each cell
buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        if (button.textContent === "" && !gameOver) {
            button.textContent = currentPlayer;
            button.style.color = currentPlayer === "X" ? "orange" : "blue";
            checkWin();
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    });
});

// Check for winner or draw
function checkWin() {
    for (let pattern of winPatterns) {
        let [a, b, c] = pattern;
        let val1 = buttons[a].textContent;
        let val2 = buttons[b].textContent;
        let val3 = buttons[c].textContent;

        if (val1 !== "" && val1 === val2 && val2 === val3) {
            msgBox.textContent = `${val1} wins! 🎉`;
            gameOver = true;
            return;
        }
    }

    // Check for draw
    let isDraw = [...buttons].every((btn) => btn.textContent !== "");
    if (isDraw && !gameOver) {
        msgBox.textContent = "It's a draw 😐";
        gameOver = true;
    }
}

// Reset Function
const resetBtn = document.getElementById("resetBtn");
if (resetBtn) {
    resetBtn.addEventListener("click", () => {
        buttons.forEach((btn) => {
            btn.textContent = "";
            btn.style.color = "orange";
        });
        currentPlayer = "X";
        msgBox.textContent = "";
        gameOver = false;
    });
}
