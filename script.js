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
function createSubmission(text) {
  // Create the submission element
  const submission = document.createElement("div");
  submission.classList.add("submission");
  submission.textContent = text;
  
  // Set random position within the viewport
  const randomX = Math.floor(Math.random() * window.innerWidth);
  const randomY = Math.floor(Math.random() * window.innerHeight);
  submission.style.left = `${randomX}px`;
  submission.style.top = `${randomY}px`;

  // Append to the body or container
  document.body.appendChild(submission);

  // Optionally add the float animation after insertion
  submission.style.animation = "float 10s infinite alternate ease-in-out";
}
function createSubmission(text) {
  const submission = document.createElement("div");
  submission.classList.add("submission");
  submission.textContent = text;

  const randomX = Math.floor(Math.random() * window.innerWidth);
  const randomY = Math.floor(Math.random() * window.innerHeight);
  submission.style.left = `${randomX}px`;
  submission.style.top = `${randomY}px`;

  // Random opacity between 0.5 and 1
  const randomOpacity = Math.random() * (1 - 0.5) + 0.5;
  submission.style.opacity = randomOpacity;

  // Random z-index to float over others
  const randomZIndex = Math.floor(Math.random() * 10) + 1; // Random z-index from 1 to 10
  submission.style.zIndex = randomZIndex;

  document.body.appendChild(submission);

  // Animation and position for movement
  submission.style.animation = "float 10s infinite alternate ease-in-out";
}
