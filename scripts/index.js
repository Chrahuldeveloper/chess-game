let selectedSquare = null;
const board = document.querySelector('.grid');

board.addEventListener('click', (e) => {
    const square = e.target.closest('[class*="light-square"], [class*="dark-square"]');
    if (!square) return;
    handleClick(square);
});

function handleClick(square) {
    const piece = square.textContent.trim();
    const whitePieces = ['♙', '♖', '♘', '♗', '♕', '♔'];

    if (!selectedSquare) {
        if (!piece || !whitePieces.includes(piece)) return;

        selectedSquare = square;
        square.style.outline = '4px solid yellow';
        square.style.outlineOffset = '-4px';

    } else {
        if (selectedSquare === square) {
            clearSelection();
            return;
        }

        square.textContent = selectedSquare.textContent;
        selectedSquare.textContent = '';

        clearSelection();
    }
}

function clearSelection() {
    if (selectedSquare) {
        selectedSquare.style.outline = '';
        selectedSquare.style.outlineOffset = '';
        selectedSquare = null;
    }
}