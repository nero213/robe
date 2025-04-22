// Typewriter effect function
function typeWriter(elementId, text, speed, pause) {
  const phrases = [
    "Welcome to My Portfolio",
    "I'm Robe Kyle P. Salangad",
    "I Create Web Experiences",
    "Let's Build Something Amazing"
  ];
  
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let element = document.getElementById(elementId);
  
  function type() {
    // Current phrase
    const currentPhrase = phrases[phraseIndex];
    
    // If deleting, remove a character
    if (isDeleting) {
      element.innerHTML = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      // If typing, add a character
      element.innerHTML = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }
    
    // Type speed - faster when deleting
    let typeSpeed = isDeleting ? speed / 2 : speed;
    
    // If completed typing the current phrase
    if (!isDeleting && charIndex === currentPhrase.length) {
      // Pause at end of typing
      typeSpeed = pause;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      // Move to next phrase after complete deletion
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
    
    setTimeout(type, typeSpeed);
  }
  
  // Start typing
  type();
}

// Call the typewriter effect when the page loads
window.onload = function() {
  typeWriter("typewriter", "", 100, 2000); // Speed 100ms, pause 2000ms
};
