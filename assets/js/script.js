const toggleBtn = document.getElementById('toggle-btn');
const navLinks = document.querySelector('.aside__nav');
const closeBtn = document.getElementById('btn-close');

toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('show')
})