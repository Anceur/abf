// ...existing code...

let lastScrollY = window.scrollY;

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    const aboutSection = document.querySelector('.about-section');
    let aboutBottom = 0;
    if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        aboutBottom = rect.bottom + window.scrollY;
    }

    const currentScrollY = window.scrollY;

    // --- Hide on scroll down, show on scroll up, but only after about-section ---
    if (currentScrollY > aboutBottom) {
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
            // Scrolling down past about-section
            navbar.style.top = '-100px';
        } else {
            // Scrolling up
            navbar.style.top = '0';
        }
    } else {
        // Always show navbar before about-section ends
        navbar.style.top = '0';
    }
    lastScrollY = currentScrollY;

    // Prevent other logic from overriding the hide/show logic
    if (navbar.style.top === '-100px') return;

    navbar.style.transition = 'all 0.1s ease';
    const sections = document.querySelectorAll('.about-section , .products-section , .project-section , .team-section , .service-section , .EXPERTICE-section , .contact-section');
    const logoImg = navbar.querySelector('.logo img');

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
// ...existing code...