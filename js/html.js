
const navSlide = () => {
    const btn = document.querySelector('.navbar__btn');
    const navbar = document.querySelector('.navbar__link');

btn.addEventListener('click', ()=> {
    navbar.classList.toggle('nav-btn-active');
})
}
navSlide();