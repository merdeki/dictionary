const turkishAlphabet = [
    'A', 'B', 'C', 'Ç', 'D', 'E', 'F', 'G', 'Ğ', 'H', 
    'I', 'İ', 'J', 'K', 'L', 'M', 'N', 'O', 'Ö', 'P', 
    'R', 'S', 'Ş', 'T', 'U', 'Ü', 'V', 'Y', 'Z'
];

const alphabetDiv = document.getElementById('alphabet');
if (alphabetDiv) {
    alphabetDiv.innerHTML = turkishAlphabet
        .map(letter => `<a href="#letter-${letter}">${letter}</a>`)
        .join("\n");
}

const searchInput = document.getElementById('searchInput');
const dictionary = document.querySelector('.dictionary');

if (searchInput && dictionary) {
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const words = dictionary.querySelectorAll('.word');
        words.forEach(word => {
            word.style.display = word.textContent.toLowerCase().includes(query) ? '' : 'none';
        });
    });
}

const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            themeToggle.textContent = '☀️';
        } else {
            themeToggle.textContent = '🌙';
        }
    });
}

const alphabetLinks = document.querySelectorAll('.alphabet a');
alphabetLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
