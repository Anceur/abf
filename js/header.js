// Function to update header based on current page
function updateHeader() {
    const path = window.location.pathname;
    const page = path.split("/").pop();
    let headerText = "";
    let subheaderText = "";

    switch(page) {
        case "index.html":
            headerText = "Les Grands Moulins de Frenda";
            subheaderText = "Fabrication de produit pour l'alimentation des Animaux";
            break;
        case "shop.html":
            headerText = "Our Products";
            subheaderText = "Featured Products";
            break;
        case "historique.html":
            headerText = "Historique";
            subheaderText = "Notre Histoire";
            break;
        case "about.html":
            headerText = "About Us";
            subheaderText = "Welcome to GMF";
            break;
        case "contact.html":
            headerText = "Contact Us";
            subheaderText = "Get in Touch";
            break;
        default:
            headerText = "Les Grands Moulins de Frenda";
            subheaderText = "Fabrication de produit pour l'alimentation des Animaux";
    }

    // Update the header elements
    const headerElement = document.querySelector('.elegant-title');
    const subheaderElement = document.querySelector('.elegant-subtitle');

    if (headerElement) {
        headerElement.textContent = headerText;
    }
    if (subheaderElement) {
        subheaderElement.textContent = subheaderText;
    }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', updateHeader); 