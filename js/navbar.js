// One unified scroll listener
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    navbar.style.transition = 'all 0.3s ease';

    const videoSection = document.querySelector('.video-section');
    const faqSection = document.querySelector('.faq-section');
    const sections = document.querySelectorAll('.about-section , .products-section , .project-section , .team-section , .service-section');
    const logoImg = navbar.querySelector('.logo img');

    // --- 1. Hide Navbar between video-section and faq-section ---
    if (videoSection && faqSection) {
        const videoRect = videoSection.getBoundingClientRect();
        const faqRect = faqSection.getBoundingClientRect();
        const navbarBottom = navbar.getBoundingClientRect().bottom;
        if (videoRect.top <= navbarBottom && faqRect.top > navbarBottom) {
            navbar.style.top = '-100px'; // keep hidden
            return; // exit early → skip style updates
        }
    }

    // --- 2. Size/position adjustments ---
    if (window.scrollY === 0) {
        navbar.style.width = '100%';
        navbar.style.top = '0%';
        navbar.style.borderRadius = '0';
    } else {
        navbar.style.width = '93%';
        navbar.style.top = '2%';
        navbar.style.borderRadius = '10px';
    }

    // --- 3. Section background color logic ---
    sections.forEach(section => {
        const sectionRect = section.getBoundingClientRect();
        const navRect = navbar.getBoundingClientRect();

        if (navRect.bottom >= sectionRect.top) {
            // Navbar touches section
            navbar.style.background = '#5c3d24';
            navbar.style.color = '#fff';
            navbar.querySelectorAll('a, li, .search-icon, .logo, .dropdown-menu, .nav-menu , .mobile-menu-toggle ,.select-selected , .cta-button').forEach(el => {
                el.style.color = '#fff';
            });
            navbar.querySelectorAll('.nav-menu.active , .dropdown-menu').forEach(el => {
                el.style.background = '#5c3d24';
            });
            navbar.querySelectorAll('.cta-button').forEach(el => {
                el.style.background = '#e9dfd4';
                el.style.color = '#5c3d24';
            });
            if (logoImg) logoImg.src = 'images/logoGM.png';
        } else {
            // Default navbar style
            navbar.style.background = '#e9dfd4';
            navbar.style.color = '#000';
            navbar.querySelectorAll('a, li, .search-icon, .cta-button, .logo, .dropdown-menu, .nav-menu , .mobile-menu-toggle , .select-selected').forEach(el => {
                el.style.color = '';
            });
            navbar.querySelectorAll('.nav-menu.active , .dropdown-menu').forEach(el => {
                el.style.background = '#e9dfd4';
            });
            navbar.querySelectorAll('.cta-button').forEach(el => {
                el.style.background = '#5c3d24';
                el.style.color = '#e9dfd4';
            });
            if (logoImg) logoImg.src = 'images/logoGM1.png';
        }
    });
});
