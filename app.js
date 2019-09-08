console.log('Website made by Conor Bailey (www.conbailey.com)')

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');
const navLink = document.querySelectorAll(".nav-link");

menuToggle.addEventListener('click', menTog);
navLink.forEach(function(elem) {
    elem.addEventListener("click", menTog);
  });

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


  // Smooth scroll script
const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800
  });