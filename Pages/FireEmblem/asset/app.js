document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('grid');
    const gridSize = 8; // Taille de la grille (8x8)
  
    // Création de la grille de cases
    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.addEventListener('click', () => handleCellClick(row, col));
        grid.appendChild(cell);
      }
    }
  
    // Gestion du clic sur une case
    function handleCellClick(row, col) {
      const selectedCell = document.querySelector('.selected');
      if (selectedCell) {
        selectedCell.classList.remove('selected');
      }
  
      const clickedCell = document.querySelector(`.cell:nth-child(${row * gridSize + col + 1})`);
      clickedCell.classList.add('selected');
    }
  });