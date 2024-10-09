const bells = new Audio('./sounds/bell.wav'); 
const startBtn = document.querySelector('.btn-start'); 
const pauseBtn = document.querySelector('.btn-pause');
const resetBtn = document.querySelector('.btn-restart');
const session = document.querySelector('.minutes'); 
let myInterval; 
let state = true;

const appTimer = () => {
    const sessionAmount = Number.parseInt(session.textContent);
  
    if(state) {
      state = false;

      if (!totalSeconds) {
        totalSeconds = sessionAmount * 60; // Initialize totalSeconds if not already set
      }
  
      const updateSeconds = () => {
        const minuteDiv = document.querySelector('.minutes');
        const secondDiv = document.querySelector('.seconds');

        totalSeconds--;

        let minutesLeft = Math.floor(totalSeconds/60);
        let secondsLeft = totalSeconds % 60;

        if(secondsLeft < 10) {
            secondDiv.textContent = '0' + secondsLeft;
        } else {
            secondDiv.textContent = secondsLeft;
        }
        minuteDiv.textContent = `${minutesLeft}`

        if(minutesLeft === 0 && secondsLeft === 0) {
            bells.play()
            clearInterval(myInterval);
            state = true; // Reset state when timer ends
            totalSeconds = null; // Reset totalSeconds when timer ends

        }
      };
      myInterval = setInterval(updateSeconds, 1000);
    } else {
      alert('Session has already started.')
    }
  };

startBtn.addEventListener('click', appTimer);

pauseBtn.addEventListener('click', () => {
    clearInterval(myInterval);
    state = true;
});

resetBtn.addEventListener('click', () => {
  clearInterval(myInterval);
  state = true;
  totalSeconds = null; // Reset totalSeconds
  const minuteDiv = document.querySelector('.minutes');
  const secondDiv = document.querySelector('.seconds');
  minuteDiv.textContent = '25'; 
  secondDiv.textContent = '00';
});