document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    const mobileMenuContent = document.querySelector('.mobile-menu-content');
    const searchOverlay = document.getElementById('searchOverlay');
    const openSearch = document.getElementById('openSearch');
    const closeSearch = document.getElementById('closeSearch');

    // Toggle mobile menu
    mobileToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
        mobileMenuContent.classList.toggle('active');
    });

    // Search overlay functionality
    openSearch.addEventListener('click', function() {
        searchOverlay.classList.add('active');
    });

    closeSearch.addEventListener('click', function() {
        searchOverlay.classList.remove('active');
    });

    // Close search overlay when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchOverlay.contains(e.target) && !openSearch.contains(e.target)) {
            searchOverlay.classList.remove('active');
        }
    });
});
