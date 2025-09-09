let currentSlideIndex = 0;
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.nav-dot');
        const totalSlides = slides.length;
        let autoSlideInterval;
        let progressInterval;
        const slideDuration = 5000; // 5 seconds

        function showSlide(index) {
            // Remove active classes
            slides.forEach(slide => {
                slide.classList.remove('active', 'prev');
            });
            dots.forEach(dot => {
                dot.classList.remove('active');
            });

            // Add prev class to current slide
            if (slides[currentSlideIndex]) {
                slides[currentSlideIndex].classList.add('prev');
            }

            // Update current slide index
            currentSlideIndex = index;

            // Add active classes
            slides[currentSlideIndex].classList.add('active');
            dots[currentSlideIndex].classList.add('active');

            // Reset and start progress bar
            resetProgressBar();
            startProgressBar();
        }

        function nextSlide() {
            const nextIndex = (currentSlideIndex + 1) % totalSlides;
            showSlide(nextIndex);
        }

        function previousSlide() {
            const prevIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
            showSlide(prevIndex);
        }

        function currentSlide(index) {
            showSlide(index - 1);
            resetAutoSlide();
        }

        function startAutoSlide() {
            autoSlideInterval = setInterval(nextSlide, slideDuration);
        }

        function resetAutoSlide() {
            clearInterval(autoSlideInterval);
            clearInterval(progressInterval);
            startAutoSlide();
        }

        function startProgressBar() {
            const progressBar = document.getElementById('progressBar');
            let width = 0;
            const increment = 100 / (slideDuration / 50); // Update every 50ms

            progressInterval = setInterval(() => {
                width += increment;
                progressBar.style.width = width + '%';
                
                if (width >= 100) {
                    clearInterval(progressInterval);
                }
            }, 50);
        }

        function resetProgressBar() {
            clearInterval(progressInterval);
            document.getElementById('progressBar').style.width = '0%';
        }

        // Pause auto-slide on hover
        const heroSlider = document.querySelector('.hero-section');
        heroSlider.addEventListener('mouseenter', () => {
            clearInterval(autoSlideInterval);
            clearInterval(progressInterval);
        });

        heroSlider.addEventListener('mouseleave', () => {
            resetAutoSlide();
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                previousSlide();
                resetAutoSlide();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
                resetAutoSlide();
            }
        });

        // Touch/swipe support
        let touchStartX = 0;
        let touchEndX = 0;

        heroSlider.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        heroSlider.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });

        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    nextSlide();
                } else {
                    previousSlide();
                }
                resetAutoSlide();
            }
        }

        // Initialize
        startAutoSlide();
        startProgressBar();