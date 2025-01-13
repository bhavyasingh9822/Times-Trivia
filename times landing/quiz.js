const options = document.querySelectorAll('.option');
const scoreDisplay = document.getElementById('score');
const popup = document.getElementById('popup');
const scratchOverlay = document.getElementById('scratch-overlay');
let score = 0;
let correctAnswers = 0;
let isDragging = false;

options.forEach(option => {
  option.addEventListener('click', function() {
    const isCorrect = option.dataset.correct === "true";
    if (isCorrect) {
      option.classList.add('correct');
      score += 10;
      correctAnswers++;
    } else {
      option.classList.add('incorrect');
    }
    scoreDisplay.textContent = `Score: ${score}`;
    
    if (correctAnswers === 3) {
      popup.style.display = "block";
    }
  });
});

scratchOverlay.addEventListener('mousedown', function(event) {
  event.preventDefault();
  isDragging = true;
});

scratchOverlay.addEventListener('mouseup', function(event) {
  event.preventDefault();
  isDragging = false;
});

scratchOverlay.addEventListener('mousemove', function(event) {
  if (isDragging) {
    const rect = scratchOverlay.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    const revealRadius = 30;
    const ctx = scratchOverlay.getContext('2d');
    ctx.beginPath();
    ctx.arc(offsetX, offsetY, revealRadius, 0, Math.PI * 2);
    ctx.fill();
  }
});