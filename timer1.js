const { exec } = require('child_process');

const beep = () => {
  exec("[console]::beep(1000, 500)", { shell: 'powershell.exe' });
};

const alarm = (times) => {

  if (!Array.isArray(times)) {
    times = [times]; // This line convert a single number to an array
  }

  times.sort((a, b) => a - b); //This line sorts the numbers from smallest to largest

  times.forEach((time) => { //This line checks each item of time to check if it is a number
    if (typeof time !== 'number') {
      console.log(`Not a number`);
      return;
    }

    setTimeout(() => {//This line sets the timeout depending on the time selected multiplied by 1000
      beep();
    }, time * 1000);
  });
};

alarm()