const textArea = document.getElementById('message');
const charCounter = document.getElementById('char-counter');
const warningMsg = document.getElementById('warning-msg');
const maxChars = 200;

textArea.addEventListener('input', function() {
    const currentLength = textArea.value.length;
    
    // Update character counter
    charCounter.textContent = `${currentLength}/${maxChars} characters`;

    // Check if the user exceeds the character limit
    if (currentLength > maxChars) {
        warningMsg.style.display = 'block';  // Show warning message
    } else {
        warningMsg.style.display = 'none';  // Hide warning message
    }
});




