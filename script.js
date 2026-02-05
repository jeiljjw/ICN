// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navBtns = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.section');
    const cards = document.querySelectorAll('.card[data-section]');

    // Navigation button click
    navBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const targetSection = this.dataset.section;

            // Update active button
            navBtns.forEach(function(b) {
                b.classList.remove('active');
            });
            this.classList.add('active');

            // Show target section
            sections.forEach(function(s) {
                s.classList.remove('active');
                if (s.id === targetSection) {
                    s.classList.add('active');
                }
            });

            // Smooth scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Card click (for intro section)
    cards.forEach(function(card) {
        card.addEventListener('click', function() {
            const targetSection = this.dataset.section;
            const navBtn = document.querySelector('.nav-btn[data-section="' + targetSection + '"]');
            if (navBtn) {
                navBtn.click();
            }
        });
        card.style.cursor = 'pointer';
    });

    // FAQ accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(function(item) {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', function() {
            // Toggle current item
            item.classList.toggle('open');

            // Close other items
            faqItems.forEach(function(otherItem) {
                if (otherItem !== item) {
                    otherItem.classList.remove('open');
                }
            });
        });
    });

    // Add entrance animation to cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply initial styles for animation
    const animatedElements = document.querySelectorAll('.card, .tip-box, .warning-box, .success-box');
    animatedElements.forEach(function(el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });

    // Character wave animation on load
    const character = document.querySelector('.character');
    if (character) {
        setTimeout(function() {
            character.style.animation = 'float 3s ease-in-out infinite, wave 2s ease-in-out infinite';
        }, 1000);
    }

    // Console log for fun
    console.log('🛫 비행이가 함께합니다! 즐거운 여행 되세요!');
    console.log('✈️ Bon voyage!');
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
