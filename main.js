// Keypresses 
var currentInput = "";

const terminalDir = "BrianAyala@portfolio:~$"

document.addEventListener('keydown', function(event) {
    console.log('Key pressed:', event.key);
    var CMDLine = document.getElementById("cmdline");

    if (event.key === "Enter") {
        // Write input to CMDOutput
        var CMDOutput = document.getElementById("output");
        CMDOutput.innerText += terminalDir + currentInput + '\n';
        currentInput = "";

        // scroll to bottom on enter
        window.scrollTo(0, document.body.scrollHeight)
    }
    else if (event.key === "Backspace") {
        // Delete last character
        currentInput = currentInput.slice(0, -1);
    }
    else if (event.key.length <= 1) {
        // Only accepts char inputs (excluding esc, alt, ctrl, ect.s)
        currentInput += event.key;
    }
    // Update Command Line text
    CMDLine.textContent = terminalDir + currentInput; 
    CMDLine.style.width = (terminalDir + currentInput).length + "ch"
  });