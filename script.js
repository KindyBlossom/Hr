window.onload = function() {
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        const target = document.querySelector(event.target.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
      });
    });
  };
  