document.querySelectorAll('.questions').forEach(button => {
    button.addEventListener('click', () => {
        const answers = button.nextElementSibling;
        answers.style.display = answers.style.display === 'block' ? 'none' : 'block';
    });
});