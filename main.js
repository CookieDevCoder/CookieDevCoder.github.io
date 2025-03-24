// Keypresses 
currentInput = '';

terminalLoc = "BrianAyala@portfolio:~$"
const CMDLine = document.getElementById("CommandLine");

document.addEventListener('keydown', function(event) {
    // The 'event' object contains information about the key press
    console.log('Key pressed:', event.key);

    currentInput += event.key;

    //CMDLine.textContent = terminalLoc + " " + currentInput; 
  });