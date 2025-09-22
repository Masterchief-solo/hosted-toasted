// Periodic table hover effects
document.querySelectorAll('.element').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) rotate(5deg)';
    });
    
    element.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Random formula generator for section headers
const formulas = [
    'Knowledge + Validation = Industry Recognition',
    'Skills × Time × Impact = Career Progression',
    'Innovation + Implementation = Practical Experience',
    'Academic + Experience = Professional Excellence',
    'Threat Detection + Response = Security Excellence'
];

// Animate section appearances on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideUp 0.8s ease-out';
            entry.target.style.opacity = '1';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    observer.observe(section);
});

// Add typing effect to the main title
const nameElement = document.querySelector('.name');
const originalText = nameElement.textContent;
nameElement.textContent = '';

let i = 0;
const typeWriter = () => {
    if (i < originalText.length) {
        nameElement.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
};

// Start typing effect after page load
setTimeout(typeWriter, 500);

// Add click effect to certification items
document.querySelectorAll('.cert-list li').forEach(item => {
    item.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        this.style.backgroundColor = 'rgba(57, 255, 20, 0.2)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
            this.style.backgroundColor = 'transparent';
        }, 200);
    });
});

// Enhanced scroll effects with blue crystal interactions
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const elements = document.querySelectorAll('.element');
    const crystals = document.querySelectorAll('.crystal');
    
    elements.forEach((element, index) => {
        const rate = scrolled * -0.5;
        element.style.transform = `translateY(${rate * (index + 1) * 0.1}px) rotate(${rate * 0.05}deg)`;
    });

    // Animate crystals based on scroll
    crystals.forEach((crystal, index) => {
        const rate = scrolled * 0.3;
        const baseRotation = [45, -30, 60, -45][index];
        crystal.style.transform = `translateY(${rate * (index + 1) * 0.05}px) rotate(${baseRotation + rate * 0.1}deg)`;
        
        // Add shimmer effect based on scroll position
        const shimmer = Math.sin(scrolled * 0.01 + index) * 0.5 + 0.5;
        crystal.style.opacity = 0.3 + shimmer * 0.3;
    });
});

// Add crystal shimmer animation
setInterval(() => {
    const crystals = document.querySelectorAll('.crystal');
    crystals.forEach((crystal, index) => {
        const shimmer = Math.sin(Date.now() * 0.003 + index * 1.5) * 0.3 + 0.4;
        crystal.style.boxShadow = `
            0 0 ${20 + shimmer * 15}px rgba(0, 191, 255, ${0.3 + shimmer * 0.2}),
            inset 0 0 20px rgba(135, 206, 250, ${0.2 + shimmer * 0.15})
        `;
    });
}, 200);

// Print functionality
window.addEventListener('beforeprint', () => {
    document.body.style.background = 'white';
    document.body.style.color = 'black';
});

window.addEventListener('afterprint', () => {
    document.body.style.background = '';
    document.body.style.color = '';
});
