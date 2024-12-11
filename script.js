// Function to handle text submission
function submitText() {
  const userInput = document.getElementById('user-input').value;
  if (userInput.trim() === '') return; // Don't submit if the input is empty
  
  // Get current time in a simple format (e.g., seconds since 1970)
  const timestamp = new Date().toISOString().split('T')[1].split('.')[0];
  
  // Create a new text block to display
  const newText = document.createElement('div');
  newText.textContent = `[${timestamp}] ${userInput}`;
  
  // Add to the text wall
  const textWall = document.querySelector('.text-wall');
  textWall.appendChild(newText);
  
  // Clear the input field
  document.getElementById('user-input').value = '';
  
  // Scroll to the bottom of the text wall
  textWall.scrollTop = textWall.scrollHeight;
}
