  // Typewriter effect function
  function typeWriter(elementId, text, speed, pause) {
    let i = 0;
    let element = document.getElementById(elementId);
    element.innerHTML = "";  // Clear the content initially

    // Function to type one character at a time
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        // After typing is done, wait for 'pause' time before erasing
        setTimeout(erase, pause);
      }
    }

    // Function to erase the text one character at a time
    function erase() {
      if (i > 0) {
        element.innerHTML = text.substring(0, i - 1);
        i--;
        setTimeout(erase, speed);
      } else {
        // Once erasing is done, start typing again
        setTimeout(type, pause);
      }
    }

    // Start the typing effect
    type();
  }

  // Call the typewriter effect when the page loads
  window.onload = function() {
    typeWriter("typewriter", "Welcome to Website My Name is Robe Kyle P. Salangad", 50, 1000); // Speed 150ms, pause 1000ms before erasing
  };
