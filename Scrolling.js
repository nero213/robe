// 1. Handle navigation interactivity
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        // Prevent default behavior
        e.preventDefault();

        // Get the target section
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        // Smooth scroll to the section
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            const myTopnav = document.getElementById('myTopnav');
            if (myTopnav.classList.contains('responsive')) {
                myTopnav.classList.remove('responsive');
            }

            // Update active link
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
        }
    });
});

// 2. Scroll animation for elements
const animatedElements = document.querySelectorAll(
    '.info-card, .project-card, .contact-form, .section-header'
);

// Set initial states
animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
});

// Handle navbar scrolling effect
const navbar = document.querySelector('.navbar');

function handleScrollEffects() {
    const scrollPosition = window.scrollY;

    // Change navbar style on scroll
    if (scrollPosition > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Animate elements when scrolled into view
    animatedElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementPosition < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });

    // Update active navigation based on current section
    updateActiveNavigation();
}

// 3. Update active navigation based on scroll position
function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 200;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute('id');
        }
    });

    // Update navigation active state
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Initial call to functions
handleScrollEffects();

// Event listener for scroll
window.addEventListener('scroll', handleScrollEffects);

// Add hover effects for project cards and buttons
const projectCards = document.querySelectorAll('.project-card');
const buttons = document.querySelectorAll('.btn, .project-btn');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
});

buttons.forEach(button => {
    button.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-3px)';
    });

    button.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
});
