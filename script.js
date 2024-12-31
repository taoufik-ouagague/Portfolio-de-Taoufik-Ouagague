/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  const menuBtn = document.getElementById("myNavMenu");
  if (menuBtn.className === "nav-menu") {
      menuBtn.className += " responsive";
  } else {
      menuBtn.className = "nav-menu";
  }
}

// Fonction pour gérer la classe active
function setActiveLink() {
  const sections = document.querySelectorAll("section"); // Toutes les sections avec un ID
  const navLinks = document.querySelectorAll(".nav-link"); // Tous les liens de navigation

  let currentSection = "";

  // Vérifie quelle section est visible
  sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      // Ajustement pour une détection plus précise de la section visible
      if (scrollY >= sectionTop - 60 && scrollY < sectionTop + sectionHeight - 60) {
          currentSection = section.getAttribute("id");
      }
  });

  // Met à jour les liens actifs
  navLinks.forEach((link) => {
      link.classList.remove("active-link");
      if (link.getAttribute("href").substring(1) === currentSection) {
          link.classList.add("active-link");
      }
  });
}

// Attache l'événement de défilement
window.addEventListener("scroll", setActiveLink);

// Ajouter un événement de défilement
window.addEventListener("scroll", setActiveLink);

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};

  function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";

    } else {

      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";

    }
  }


/* ----- TYPING EFFECT ----- */
 var typingEffect = new Typed(".typedText",{
    strings : ["Developer","Designer",],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
 })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
 const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
 })

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.media-box',{delay: 100})

srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

// Sélection du bouton
const scrollToTopBtn = document.getElementById('scrollToTop');

// Détecter le défilement pour afficher ou masquer le bouton
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) { // Afficher si on défile plus de 200px
        scrollToTopBtn.classList.add('show');
        scrollToTopBtn.classList.remove('hide');
    } else {
        scrollToTopBtn.classList.remove('show');
        scrollToTopBtn.classList.add('hide');
    }
});

// Scroll vers le haut lorsque l'utilisateur clique
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Défilement fluide
    });
});
$(document).ready(function() {
  $('.customer-logos').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 4 }
      },
      {
        breakpoint: 520,
        settings: { slidesToShow: 3 }
      }
    ]
  });
});

//dark
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('darkMode') === 'enabled') {
      document.body.classList.add('dark-mode');
      document.getElementById('dark-icon').style.display = 'inline-block';
      document.getElementById('light-icon').style.display = 'none';
  } else {
      document.getElementById('dark-icon').style.display = 'none';
      document.getElementById('light-icon').style.display = 'inline-block';
  }
});

function toggleDarkMode() {
  const body = document.body;
  const lightIcon = document.getElementById('light-icon');
  const darkIcon = document.getElementById('dark-icon');

  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
      darkIcon.style.display = 'inline-block';
      lightIcon.style.display = 'none';
  } else {
      localStorage.setItem('darkMode', 'disabled');
      darkIcon.style.display = 'none';
      lightIcon.style.display = 'inline-block';
  }
}
