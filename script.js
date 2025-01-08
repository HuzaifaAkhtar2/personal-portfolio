// Dark Mode Toggle Script
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Switch the emoji based on the current theme
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = '🌙'; // Sun emoji for light mode
        document.querySelector('.img').src = "assets/favicon-32x32w.png"

    } else {
        toggleButton.textContent = '☀️'; // Moon emoji for dark mode
        document.querySelector('.img').src = "assets/favicon-32x32.png"
    }
});
