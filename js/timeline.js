document.addEventListener('DOMContentLoaded', function() {
    // Get all timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    // Function to check if an element is in viewport
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    };

    // Function to handle scroll events
    const handleScroll = () => {
        timelineItems.forEach((item, index) => {
            if (isInViewport(item)) {
                // Add visible class with delay based on index
                setTimeout(() => {
                    item.classList.add('visible');
                    
                    // Add completed class to previous items
                    for (let i = 0; i < index; i++) {
                        if (!timelineItems[i].classList.contains('completed')) {
                            timelineItems[i].classList.add('completed');
                            timelineItems[i].classList.add('animate');
                            
                            // Remove animation class after animation completes
                            setTimeout(() => {
                                timelineItems[i].classList.remove('animate');
                            }, 500);
                        }
                    }
                }, index * 100); // Staggered delay for each item
            }
        });
    };

    // Initial check
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Add click event to items for demo purposes
    timelineItems.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.add('completed');
            this.classList.add('animate');
            
            // Remove animation class after animation completes
            setTimeout(() => {
                this.classList.remove('animate');
            }, 500);
        });
    });
});
