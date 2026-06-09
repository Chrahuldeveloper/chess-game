let selectedSquare = null;
const board = document.querySelector('.grid');

board.addEventListener('click', (e) => {
    const square = e.target.closest('[class*="light-square"], [class*="dark-square"]');
    console.log(square)
    if (!square) return;
    move(square)
});

const move = (square) => {
    const piece = square.textContent.trim();
    if (!selectedSquare) {
        selectedSquare = square;
        square.style.outline = '4px solid yellow';
        square.style.outlineOffset = '-4px';

    } else {
        square.textContent = selectedSquare.textContent;
        selectedSquare.textContent = '';
        clearSelection()
    }

}

function clearSelection() {
    if (selectedSquare) {
        selectedSquare.style.outline = '';
        selectedSquare.style.outlineOffset = '';
        selectedSquare = null;
    }
}