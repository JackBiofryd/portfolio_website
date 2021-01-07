// Paragraph variable
let p = document.querySelector('.typewriter-text');
// Words to loop
let words = [' Developer  ', ' UI Designer  '];

console.log(words);

// Starting state is deleting word
let state = 'deleting';
// Array index of current word
let currentWord = 0;

// Start typewriter effect 2s after page load
setTimeout(startTypewriter, 2000);

// Function To Loop Typewriter Effect
function startTypewriter() {
    setInterval(typewriter, 220);
}

function typewriter() {
    // If paragraph is not empty
    if (p.innerHTML != '') {

        // If state is deleting (If we need to delete letters)
        if (state == 'deleting') {
            // Get current text
            let currentText = p.innerHTML;
            // Make next text
            let nextText = currentText.slice(0, -1);
            // Set next text to UI
            p.innerHTML = nextText;
        }

        if (state == 'adding') {
            // Get current text
            let currentText = p.innerHTML;
    
            // Get word to add from words array
            let wordToAdd = words[currentWord];

            // If whole word has been added, change state to deleting
            if (currentText.length == wordToAdd.length) {
                state = 'deleting';
            } else {
                // Find next letter of word to add
                let nextLetter = wordToAdd[currentText.length];
                // Add letter to current text
                let nextText = currentText + nextLetter;
                // Add next text to UI
                p.innerHTML = nextText;
            }
        }

    // If paragraph is empty 
    } else {
        // Change state to adding letters
        state = 'adding';

        // Change Current Word
        currentWord++;
        if (currentWord == words.length) {
            currentWord = 0;
        }

        // Add First Letter Of Word
        p.innerHTML = words[currentWord][0]; 
    }
}