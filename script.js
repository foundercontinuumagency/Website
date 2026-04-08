document.addEventListener('DOMContentLoaded', () => {

    // 2. Glow Tracking Card Effect
    const glowCards = document.querySelectorAll('.card, .portfolio-card, .cs-service-box, .cs-info-card');
    document.body.addEventListener('mousemove', e => {
        for(const card of glowCards) {
            const rect = card.getBoundingClientRect(),
                  x = e.clientX - rect.left,
                  y = e.clientY - rect.top;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        }
    });

    // 3. Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
            mobileBtn.innerHTML = navLinks.classList.contains('nav-active') ? '✕' : '☰';
        });
    }

    // 4. Advanced Scroll Observers (Staggered Reveals)
    const fadeElements = document.querySelectorAll('.fade-up, .fade-up-stagger');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Unobserve for better performance after reveal
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => observer.observe(el));

    // 5. Glassmorphism Navbar Scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(5, 5, 5, 0.85)';
                navbar.style.backdropFilter = 'blur(16px)';
                navbar.style.webkitBackdropFilter = 'blur(16px)';
                navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.15)';
                navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
            } else {
                navbar.style.background = 'rgba(5, 5, 5, 0.5)';
                navbar.style.backdropFilter = 'blur(12px)';
                navbar.style.webkitBackdropFilter = 'blur(12px)';
                navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
                navbar.style.boxShadow = 'none';
            }
        });
    }

    // 6. Highlight active nav link based on current page
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        const itemPath = item.getAttribute('href');
        if (itemPath === currentPath) {
            item.classList.add('active');
        }
    });
});
