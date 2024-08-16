const toggleButton = document.getElementById('toggle-dark-mode');
const bodyElement = document.body;

toggleButton.addEventListener('click', () => {
    bodyElement.classList.toggle('dark-mode');
});
