
    // Identify and process custom HTML tags
    document.addEventListener('DOMContentLoaded', function () {
      const quoteContainer = document.querySelector('.quote-container');
      const quoteElements = quoteContainer.querySelectorAll('quote');

      let currentQuoteIndex = 0;
      const speed = parseInt(quoteContainer.getAttribute('speed')) || 5000;

      function showNextQuote() {
        // Hide the current quote
        if (quoteElements[currentQuoteIndex]) {
          quoteElements[currentQuoteIndex].style.display = 'none';
        }

        // Move to the next quote
        currentQuoteIndex = (currentQuoteIndex + 1) % quoteElements.length;

        // Show the next quote
        if (quoteElements[currentQuoteIndex]) {
          quoteElements[currentQuoteIndex].style.display = 'block';
        }
      }

      // Initial display
      showNextQuote();

      // Automatically change quotes based on the specified speed
      setInterval(showNextQuote, speed);
    });
  
