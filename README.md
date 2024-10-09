# Timer App
This is a simple timer application built with HTML, CSS, and JavaScript.

![Timer App Demo](https://i.ibb.co/z43DZzD/ezgif-com-video-to-gif-converter.gif)

## Project Structure

- **index.html**: The main HTML file that contains the structure of the web page.
- **styles.css**: The CSS file that styles the web page.
- **app.js**: The JavaScript file that contains the logic for the timer.

## Features

- Start, pause, and reset the timer.
- Displays minutes and seconds.
- Plays a sound when the timer reaches zero.

## Usage

1. Open `index.html` in your web browser.
2. Click the "Start" button to begin the timer.
3. Click the "Pause" button to pause the timer.
4. Click the "Reset" button to reset the timer to the initial state.

## Code Overview

### Timer Logic

The timer logic is implemented in [`app.js`](app.js). Here's a brief overview of the main functions:

- **Start Timer**: Starts the countdown and updates the display every second.
- **Pause Timer**: Pauses the countdown.
- **Reset Timer**: Resets the countdown to the initial state.

### Event Listeners

- **Start Button**: Starts the timer.
- **Pause Button**: Pauses the timer.
- **Reset Button**: Resets the timer.

### Example Code

```javascript
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
