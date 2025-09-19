// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// Scroll Animation
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 100) {
        navbar.style.background = "rgba(255, 255, 255, 0.98)";
        navbar.style.padding = "0.5rem 0";
    } else {
        navbar.style.background = "rgba(255, 255, 255, 0.95)";
        navbar.style.padding = "1rem 0";
    }
    
    // Animate elements on scroll
    const elements = document.querySelectorAll('.animate');
    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (position < screenPosition) {
            element.classList.add('animated');
        }
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Budget Range Slider
const budgetSlider = document.getElementById('budget');
const budgetOutput = document.getElementById('budget-output');

if (budgetSlider && budgetOutput) {
    budgetSlider.addEventListener('input', () => {
        budgetOutput.value = '$' + budgetSlider.value;
    });
}

// Activity Selection
const activityTags = document.querySelectorAll('.activity-tag');
activityTags.forEach(tag => {
    tag.addEventListener('click', () => {
        tag.classList.toggle('selected');
    });
});

// Category Filtering
const categoryButtons = document.querySelectorAll('.category-btn');
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        // Filter functionality would go here
    });
});

// Gallery Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        // Filter functionality would go here
    });
});

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.section-title, .destination-card, .blog-card, .deal-card, .gallery-item');
    elements.forEach(element => {
        element.classList.add('animate');
    });
    
    // Trigger scroll event to check initial positions
    window.dispatchEvent(new Event('scroll'));
});