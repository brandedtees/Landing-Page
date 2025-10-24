document.addEventListener("DOMContentLoaded", () => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true
    });
  
    // Smooth scroll to contact section
    window.scrollToContact = function() {
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    }
  
    // Scroll Spy & Back to Top
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");
    const backToTop = document.getElementById("backToTop");
  
    window.addEventListener("scroll", () => {
      let current = "";
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100; // adjust for navbar height
        const sectionHeight = section.offsetHeight;
  
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
          current = section.getAttribute("id");
        }
      });
  
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
          link.classList.add("active");
        }
      });
  
      // Show/hide back to top button
      if (window.pageYOffset > 300) {
        backToTop.style.display = "block";
      } else {
        backToTop.style.display = "none";
      }
    });
  
    // Scroll to top on button click
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

// Back to Top Scroll & Slide
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Navbar Scroll Effect
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("show");
});

// Close menu when clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("show");
  });
});

// Navbar shrink on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 60) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});

// Lightbox Script
function openLightbox(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = img.src;
  lightbox.classList.add("active");
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("active");
}

// Handle contact form submission with styled message
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('formMessage');
const submitButton = document.getElementById('submitButton');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  submitButton.disabled = true;
  formMessage.textContent = 'Submitting your request...';

  const response = await fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  });

  if (response.ok) {
    formMessage.textContent = 'Thank you! Your message has been sent successfully.';
    form.reset();
  } else {
    formMessage.textContent = 'Oops! Something went wrong. Please try again.';
  }

  submitButton.disabled = false;
});
// Testimonial Slider
let currentSlide = 0;
const slides = document.querySelectorAll(".testimonial-card");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
      dots[i].classList.add("active");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);

// Allow manual dot control
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    currentSlide = i;
    showSlide(i);
  });
});

// Pause carousel animation on hover
const track = document.querySelector(".carousel-track");
if (track) {
  track.addEventListener("mouseover", () => {
    track.style.animationPlayState = "paused";
  });
  track.addEventListener("mouseout", () => {
    track.style.animationPlayState = "running";
  });
}
