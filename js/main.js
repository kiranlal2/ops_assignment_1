// component link

function loadHTML(selector, url) {
    fetch(url)
        .then(response => response.text())
        .then(html => document.querySelector(selector).innerHTML = html)
        .catch(error => console.error('Error loading HTML:', error));
}

loadHTML('#header', './components/header.html');
loadHTML('#footer', './components/footer.html');

// Toggle menu for mobile view
function toggleMenu() {
    const menu = document.querySelector('.nav-links');
    menu.classList.toggle('active');
}