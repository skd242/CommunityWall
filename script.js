// Function to create a new submission and position it randomly on the screen
function createSubmission(text) {
  // Create the submission element
  const submission = document.createElement("div");
  submission.classList.add("submission");
  submission.textContent = text;

  // Randomize the position within the viewport
  const randomX = Math.floor(Math.random() * window.innerWidth);
  const randomY = Math.floor(Math.random() * window.innerHeight);
  submission.style.left = `${randomX}px`;
  submission.style.top = `${randomY}px`;

  // Randomize opacity between 0.5 and 1
  const randomOpacity = Math.random() * (1 - 0.5) + 0.5;
  submission.style.opacity = randomOpacity;

  // Randomize z-index for layering
  const randomZIndex = Math.floor(Math.random() * 10) + 1;
  submission.style.zIndex = randomZIndex;

  // Append the new submission to the body
  document.body.appendChild(submission);
  
  // Optionally add the float animation for movement
  submission.style.animation = "float 10s infinite alternate ease-in-out";
}

// Example of creating submissions on load
createSubmission("What did you eat for breakfast?");
createSubmission("Did you take a walk today?");
createSubmission("What was the weather like outside?");
createSubmission("Have you seen the sunset recently?");
createSubmission("What song did you listen to this morning?");
createSubmission("Do you remember your dream last night?");
createSubmission("What color is the sky right now?");
createSubmission("How many steps did you walk today?");
createSubmission("What's the most random thing you thought about today?");
createSubmission("What does your workspace look like?");
