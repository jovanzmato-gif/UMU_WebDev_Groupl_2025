// Smooth scroll for floating button
document.querySelector('.floating-btn').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#contactForm').scrollIntoView({ behavior: 'smooth' });
});

// Form submission handler
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let messageBox = document.getElementById("message");

  // Animated message
  messageBox.style.color = "green";
  messageBox.style.opacity = 0;
  messageBox.textContent = "Thank you " + name + "! 🎉 Your story has been received.";

  // Smooth fade-in effect
  let opacity = 0;
  let timer = setInterval(function () {
    if (opacity >= 1) clearInterval(timer);
    opacity += 0.05;
    messageBox.style.opacity = opacity;
  }, 30);

  // Reset form
  document.getElementById("contactForm").reset();
});