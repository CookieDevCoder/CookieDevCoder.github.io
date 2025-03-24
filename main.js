// Keypresses 
var currentInput = "";

const terminalDir = "BrianAyala@portfolio:~$"
var CMDOutput = document.getElementById("output");

document.addEventListener('keydown', function(event) {
    console.log('Key pressed:', event.key);
    if (event.key === " ") {
        console.log('Key Space pressed*');
    }
    var CMDLine = document.getElementById("cmdline");

    if (event.key === "Enter") {
        // Write input to CMDOutput
        var CMDOutput = document.getElementById("output");
        CMDOutput.innerText += terminalDir + currentInput + '\n';
        currentInput = "";

        window.scrollTo(0, document.body.scrollHeight)
    }
    else if (event.key === "Backspace") {
        // Delete last character
        currentInput = currentInput.slice(0, -1);
    }
    else if (event.key.length <= 1) {
        currentInput += event.key;
    }
    CMDLine.textContent = terminalDir + currentInput; 
    CMDLine.style.width = (terminalDir + currentInput).length + "ch"
  });