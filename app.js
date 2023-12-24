const boxes = document.querySelectorAll(".box");
const newGame = document.querySelector(".new_game");
const winner = document.querySelector(".winner");
let turn = true; // true == X

const pattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

newGame.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerHTML = "";
    });
    winner.innerHTML = "";
});

const pauseGame = () => {
    boxes.forEach((box) => {
        box.setAttribute("disabled", true);
    });
};

const winnerIs = () => {
    if (true) {
        winner.innerHTML = "Winner is X!!!";
    } else {
        winner.innerHTML = "Winner is O!!!";
    }
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn) {
            box.innerHTML = "X";
            turn = false;
            box.setAttribute("disabled", true);
            showWinner();
        } else {
            box.innerHTML = "O";
            turn = true;
            box.setAttribute("disabled", true);
            showWinner();
        }
    });
});

const showWinner = () => {
    for (const win of pattern) {
        // console.log(boxes[win[0]], boxes[win[1]], boxes[win[2]]);
        let ptn0 = boxes[win[0]].innerText;
        let ptn1 = boxes[win[1]].innerText;
        let ptn2 = boxes[win[2]].innerText;

        if (ptn0 != "" && ptn1 != "" && ptn2 != "") {
            if (ptn0 == ptn1 && ptn1 == ptn2) {
                pauseGame();
                winnerIs();
            }
        }
    }
};
