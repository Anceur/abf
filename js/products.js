const products = [
    // OVIN Products
    {
        name: "Ovin - Farineux",
        image: "./images/product/sac/ovin-gresment.png",
        category: "ovin",
        technicalData: {
            "Humidité": "12.67%",
            "Protéine": "17.39%",
            "Matières grasses": "3.1%",
            "Sels minéraux": "6.99%",
            "Fibres": "5.43%",
            "Amidons": "32.25%"
        }
    },
    {
        name: "Ovin - D/C",
        image: "./images/product/sac/ovin-démarrage-croissance.png",
        category: "ovin",
        technicalData: {
            "Humidité": "12.67%",
            "Protéine": "17.39%",
            "Matières grasses": "3.1%",
            "Sels minéraux": "6.99%",
            "Fibres": "5.43%",
            "Amidons": "32.25%"
        }
    },
    {
        name: "Ovin - Finition",
        image: "./images/product/sac/ovin-finition.png",
        category: "ovin",
        technicalData: {
            "Humidité": "12.85%",
            "Protéine": "15.04%",
            "Matières grasses": "3.22%",
            "Sels minéraux": "6.18%",
            "Fibres": "4.98%",
            "Amidons": "37.69%"
        }
    },

    // BOVIN Products
    {
        name: "Bovin - D/C",
        image: "./images/product/sac/bovin-démarrage.png",
        category: "bovin",
        technicalData: {
            "Humidité": "12.488%",
            "Protéine": "17.255%",
            "Matières grasses": "3.516%",
            "Sels minéraux": "7.953%",
            "Fibres": "4.717%",
            "Amidons": "34.475%"
        }
    },
    {
        name: "Bovin - Finition",
        image: "./images/product/sac/bovin-finition.png",
        category: "bovin",
        technicalData: {
            "Humidité": "N/A",
            "Protéine": "15.183%",
            "Matières grasses": "N/A",
            "Sels minéraux": "N/A",
            "Fibres": "N/A",
            "Amidons": "N/A"
        }
    },

    // BREBIS Products
    {
        name: "Brebis - 40 kg",
        image: "./images/product/sac/brebis-sarha-40kg.png",
        category: "brebis",
        technicalData: {
            "Humidité": "12.78%",
            "Protéine": "12.7%",
            "Matières grasses": "3.32%",
            "Sels minéraux": "7.12%",
            "Fibres": "6.37%",
            "Amidons": "32.39%"
        }
    },
    {
        name: "Brebis - 50 kg",
        image: "./images/product/sac/brebis-sarha-50kg.png",
        category: "brebis",
        technicalData: {
            "الرطوبة (Humidité)": "12.78%",
            "Protéine": "12.7%",
            "Matières grasses": "3.32%",
            "Sels minéraux": "7.12%",
            "Fibres": "6.37%",
            "Amidons": "32.39%"
        }
    },
    {
        name: "Brebis - Entretien",
        image: "./images/product/sac/brebis-entretien.png",
        category: "brebis",
        technicalData: {
            "Humidité": "12.78%",
            "Protéine": "12.7%",
            "Matières grasses": "3.32%",
            "Sels minéraux": "7.12%",
            "Fibres": "6.37%",
            "Amidons": "32.39%"
        }
    },
    {
        name: "Brebis - Gestante",
        image: "./images/product/sac/brebis-gestante.png",
        category: "brebis",
        technicalData: {
            "Humidité": "12.56%",
            "Protéine": "16.96%",
            "Matières grasses": "3.08%",
            "Sels minéraux": "7.88%",
            "Fibres": "5.56%",
            "Amidons": "31.28%"
        }
    },
    {
        name: "Brebis - Allaitante",
        image: "./images/product/sac/brebis-aliatante.png",
        category: "brebis",
        technicalData: {
            "Humidité": "12.58%",
            "Protéine": "18.45%",
            "Matières grasses": "3.01%",
            "Sels minéraux": "7.62%",
            "Fibres": "4.85%",
            "Amidons": "33.42%"
        }
    },

    // VACHE LAITIÈRE Products
    {
        name: "Vache Laitière - (B20) G",
        image: "./images/product/sac/vache-laitière-b20.png",
        category: "vache",
        technicalData: {
            "Humidité": "12.45%",
            "Protéine": "20.275%",
            "Matières grasses": "3.4%",
            "Sels minéraux": "7.638%",
            "Fibres": "4.935%",
            "Amidons": "30.478%"
        }
    },
    {
        name: "Vache Laitière - (B22) G",
        image: "./images/product/sac/vache-laitière-b22.png",
        category: "vache",
        technicalData: {
            "Humidité": "12.42%",
            "Protéine": "21.78%",
            "Matières grasses": "3.32%",
            "Sels minéraux": "7.62%",
            "Fibres": "4.41%",
            "Amidons": "31.52%"
        }
    },
    {
        name: "Vache Laitière - Tarie",
        image: "./images/product/sac/vache-tarie.png",
        category: "vache",
        technicalData: {
            "Humidité": "12.623%",
            "Protéine": "16.169%",
            "Matières grasses": "3.12%",
            "Sels minéraux": "7.817%",
            "Fibres": "5.75%",
            "Amidons": "30.95%"
        }
    },

    // POULET DE CHAIR Products
    {
        name: "Poulet de Chair - Démarrage 1",
        image: "./images/product/sac/démarrage-01.png",
        category: "poulet",
        technicalData: {
            "Humidité": "12.61%",
            "Protéine": "21.53%",
            "Matières grasses": "3.4%",
            "Sels minéraux": "5.94%",
            "Fibres": "3.78%",
            "Amidons": "36.89%"
        }
    },
    {
        name: "Poulet de Chair - Démarrage 2",
        image: "./images/product/sac/démarrage-02.png",
        category: "poulet",
        technicalData: {
            "Humidité": "12.67%",
            "Protéine": "20.62%",
            "Matières grasses": "3.45%",
            "Sels minéraux": "5.65%",
            "Fibres": "3.72%",
            "Amidons": "36.89%"
        }
    },
    {
        name: "Poulet de Chair - Croissance 1",
        image: "./images/product/sac/croissance-01.png",
        category: "poulet",
        technicalData: {
            "Humidité": "12.81%",
            "Protéine": "19.41%",
            "Matières grasses": "3.52%",
            "Sels minéraux": "4.9%",
            "Fibres": "3.37%",
            "Amidons": "42.11%"
        }
    },
    {
        name: "Poulet de Chair - Croissance 2",
        image: "./images/product/sac/croissance-02.png",
        category: "poulet",
        technicalData: {
            "Humidité": "12.81%",
            "Protéine": "19.41%",
            "Matières grasses": "3.52%",
            "Sels minéraux": "4.9%",
            "Fibres": "3.37%",
            "Amidons": "42.11%"
        }
    },
    {
        name: "Poulet de Chair - Croissance 3",
        image: "./images/product/sac/croissance-03.png",
        category: "poulet",
        technicalData: {
            "Humidité": "12.88%",
            "Protéine": "18.67%",
            "Matières grasses": "3.57%",
            "Sels minéraux": "4.53%",
            "Fibres": "3.3%",
            "Amidons": "43.58%"
        }
    },
    {
        name: "Poulet de Chair - Finition G.",
        image: "./images/product/sac/finition.png",
        category: "poulet",
        technicalData: {
            "Humidité": "12.91%",
            "Protéine": "17.78%",
            "Matières grasses": "3.9%",
            "Sels minéraux": "4.33%",
            "Fibres": "3.22%",
            "Amidons": "44.86%"
        }
    },
    {
        name: "Poulet de Chair - Turbo",
        image: "./images/product/sac/finition.png",
        category: "poulet",
        technicalData: {
            "Humidité": "12.91%",
            "Protéine": "17.78%",
            "Matières grasses": "3.9%",
            "Sels minéraux": "4.33%",
            "Fibres": "3.22%",
            "Amidons": "44.86%"
        }
    },

    // PONDEUSE Products
    {
        name: "Pondeuse - Pré Ponte",
        image: "./images/product/sac/poule-pondeuse.png",
        category: "pondeuse",
        technicalData: {
            "Humidité": "12.51%",
            "Protéine": "16.45%",
            "Matières grasses": "3.15%",
            "Sels minéraux": "12.78%",
            "Fibres": "4.83%",
            "Amidons": "30.52%"
        }
    },
    {
        name: "Pondeuse - Ponte 1",
        image: "./images/product/sac/poule-pondeuse.png",
        category: "pondeuse",
        technicalData: {
            "Humidité": "12.51%",
            "Protéine": "16.45%",
            "Matières grasses": "3.15%",
            "Sels minéraux": "12.78%",
            "Fibres": "4.83%",
            "Amidons": "30.52%"
        }
    },
    {
        name: "Pondeuse - Ponte 2",
        image: "./images/product/sac/poule-pondeuse.png",
        category: "pondeuse",
        technicalData: {
            "Humidité": "12.51%",
            "Protéine": "16.45%",
            "Matières grasses": "3.15%",
            "Sels minéraux": "12.78%",
            "Fibres": "4.83%",
            "Amidons": "30.52%"
        }
    },
];
     let currentFilter = 'ovine';

// Function to render products with animation
function renderProducts(productsGrid, productsToRender, animate = true) {
    console.log('Rendering products:', productsToRender.length, 'products');
    
    if (animate) {
        // Fade out existing products
        const existingProducts = productsGrid.querySelectorAll('.product-card');
        existingProducts.forEach((product, index) => {
            setTimeout(() => {
                product.classList.add('fade-out');
            }, index * 50);
        });

        // Wait for fade out animation, then render new products
        setTimeout(() => {
            renderProductsImmediate(productsGrid, productsToRender);
        }, 300);
    } else {
        renderProductsImmediate(productsGrid, productsToRender);
    }
}

function renderProductsImmediate(productsGrid, productsToRender) {
    productsGrid.innerHTML = '';
    
    productsToRender.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card fade-out';
        productCard.dataset.category = product.category;

        // ...existing code...
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>

            <div class="product-bottom">
                <div class="product-content">
                    <span class="product-name" data-lang="${product.name}">${product.name}</span>
                    <div class="product-details">
                        <table>
                        ${
                            product.technicalData
                                ? Object.entries(product.technicalData)
                                    .map(([key, value]) => `<tr><th data-lang="${key}">${key}</th><td>${value}</td></tr>`)
                                    .join('')
                                : ''
                        }
                        </table>
                    </div>
                </div>
                
                <div class="bottom-actions">
                    <div class="contact-info">
                        <div class="contact-icon">
                            <i class="material-icons">chat</i>
                        </div>
                        <div class="contact-text">
                            <div>Nous Contacter</div>
                            <div style="font-size: 0.7rem; opacity: 0.8;">Chat sur WhatsApp</div>
                        </div>
                    </div>
                        <button class="whatsapp-btn" onclick="window.open('https://wa.me/213561982991?text=مرحبا%20اريد%20مزيد%20من%20المعلومات', '_blank')">
                            <i class="fab fa-whatsapp"></i>
                            WhatsApp
                        </button>

                </div>
            </div>  
        `;
        // ...existing code...
        productsGrid.appendChild(productCard);

        // Animate in
        setTimeout(() => {
            productCard.classList.remove('fade-out');
            productCard.classList.add('fade-in');
        }, index * 100);
    });

    // Update product count in section
    updateProductCount(productsToRender.length);
    console.log('Products rendered successfully');
}

// Function to update product count
function updateProductCount(count) {
    const sectionTitle = document.querySelector('.section-title p');
    if (sectionTitle) {
            const filterName = {
                'ovin': 'produits pour ovins',
                'bovin': 'produits pour bovins',
                'brebis': 'produits pour brebis',
                'vache': 'produits pour vaches laitières',
                'poulet': 'produits pour poulets de chair',
                'pondeuse': 'produits pour pondeuses'
            };
            sectionTitle.textContent = `Découvrez nos ${count} ${filterName[currentFilter]} de haute qualité.`;
    }
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, looking for productsGrid...');
    
    // Get the products grid element
    const productsGrid = document.getElementById('productsGrid');
    
    if (!productsGrid) {
        console.error('Products grid element not found!');
        return;
    }
    
    console.log('Products grid found:', productsGrid);

    // Create filter buttons
    const filterContainer = document.createElement('div');
    filterContainer.className = 'filter-container';
    filterContainer.innerHTML = `
        <button class="filter-btn active" data-lang="ovin" data-filter="ovin" data-count="${products.filter(p => p.category === 'ovin').length}">
            Ovin
        </button>
        <button class="filter-btn" data-lang="bovin" data-filter="bovin" data-count="${products.filter(p => p.category === 'bovin').length}">
            Bovin
        </button>
        <button class="filter-btn" data-lang="brebis" data-filter="brebis" data-count="${products.filter(p => p.category === 'brebis').length}">
            Brebis
        </button>
        <button class="filter-btn" data-lang="vache" data-filter="vache" data-count="${products.filter(p => p.category === 'vache').length}">
            Vache Laitière
        </button>
        <button class="filter-btn" data-lang="poulet" data-filter="poulet" data-count="${products.filter(p => p.category === 'poulet').length}">
            Poulet de Chair
        </button>
        <button class="filter-btn" data-lang="pondeuse" data-filter="pondeuse" data-count="${products.filter(p => p.category === 'pondeuse').length}">
            Pondeuse
        </button>
    `;

    // Insert filter container before products grid
    productsGrid.parentNode.insertBefore(filterContainer, productsGrid);

    // Attach event listeners to filter buttons
    const filterButtons = filterContainer.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            // Prevent clicking the same active button
            if (button.classList.contains('active')) return;

            // Temporarily disable button to prevent rapid clicking
            button.style.pointerEvents = 'none';

            // Remove active class from all buttons
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.style.pointerEvents = 'auto';
            });

            // Add active class to clicked button
            button.classList.add('active');

            // Get filter value and update current filter
            const filter = button.dataset.filter;
            currentFilter = filter;

            const filteredProducts = products.filter(product => product.category === filter);
            renderProducts(productsGrid, filteredProducts);
            // Re-enable button after animation
            setTimeout(() => {
                button.style.pointerEvents = 'auto';
            }, 800);
        });
    });

    // Initial render of all products
    renderProducts(productsGrid, products.filter(product => product.category === 'ovin'), false);
    console.log('Initial products rendered');
});