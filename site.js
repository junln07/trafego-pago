function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensagem enviada! Em breve entraremos em contato.');
    form.reset();
});
