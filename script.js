const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Check if dark mode is enabled from localStorage
    if (localStorage.getItem('theme') === 'dark') {
      body.classList.add('dark-mode');
      themeToggleButton.textContent = '🌞'; // Sun icon for dark mode
    }

    // Add event listener for theme toggle
    themeToggleButton.addEventListener('click', () => {
      body.classList.toggle('dark-mode');

      if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeToggleButton.textContent = '🌞'; // Sun icon for dark mode
      } else {
        localStorage.setItem('theme', 'light');
        themeToggleButton.textContent = '🌙'; // Moon icon for light mode
      }
    });

    // Fade-in effect on scroll
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const appearOnScroll = new IntersectionObserver(function (entries, observer) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, appearOptions);

    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
