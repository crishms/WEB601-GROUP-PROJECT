// Updated scripts for Tiny Turtles Swim School

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // Toggle the navigation menu when the hamburger icon is clicked
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('open');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('open');
        });
    });

    // Smooth scrolling for menu links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('open');
        }
    });

    // Ensure hamburger menu stays open when toggled
    const toggleMenu = () => {
        if (navMenu.classList.contains('active')) {
            navMenu.style.display = 'block';
        } else {
            navMenu.style.display = 'none';
        }
    };

    hamburger.addEventListener('click', toggleMenu);
});
