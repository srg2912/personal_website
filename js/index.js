// index.js
document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("lang-toggle");
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const dropdowns = document.querySelectorAll(".dropdown");
    
    // Check local storage for language preference, default to Italian
    let currentLang = localStorage.getItem("preferredLanguage") || "it";
    
    // Apply initial language class
    document.body.className = `lang-${currentLang}`;
    updateButtonText(currentLang);

    toggleBtn.addEventListener("click", () => {
        currentLang = currentLang === "it" ? "en" : "it";
        document.body.className = `lang-${currentLang}`;
        localStorage.setItem("preferredLanguage", currentLang);
        updateButtonText(currentLang);
    });

    // Mobile menu toggle
    if (menuToggle) {
        menuToggle.addEventListener("click", () => {
            menuToggle.classList.toggle("active");
            navLinks.classList.toggle("active");
        });
    }

    // Handle dropdowns on mobile (click instead of hover)
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector("a");
        link.addEventListener("click", (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle("active");
            }
        });
    });

    function updateButtonText(lang) {
        if (lang === "it") {
            toggleBtn.textContent = "ENG";
        } else {
            toggleBtn.textContent = "ITA";
        }
    }
});