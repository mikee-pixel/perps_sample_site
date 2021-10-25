const navMenu = document.querySelector('.nav-menu');
const burgerButton = document.querySelector('.toggle-btn');

burgerButton.addEventListener('click', activeMobileMenu);

function activeMobileMenu(){
    navMenu.classList.toggle('active');
    burgerButton.classList.toggle('active');
    console.log('Mobile Menu is Clicked!')

}