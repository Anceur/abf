

        // Mobile menu toggle
        const mobileToggle = document.getElementById('mobileToggle');
        const navMenu = document.getElementById('navMenu');

        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Navigation arrows functionality
        const prevArrow = document.querySelector('.prev-arrow');
        const nextArrow = document.querySelector('.next-arrow');

        prevArrow.addEventListener('click', () => {
            // Add your previous slide logic here
            console.log('Previous slide');
        });

        nextArrow.addEventListener('click', () => {
            // Add your next slide logic here
            console.log('Next slide');
        });

        // Parallax effect on scroll
        // window.addEventListener('scroll', () => {
        //     const scrolled = window.pageYOffset;
        //     const heroSection = document.querySelector('.hero-section');
        //     heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
        // });

        // Add dynamic background animation
        function createFloatingParticle() {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = '4px';
            particle.style.height = '4px';
            particle.style.background = 'rgba(212, 165, 116, 0.6)';
            particle.style.borderRadius = '50%';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = '100%';
            particle.style.pointerEvents = 'none';
            particle.style.animation = `floatUp ${3 + Math.random() * 3}s linear infinite`;
            
            document.querySelector('.floating-elements').appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 6000);
        }

        // Add CSS animation for floating particles
        const style = document.createElement('style');
        style.textContent = `
            @keyframes floatUp {
                from {
                    transform: translateY(0) rotate(0deg);
                    opacity: 1;
                }
                to {
                    transform: translateY(-100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        // Create particles periodically
        setInterval(createFloatingParticle, 2000);

        // Read More button interaction
        document.querySelector('.read-more-btn').addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });



        class TestimonialSlider {
            constructor() {
                this.slides = document.querySelectorAll('.slide');
                this.dots = document.querySelectorAll('.dot');
                this.prevBtn = document.getElementById('prevBtn');
                this.nextBtn = document.getElementById('nextBtn');
                this.currentSlide = 0;
                this.isAutoPlaying = true;
                this.autoPlayInterval = null;

                this.init();
            }

            init() {
                this.addEventListeners();
                this.startAutoPlay();
            }

            addEventListeners() {
                this.prevBtn.addEventListener('click', () => this.prevSlide());
                this.nextBtn.addEventListener('click', () => this.nextSlide());
                
                this.dots.forEach((dot, index) => {
                    dot.addEventListener('click', () => this.goToSlide(index));
                });

                // Pause auto-play on hover
                const container = document.querySelector('.slider-container');
                container.addEventListener('mouseenter', () => this.pauseAutoPlay());
                container.addEventListener('mouseleave', () => this.startAutoPlay());

                // Keyboard navigation
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'ArrowLeft') this.prevSlide();
                    if (e.key === 'ArrowRight') this.nextSlide();
                });
            }

            goToSlide(slideIndex) {
                // Remove active class from current slide and dot
                this.slides[this.currentSlide].classList.remove('active');
                this.dots[this.currentSlide].classList.remove('active');

                // Add prev class to current slide for exit animation
                if (slideIndex > this.currentSlide) {
                    this.slides[this.currentSlide].classList.add('prev');
                } else {
                    this.slides[this.currentSlide].classList.remove('prev');
                }

                // Update current slide
                this.currentSlide = slideIndex;

                // Add active class to new slide and dot
                this.slides[this.currentSlide].classList.add('active');
                this.dots[this.currentSlide].classList.add('active');

                // Clean up prev class after animation
                setTimeout(() => {
                    this.slides.forEach(slide => slide.classList.remove('prev'));
                }, 600);
            }

            nextSlide() {
                const nextIndex = (this.currentSlide + 1) % this.slides.length;
                this.goToSlide(nextIndex);
            }

            prevSlide() {
                const prevIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
                this.goToSlide(prevIndex);
            }

            startAutoPlay() {
                if (this.isAutoPlaying) {
                    this.autoPlayInterval = setInterval(() => {
                        this.nextSlide();
                    }, 5000);
                }
            }

            pauseAutoPlay() {
                if (this.autoPlayInterval) {
                    clearInterval(this.autoPlayInterval);
                    this.autoPlayInterval = null;
                }
            }
        }

        // Initialize slider when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            new TestimonialSlider();
        });

        // Add smooth scroll behavior and intersection observer for animations
        document.addEventListener('DOMContentLoaded', () => {
            const slider = document.querySelector('.slider-container');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            });

            slider.style.opacity = '0';
            slider.style.transform = 'translateY(50px)';
            slider.style.transition = 'all 0.8s ease';
            
            observer.observe(slider);
        });


           // FAQ Toggle Functionality
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', () => {
                const faqItem = question.parentElement;
                const isActive = faqItem.classList.contains('active');
                
                // Close all other FAQ items
                document.querySelectorAll('.faq-item').forEach(item => {
                    item.classList.remove('active');
                });
                
                // Toggle current item
                if (!isActive) {
                    faqItem.classList.add('active');
                }
            });
        });

        // Add smooth scrolling effect
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', () => {
                setTimeout(() => {
                    question.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest'
                    });
                }, 200);
            });
        });

        // Add keyboard accessibility
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    question.click();
                }
            });
        });


           const dropdown = document.getElementById('pagesDropdown');
    dropdown.querySelector('a').addEventListener('click', function (e) {
        e.stopPropagation(); // يمنع غلق القائمة عند النقر داخلها
        dropdown.classList.toggle('active');
    });

    // إغلاق القائمة إذا ضغطت خارجها
    document.addEventListener('click', function () {
        dropdown.classList.remove('active');
    });


  
    const openBtn = document.getElementById('openSearch');
    const closeBtn = document.getElementById('closeSearch');
    const overlay = document.getElementById('searchOverlay');

    openBtn.addEventListener('click', () => {
        overlay.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
    });

    // يغلق عند الضغط خارج مربع البحث
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.style.display = 'none';
        }
    });



            // Add smooth interactions
        document.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.zIndex = '10';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.zIndex = '1';
            });
        });

        // Product click handler
        function showProduct(productName) {
            // Create a beautiful alert with product info
            const productInfo = {
                'الدخن': 'الدخن - حبوب صحية غنية بالبروتين والألياف، مثالية للنظام الغذائي الصحي',
                'الأرز': 'الأرز - من أجود أنواع الأرز الطبيعي، مصدر ممتاز للطاقة والكربوهيدرات',
                'القمح': 'القمح - حبوب القمح الفاخرة، أساس الخبز والمعجنات الصحية',
                'الذرة': 'الذرة - ذرة طبيعية حلوة المذاق، غنية بالفيتامينات والمعادن',
                'الشعير': 'الشعير - حبوب الشعير المغذية، مفيدة للهضم وصحة القلب',
                'الشوفان': 'الشوفان - شوفان عضوي، يساعد في خفض الكوليسترول وتنظيم السكر',
                'فول الصويا': 'فول الصويا - بروتين نباتي كامل، مصدر ممتاز للأحماض الأمينية',
                'الكينوا': 'الكينوا - الحبوب الفائقة الغنية بالبروتين والمعادن',
                'بذور عباد الشمس': 'بذور عباد الشمس - مقرمشة ولذيذة، مصدر للدهون الصحية',
                'العدس': 'العدس - بقوليات غنية بالبروتين والحديد، أساس الطبخ الصحي',
                'الحمص': 'الحمص - حبوب الحمص المتميزة، غنية بالبروتين والألياف',
                'الفاصولياء': 'الفاصولياء - فاصولياء طبيعية متنوعة، مصدر ممتاز للبروتين النباتي'
            };

            alert(`${productInfo[productName] || productName}\n\nاتصل بنا للحصول على عروض خاصة!`);
        }

        // Add loading effect simulation
        window.addEventListener('load', function() {
            document.querySelectorAll('.product-card').forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('loaded');
                }, index * 100);
            });
        });

        // Smooth scroll for gallery
        const gallery = document.querySelector('.products-gallery');
        let isScrolling = false;

        gallery.addEventListener('scroll', function() {
            if (!isScrolling) {
                window.requestAnimationFrame(function() {
                    // Add subtle parallax effect to cards during scroll
                    const cards = gallery.querySelectorAll('.product-card');
                    const scrollTop = gallery.scrollTop;
                    
                    cards.forEach((card, index) => {
                        const cardTop = card.offsetTop;
                        const parallaxSpeed = 0.5;
                        const yPos = -(scrollTop - cardTop) * parallaxSpeed;
                        
                        if (Math.abs(yPos) < 50) { // Limit the effect
                            card.style.transform = `translateY(${yPos}px)`;
                        }
                    });
                    
                    isScrolling = false;
                });
            }
            isScrolling = true;
        });


        
