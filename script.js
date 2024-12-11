// Function to create a new submission and position it randomly on the screen
function createSubmission(text) {
  const submission = document.createElement("div");
  submission.classList.add("submission");
  submission.textContent = text;

  // Randomize the position within the viewport (with padding margins)
  const randomX = Math.floor(Math.random() * (window.innerWidth - 160)) + 80; // subtract 160 for left and right margins
  const randomY = Math.floor(Math.random() * window.innerHeight);
  submission.style.left = `${randomX}px`;
  submission.style.top = `${randomY}px`;

  // Append the new submission to the body
  document.body.appendChild(submission);
  
  // Optionally add the float animation for movement
  submission.style.animation = "float 10s infinite alternate ease-in-out";
}

// Function to get the current time and update the clock
function updateClock() {
  const now = new Date();
  const age = new Date(0); // Earth's age since 0 (Jan 1, 1970)
  age.setUTCSeconds(now.getTime() / 1000); // Update with current timestamp

  const years = age.getUTCFullYear() - 1970; // Get the number of years
  const months = age.getUTCMonth();
  const days = age.getUTCDate();
  const hours = age.getUTCHours();
  const minutes = age.getUTCMinutes();
  const seconds = age.getUTCSeconds();

  const clockElement = document.getElementById("clock");
  clockElement.textContent = `${years}.${months + 1}.${days}.${hours}.${minutes}.${seconds}`;

  setTimeout(updateClock, 1000); // Update every second
}

// Handle form submission
const form = document.getElementById('submission-form');
const input = document.getElementById('user-input');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const inputValue = input.value.trim();
  
  // Only add the submission if there's text
  if (inputValue) {
    createSubmission(inputValue);
    input.value = ''; // Clear the input field after submission
  }
});

// Initialize the clock on page load
window.onload = function() {
  updateClock();
};
