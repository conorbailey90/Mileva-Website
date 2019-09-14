console.log('Website made by Conor Bailey (www.conbailey.com)')

// Navigation Selectors / settings
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');
const navLink = document.querySelectorAll(".nav-link");
const navLogo = document.querySelector('.logo');
const splashScreen = document.querySelector('.splash-screen');


window.onload = function(){
  setTimeout(function(){
    splashScreen.classList.add('no-display')}, 1500
  )};

console.log(navLogo);

menuToggle.addEventListener('click', menTog);
navLink.forEach(function(elem) {
    elem.addEventListener("click", menTog);
  });

navLogo.addEventListener('click', menTog);

window.onscroll = function(){
  let top = window.scrollY;

  if (top < 50){
    navigation.classList.remove('scrolled');
  }else{
    navigation.classList.add('scrolled');
  }
}

function menTog() {
    menuToggle.classList.toggle("active");
    navigation.classList.toggle("active");
  }


// Press photo gallery settings

const current = document.querySelector('#current');
const opacity = 0.6;

const imgs = document.querySelectorAll('.imgs img');

//Set first image opacity

imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e){
  imgs.forEach(img => (img.style.opacity = 1 ));

  current.src = e.target.src;

  // Add fade in class

  current.classList.add('fade-in');

  // Remove fade in class after 0.5s

  setTimeout(()=> current.classList.remove('fade-in'), 500);

  e.target.style.opacity =opacity;
}

  // Smooth scroll script
const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800
  });