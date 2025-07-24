
// Get the display input element
const display = document.getElementById('display');

// Get all buttons
const buttons = document.querySelectorAll('button');

// Loop through each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      // Clear the display
      display.value = '';
    } else if (value === '=') {
      try {
        // Evaluate the expression
        display.value = eval(display.value);
      } catch (error) {
        display.value = 'Error';
      }
    } else {
      // Append the button value to the display
      display.value += value;
    }
  });
});
