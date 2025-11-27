document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Sticky Navigation on Scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Scroll Reveal Animation using Intersection Observer
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, {
        root: null,
        threshold: 0.15 // Trigger when 15% of the element is visible
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // 4. Simple Form Validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // In a real scenario, you would send this data to a backend or email service
            alert('Thank you, Suriya! Your message has been sent (simulation).');
            contactForm.reset();
        });
    }

    // 5. Typing Effect for Hero Section
    const textElement = document.querySelector('.typing-text');
    const textToType = "AI & Data Science Specialist"; [cite_start]// [cite: 4]
    let index = 0;

    function typeEffect() {
        if (index < textToType.length) {
            textElement.innerHTML = textToType.substring(0, index + 1) + '<span style="color:var(--accent-color)">|</span>';
            index++;
            setTimeout(typeEffect, 100);
        } else {
             textElement.innerHTML = textToType; // Remove cursor at end
        }
    }
    
    // Start typing effect after a slight delay
    setTimeout(typeEffect, 500);
});
