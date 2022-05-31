const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
const main = document.querySelector('.main');

toggle.addEventListener('click', toggleMenu);

function toggleMenu(){
   navigation.classList.toggle('active'); 
   toggle.classList.toggle('active');
   main.classList.toggle('active');
}