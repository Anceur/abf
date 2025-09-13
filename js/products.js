const products = [
    // OVIN Products
    {
        name: "Ovin - Farineux",
        image: "./images/product/sac/ovin-gresment.png",
        info: [["Type", "Farineux"], ["Catégorie", "Alimentation Ovin"], ["Format", "Sac"]],
        category: "ovin"
    },
    {
        name: "Ovin - D/C",
        image: "./images/product/sac/ovin-démarrage-croissance.png",
        info: [["Type", "D/C"], ["Catégorie", "Alimentation Ovin"], ["Format", "Sac"]],
        category: "ovin"
    },
    {
        name: "Ovin - Finition",
        image: "./images/product/sac/ovin-finition.png",
        info: [["Type", "Finition"], ["Catégorie", "Alimentation Ovin"], ["Format", "Sac"]],
        category: "ovin"
    },

    // BOVIN Products
    {
        name: "Bovin - D/C",
        image: "./images/product/sac/bovin-démarrage.png",
        info: [["Type", "D/C"], ["Catégorie", "Alimentation Bovin"], ["Format", "Sac"]],
        category: "bovin"
    },
    {
        name: "Bovin - Finition",
        image: "./images/product/sac/bovin-finition.png",
        info: [["Type", "Finition"], ["Catégorie", "Alimentation Bovin"], ["Format", "Sac"]],
        category: "bovin"
    },

    // BREBIS Products
    {
        name: "Brebis - 40 kg",
        image: "./images/product/sac/brebis-sarha-40kg.png",
        info: [["Poids", "40 kg"], ["Catégorie", "Alimentation Brebis"], ["Format", "Sac"]],
        category: "brebis"
    },
    {
        name: "Brebis - 50 kg",
        image: "./images/product/sac/brebis-sarha-50kg.png",
        info: [["Poids", "50 kg"], ["Catégorie", "Alimentation Brebis"], ["Format", "Sac"]],
        category: "brebis"
    },
    {
        name: "Brebis - Entretien",
        image: "./images/product/sac/brebis-entretien.png",
        info: [["Type", "Entretien"], ["Catégorie", "Alimentation Brebis"], ["Format", "Sac"]],
        category: "brebis"
    },
    {
        name: "Brebis - Gestante",
        image: "./images/product/sac/brebis-gestante.png",
        info: [["Type", "Gestante"], ["Catégorie", "Alimentation Brebis"], ["Format", "Sac"]],
        category: "brebis"
    },
    {
        name: "Brebis - Allaitante",
        image: "./images/product/sac/brebis-aliatante.png",
        info: [["Type", "Allaitante"], ["Catégorie", "Alimentation Brebis"], ["Format", "Sac"]],
        category: "brebis"
    },

    // VACHE LAITIÈRE Products
    {
        name: "Vache Laitière - (B20) G",
        image: "./images/product/sac/vache-laitière-b20.png",
        info: [["Type", "(B20) G"], ["Catégorie", "Vache Laitière"], ["Format", "Sac"]],
        category: "vache"
    },
    {
        name: "Vache Laitière - (B22) G",
        image: "./images/product/sac/vache-laitière-b22.png",
        info: [["Type", "(B22) G"], ["Catégorie", "Vache Laitière"], ["Format", "Sac"]],
        category: "vache"
    },
    {
        name: "Vache Laitière - Tarie",
        image: "./images/product/sac/vache-tarie.png",
        info: [["Type", "Tarie"], ["Catégorie", "Vache Laitière"], ["Format", "Sac"]],
        category: "vache"
    },

    // POULET DE CHAIR Products
    {
        name: "Poulet de Chair - Démarrage 1",
        image: "./images/product/sac/démarrage-01.png",
        info: [["Phase", "Démarrage 1"], ["Catégorie", "Poulet de Chair"], ["Format", "Sac"]],
        category: "poulet"
    },
    {
        name: "Poulet de Chair - Démarrage 2",
        image: "./images/product/sac/démarrage-02.png",
        info: [["Phase", "Démarrage 2"], ["Catégorie", "Poulet de Chair"], ["Format", "Sac"]],
        category: "poulet"
    },
    {
        name: "Poulet de Chair - Croissance 1",
        image: "./images/product/sac/croissance-01.png",
        info: [["Phase", "Croissance 1"], ["Catégorie", "Poulet de Chair"], ["Format", "Sac"]],
        category: "poulet"
    },
    {
        name: "Poulet de Chair - Croissance 2",
        image: "./images/product/sac/croissance-02.png",
        info: [["Phase", "Croissance 2"], ["Catégorie", "Poulet de Chair"], ["Format", "Sac"]],
        category: "poulet"
    },
    {
        name: "Poulet de Chair - Croissance 3",
        image: "./images/product/sac/croissance-03.png",
        info: [["Phase", "Croissance 3"], ["Catégorie", "Poulet de Chair"], ["Format", "Sac"]],
        category: "poulet"
    },
    {
        name: "Poulet de Chair - Finition G.",
        image: "./images/product/sac/finition.png",
        info: [["Phase", "Finition G."], ["Catégorie", "Poulet de Chair"], ["Format", "Sac"]],
        category: "poulet"
    },
    {
        name: "Poulet de Chair - Turbo",
        image: "./images/product/sac/poulet-turbo.png",
        info: [["Type", "Turbo"], ["Catégorie", "Poulet de Chair"], ["Format", "Sac"]],
        category: "poulet"
    },

    // PONDEUSE Products
    {
        name: "Pondeuse - Pré Ponte",
        image: "./images/product/sac/poule-pondeuse.png",
        info: [["Phase", "Pré Ponte"], ["Catégorie", "Pondeuse"], ["Format", "Sac"]],
        category: "pondeuse"
    },
    {
        name: "Pondeuse - Ponte 1",
        image: "./images/product/sac/poule-pondeuse.png",
        info: [["Phase", "Ponte 1"], ["Catégorie", "Pondeuse"], ["Format", "Sac"]],
        category: "pondeuse"
    },
    {
        name: "Pondeuse - Ponte 2",
        image: "./images/product/sac/poule-pondeuse.png",
        info: [["Phase", "Ponte 2"], ["Catégorie", "Pondeuse"], ["Format", "Sac"]],
        category: "pondeuse"
    }
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

        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>

            <div class="product-bottom">
                <div class="product-content">
                    <span class="product-name">${product.name}</span>
                    <div class="product-details">
                        <table>
                            ${product.info.map(row => `<tr><th>${row[0]}</th><td>${row[1]}</td></tr>`).join('')}
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
                    
                    <button class="whatsapp-btn">
                        <i class="fab fa-whatsapp"></i>
                        WhatsApp
                    </button>
                </div>
            </div>  
        `;

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
        <button class="filter-btn active" data-filter="ovin" data-count="${products.filter(p => p.category === 'ovin').length}">
            Ovin
        </button>
        <button class="filter-btn" data-filter="bovin" data-count="${products.filter(p => p.category === 'bovin').length}">
            Bovin
        </button>
        <button class="filter-btn" data-filter="brebis" data-count="${products.filter(p => p.category === 'brebis').length}">
            Brebis
        </button>
        <button class="filter-btn" data-filter="vache" data-count="${products.filter(p => p.category === 'vache').length}">
            Vache Laitière
        </button>
        <button class="filter-btn" data-filter="poulet" data-count="${products.filter(p => p.category === 'poulet').length}">
            Poulet de Chair
        </button>
        <button class="filter-btn" data-filter="pondeuse" data-count="${products.filter(p => p.category === 'pondeuse').length}">
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