// Script to handle environment selection and start game button activation
const environmentButtons = document.querySelectorAll('.environment-button');
const startGameButton = document.getElementById('start-game-button');
let selectedEnvironment = null;

// Iterate over each environment button to add click event
environmentButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        environmentButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to the selected button
        button.classList.add('active');
        
        // Set selected environment
        selectedEnvironment = button.getAttribute('data-environment');
        
        // Enable start game button
        startGameButton.disabled = false;
    });
});

startGameButton.addEventListener('click', () => {
    if (selectedEnvironment) {
        // Hide start screen and show game screen
        document.getElementById('start-screen').style.display = 'none';
        document.getElementById('game-screen').style.display = 'flex';
        
        // Customize game screen based on the selected environment
        setupGameEnvironment(selectedEnvironment);
    }
});

function setupGameEnvironment(environment) {
    const gameScreen = document.getElementById('game-screen');
    const playerCharacter = document.getElementById('player-character');

    if (environment === 'الأدغال') {
        gameScreen.style.backgroundImage = "url('https://i.ibb.co/zRy2GtC/jungle-background.jpg')";
        playerCharacter.src = 'https://i.ibb.co/58Db9dj/character.png';
    } else if (environment === 'المحيط') {
        gameScreen.style.backgroundImage = "url('https://i.ibb.co/z292cRf/ocean-background.jpg')";
        playerCharacter.src = 'https://i.ibb.co/MkTDQ1Z/character-ocean.png';
    } else if (environment === 'الصحراء') {
        gameScreen.style.backgroundImage = "url('https://i.ibb.co/7QBZ8DY/desert-background.jpg')";
        playerCharacter.src = 'https://i.ibb.co/hYknGVp/character-desert.png';
    }
}

// تحكم بالحركة الأساسية للشخصية
document.addEventListener('keydown', (event) => {
    const playerCharacter = document.getElementById('player-character');
    const step = 10;  // مقدار الحركة في كل ضغطة زر

    let left = parseInt(window.getComputedStyle(playerCharacter).left);
    let bottom = parseInt(window.getComputedStyle(playerCharacter).bottom);

    switch (event.key) {
        case 'ArrowLeft':
            if (left > 0) {
                playerCharacter.style.left = `${left - step}px`;
            }
            break;
        case 'ArrowRight':
            if (left < window.innerWidth - playerCharacter.clientWidth) {
                playerCharacter.style.left = `${left + step}px`;
            }
            break;
        case 'ArrowUp':
            if (bottom < window.innerHeight - playerCharacter.clientHeight) {
                playerCharacter.style.bottom = `${bottom + step}px`;
            }
            break;
        case 'ArrowDown':
            if (bottom > 0) {
                playerCharacter.style.bottom = `${bottom - step}px`;
            }
            break;
    }
});