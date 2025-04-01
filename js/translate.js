// Function to initialize Google Translate
function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
}

// Function to toggle between English and Arabic
function translateLanguage() {
    const select = document.querySelector('.goog-te-combo');
    if (select) {
        const currentLang = select.value;
        const newLang = (currentLang === 'ar') ? 'en' : 'ar';

        // Save the selected language in localStorage
        localStorage.setItem('selectedLanguage', newLang);

        // Apply the selected language
        select.value = newLang;
        select.dispatchEvent(new Event('change'));
    }
}

// Function to apply saved language when page loads
function applySavedLanguage() {
    const savedLang = localStorage.getItem('selectedLanguage');
    if (savedLang) {
        const select = document.querySelector('.goog-te-combo');
        if (select) {
            select.value = savedLang;
            select.dispatchEvent(new Event('change'));
        }
    }
}

// Function to remove Google Translate UI elements
function hideGoogleTranslateUI() {
    setInterval(() => {
        const frame = document.querySelector('.goog-te-banner-frame');
        const balloon = document.querySelector('.goog-te-balloon-frame');
        const body = document.querySelector('body');

        if (frame) {
            frame.remove();
            body.style.top = '0px';
        }
        if (balloon) balloon.remove();

        // Hide unwanted elements
        const elementsToHide = document.querySelectorAll('.goog-te-banner-frame, .goog-logo-link, .goog-te-gadget, .goog-te-balloon-frame');
        elementsToHide.forEach(el => el.style.display = 'none');

    }, 100);
}

// Initialize everything when the page loads
window.onload = function () {
    googleTranslateElementInit();
    hideGoogleTranslateUI();
    
    // Apply the saved language from localStorage
    setTimeout(applySavedLanguage, 500); // Delay to ensure Google Translate loads
};
