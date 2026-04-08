// index.js
document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("lang-toggle");
    
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

    function updateButtonText(lang) {
        if (lang === "it") {
            toggleBtn.textContent = "ENG";
        } else {
            toggleBtn.textContent = "ITA";
        }
    }
});