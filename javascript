document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    // Toggle mobile navigation
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('toggle'); // For burger animation
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - (document.querySelector('header')?.offsetHeight || 0), // Adjust for fixed header
                    behavior: 'smooth'
                });

                // Close mobile nav after clicking a link
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    navToggle.classList.remove('toggle');
                }
            }
        });
    });

    // Add more interactive elements or animations here
});
