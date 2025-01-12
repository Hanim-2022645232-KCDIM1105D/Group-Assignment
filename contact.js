const checkbox = document.querySelector('input[type="checkbox"]');
const submitButton = document.querySelector('.submit-button');

checkbox.addEventListener('change', () => {
    submitButton.disabled = !checkbox.checked;
});
