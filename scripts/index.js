const board = document.getElementById("board");
let whiteChance = true
let blackChance = false

const pieces = [
    "♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜",
    "♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙",
    "♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"
];

for (let i = 0; i < 64; i++) {
    const square = document.createElement("div");
    const isDark = (Math.floor(i / 8) + i) % 2;

    square.dataset.index = i

    square.className = `
        ${isDark ? "dark-square" : "light-square"}
        relative flex items-center justify-center text-5xl
    `;

    if (pieces[i]) {
        const piece = document.createElement("span");
        piece.className = "piece-label";
        piece.textContent = pieces[i];
        square.appendChild(piece);
    }

    board.appendChild(square);
}


let selectedSquare = null;

function renderBoard() {
    board.innerHTML = "";

    for (let i = 0; i < 64; i++) {
        const square = document.createElement("div");
        const isDark = (Math.floor(i / 8) + i) % 2;

        square.dataset.index = i;

        square.className = `
            ${isDark ? "dark-square" : "light-square"}
            relative flex items-center justify-center text-5xl
        `;

        if (pieces[i]) {
            const piece = document.createElement("span");
            piece.className = "piece-label";
            piece.textContent = pieces[i];
            square.appendChild(piece);
        }

        board.appendChild(square);
    }
}


board.addEventListener("click", (e) => {
    const square = e.target.closest(".light-square, .dark-square");
    if (!square) return;

    const to = Number(square.dataset.index);

    if (selectedSquare === null) {

        console.log(selectedSquare)
        if (
            (square.textContent === "♙" && whiteChance) ||
            (square.textContent === "♟" && blackChance)
        ) {
            selectedSquare = square;
            square.classList.add("border-2", "border-green-500");
        }

        return;
    }

    const from = Number(selectedSquare.dataset.index);
    const piece = pieces[from];

    let direction = piece === "♙" ? -8 : 8;

    let validMove = (to === from + direction);

    if (!validMove) {
        console.log("❌ invalid move");
        selectedSquare.classList.remove("border-2", "border-green-500");
        selectedSquare = null;
        return;
    }

    if (pieces[to] !== "") {
        alert("place occipied")
        selectedSquare.classList.remove("border-2", "border-green-500");
        selectedSquare = null;
        return;
    }

    pieces[to] = pieces[from];
    pieces[from] = "";

    renderBoard();

    whiteChance = !whiteChance
    blackChance = !blackChance

    selectedSquare = null;

});