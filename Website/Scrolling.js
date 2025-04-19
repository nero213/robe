document.addEventListener('DOMContentLoaded', function() {
    // 1. Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
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
            }
        });
    });
    
    // 2. Scroll reveal animation setup
    const elements = document.querySelectorAll('.box, .project, .contact-form');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });
    
    // Initial check
    animateOnScroll();
    
    // 3. Active navigation highlighting
    highlightActiveSection();
    
    // Event listeners
    window.addEventListener('scroll', function() {
        animateOnScroll();
        highlightActiveSection();
    });
});

function animateOnScroll() {
    const elements = document.querySelectorAll('.box, .project, .contact-form');
    const windowHeight = window.innerHeight;
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const elementVisible = 100;
        
        if (elementPosition < windowHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

function highlightActiveSection() {
    const sections = document.querySelectorAll('div[id]');
    const navLinks = document.querySelectorAll('.topnav a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}