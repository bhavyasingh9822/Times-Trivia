document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.querySelector('button[data-testid="play"]');
    const howToPlayButton = document.querySelector('button[data-testid="how-to-play"]');

    playButton.addEventListener('click', function() {
        alert('Starting the game...');
        // Logic to start the game can be added here
    });

    howToPlayButton.addEventListener('click', function() {
        alert('How to play: Get 6 chances to guess a 5-letter word.');
        // Logic to show how to play instructions can be added here
    });
});
