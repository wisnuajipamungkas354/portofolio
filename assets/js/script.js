const btnSlider = document.querySelector('.btnSlider');
const aside = document.querySelector('aside');
const wrapper = document.querySelector('#wrapper');
const btnNavbar = document.querySelector('#btn-navbar');
const navUl = document.querySelector('header.navbar-container nav ul');

btnSlider.addEventListener('click', function(){
    aside.classList.toggle('show');
    wrapper.classList.toggle('show');
    navUl.classList.remove('show');
})

wrapper.addEventListener('click', function(){
    aside.classList.toggle('show');
    wrapper.classList.toggle('show');
})

btnNavbar.addEventListener('click', function(){
    navUl.classList.toggle('show');
})