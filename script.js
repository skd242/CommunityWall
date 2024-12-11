// Function to create a new submission and position it randomly on the screen
function createSubmission(text) {
  // Create the submission element
  const submission = document.createElement("div");
  submission.classList.add("submission");
  submission.textContent = text;

  // Randomize the position within the viewport (taking into account 80pt margins)
  const randomX = Math.floor(Math.random() * (window.innerWidth - 160)) + 80; // Subtract 160 for left and right margins
  const randomY = Math.floor(Math.random() * window.innerHeight);
  submission.style.left = `${randomX}px`;
  submission.style.top = `${randomY}px`;

  // Append the new submission to the body
  document.body.appendChild(submission);
  
  // Optionally add the float animation for movement
  submission.style.animation = "float 10s infinite alternate ease-in-out";
}

// Handle form submission
const form = document.getElementById('submission-form');
const input = document.getElementById('user-input');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent page reload
  const inputValue = input.value.trim();
  
  // Only add the submission if there's text
  if (inputValue) {
    createSubmission(inputValue);
    input.value = ''; // Clear the input field after submission
  }
});
