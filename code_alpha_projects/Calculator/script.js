// Append numbers and operators to display
function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

// Clear the display
function clearDisplay() {
  document.getElementById('display').value = '';
}

// Calculate the result
function calculateResult() {
  const display = document.getElementById('display');
  try {
    display.value = eval(display.value); // Use eval carefully for basic math
  } catch {
    display.value = 'Error';
  }
}

// Handle keyboard inputs
document.addEventListener('keydown', function (event) {
  const key = event.key;
  const display = document.getElementById('display');
  
  // Handle numbers and operators
  if (!isNaN(key) || ['+', '-', '*', '/'].includes(key)) {
    appendToDisplay(key);
  }

  // Handle Enter key for calculation
  if (key === 'Enter') {
    calculateResult();
  }

  // Handle Backspace key for deleting last character
  if (key === 'Backspace') {
    display.value = display.value.slice(0, -1);
  }

  // Handle 'C' or 'c' for clearing the display
  if (key === 'c' || key === 'C') {
    clearDisplay();
  }

  // Handle Esc key for clearing the display
  if (key === 'Escape') {
    clearDisplay();
  }
});
