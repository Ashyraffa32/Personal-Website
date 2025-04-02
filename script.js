document.getElementById('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            const targetId = this.getAttribute('href');
            window.location.href = targetId;
        });
    });
});