// Array of Turkish alphabet letters
const turkishAlphabet = [
    'A', 'B', 'C', 'Ç', 'D', 'E', 'F', 'G', 'Ğ', 'H', 
    'I', 'İ', 'J', 'K', 'L', 'M', 'N', 'O', 'Ö', 'P', 
    'R', 'S', 'Ş', 'T', 'U', 'Ü', 'V', 'Y', 'Z'
];

// DOM elements
const alphabetNav = document.getElementById('alphabet');
const searchInput = document.getElementById('searchInput');
const dictionary = document.querySelector('.dictionary');

// Populate alphabet navigation
function populateAlphabetNav() {
    if (alphabetNav) {
        alphabetNav.innerHTML = turkishAlphabet
            .map(letter => `<a href="#letter-${letter}" aria-label="Go to letter ${letter}">${letter}</a>`)
            .join('');
    }

    // Add click event listeners for smooth scrolling
    const alphabetLinks = alphabetNav.querySelectorAll('a');
    alphabetLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// Search functionality
function searchWord() {
    const query = searchInput.value.toLowerCase();
    const words = dictionary.querySelectorAll('.word');
    
    words.forEach(word => {
        const wordText = word.querySelector('h3').textContent.toLowerCase();
        if (wordText.includes(query)) {
            word.style.display = '';
        } else {
            word.style.display = 'none';
        }
    });
}

// Event listeners
if (searchInput) {
    searchInput.addEventListener('input', searchWord);
}

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    populateAlphabetNav();
});
