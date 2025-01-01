// Array of Turkish alphabet letters
const turkishAlphabet = [
    'A', 'B', 'C', 'Ç', 'D', 'E', 'F', 'G', 'Ğ', 'H', 
    'I', 'İ', 'J', 'K', 'L', 'M', 'N', 'O', 'Ö', 'P', 
    'R', 'S', 'Ş', 'T', 'U', 'Ü', 'V', 'Y', 'Z'
];

// DOM elements
const alphabetTabs = document.getElementById('alphabetTabs');
const searchInput = document.getElementById('searchInput');
const dictionary = document.querySelector('.dictionary');
const tabContent = document.getElementById('tabContent');

// Populate alphabet navigation with tabs
function populateAlphabetTabs() {
    if (alphabetTabs) {
        alphabetTabs.innerHTML = turkishAlphabet
            .map(letter => `<button id="tab-${letter}" role="tab" aria-selected="false" aria-controls="letter-${letter}">${letter}</button>`)
            .join('');
    }

    // Set the first tab as active
    if (alphabetTabs.children.length > 0) {
        alphabetTabs.children[0].setAttribute('aria-selected', 'true');
        document.getElementById('letter-A').style.display = 'block';
    }

    // Add click event listeners for tab switching
    const tabButtons = alphabetTabs.querySelectorAll('button');
    tabButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const letter = e.target.id.replace('tab-', '');
            showTab(letter);
        });
    });
}

// Function to show the selected tab
function showTab(letter) {
    // Hide all tab panels
    const tabPanels = document.querySelectorAll('.tab-panel');
    tabPanels.forEach(panel => panel.style.display = 'none');

    // Show the selected tab panel
    const selectedPanel = document.getElementById(`letter-${letter}`);
    if (selectedPanel) {
        selectedPanel.style.display = 'block';
    }

    // Update aria-selected attributes for tabs
    const tabs = alphabetTabs.querySelectorAll('button');
    tabs.forEach(tab => {
        tab.setAttribute('aria-selected', tab.id === `tab-${letter}` ? 'true' : 'false');
    });

    // Clear search when changing tabs
    if (searchInput) {
        searchInput.value = '';
        searchWord(); // This will show all words for the new tab
    }
}

// Search functionality
function searchWord() {
    const query = searchInput.value.toLowerCase();
    const currentTab = document.querySelector('.tab-panel[style="display: block;"]');
    if (currentTab) {
        const words = currentTab.querySelectorAll('.word');
        words.forEach(word => {
            const wordText = word.querySelector('h3').textContent.toLowerCase();
            word.style.display = wordText.includes(query) ? '' : 'none';
        });
    }
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
    populateAlphabetTabs();
    if (searchInput) {
        searchInput.addEventListener('input', searchWord);
    }
});
