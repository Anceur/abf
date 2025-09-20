document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");
    const faqImage = document.querySelector(".faq-image");

    // Array of images corresponding to each question
    const images = [
        "../images/abf/twenty-sex.webp",   // For first question
        "../images/abf/twenty.webp",   // For second question
        "../images/abf/twenty-nine.webp", // For third question
        "../images/abf/seventeen.webp"   // For fourth question
    ];

    faqItems.forEach((item, index) => {
        const button = item.querySelector(".faq-question");

        button.addEventListener("click", () => {
            const isActive = item.classList.contains("active");

            // Close all items first
            faqItems.forEach(i => i.classList.remove("active"));

            if (!isActive) {
                // Open the clicked one
                item.classList.add("active");
                faqImage.style.backgroundImage = `url('${images[index]}')`;
            } else {
                // Reset image if you want default when closing
                faqImage.style.backgroundImage = `url('../images/abf/twenty-one.png')`;
            }
        });
    });
});