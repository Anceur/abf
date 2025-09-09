 document.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    this.classList.toggle('flipped');
                }
            });
        });

        const style = document.createElement('style');
        style.textContent = `
            @media (max-width: 768px) {
                .product-card.flipped .card-inner {
                    transform: rotateY(180deg);
                }
            }
        `;
        document.head.appendChild(style);

        document.querySelector('.all-product-btn').addEventListener('click', function() {
            document.querySelector('.products-grid').scrollIntoView({
                behavior: 'smooth'
            });
        });