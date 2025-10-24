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
  submitButton.textContent = 'Sending...';

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      // Redirect to thank you page
      window.location.href = 'thankyou.html';
    } else {
      formMessage.textContent = 'Oops! Something went wrong. Please try again.';
      formMessage.style.color = '#ff5555';
      submitButton.disabled = false;
      submitButton.textContent = 'Submit Request';
    }
  } catch (error) {
    formMessage.textContent = 'Network error. Please check your connection.';
    formMessage.style.color = '#ff5555';
    submitButton.disabled = false;
    submitButton.textContent = 'Submit Request';
  }
});

if (response.ok) {
  window.open('thankyou.html', '_blank');
  form.reset();
  formMessage.textContent = 'Thank you! Your message has been sent.';
  formMessage.style.color = '#4CAF50';
}

// Tetimonials

document.addEventListener('DOMContentLoaded', function() {
  console.log('Testimonial carousel script loaded');
  
  // Testimonials Carousel
  let testimonialIndex = 0;
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.testimonial-dot');
  const prevBtn = document.querySelector('.testimonial-prev');
  const nextBtn = document.querySelector('.testimonial-next');
  let autoSlideTimer;

  console.log('Found slides:', slides.length);
  console.log('Found dots:', dots.length);

  if (slides.length === 0) {
    console.error('No testimonial slides found!');
    return;
  }

  function showSlide(index) {
    console.log('Showing slide:', index);
    
    // Remove active class from all
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Add active class to current
    if (slides[index]) slides[index].classList.add('active');
    if (dots[index]) dots[index].classList.add('active');
  }

  function nextSlide() {
    testimonialIndex = (testimonialIndex + 1) % slides.length;
    showSlide(testimonialIndex);
  }

  function prevSlide() {
    testimonialIndex = (testimonialIndex - 1 + slides.length) % slides.length;
    showSlide(testimonialIndex);
  }

  function startAutoSlide() {
    autoSlideTimer = setInterval(nextSlide, 5000);
    console.log('Auto-slide started');
  }

  function stopAutoSlide() {
    clearInterval(autoSlideTimer);
    console.log('Auto-slide stopped');
  }

  // Next button
  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      console.log('Next button clicked');
      nextSlide();
      stopAutoSlide();
      startAutoSlide();
    });
  }

  // Previous button
  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      console.log('Prev button clicked');
      prevSlide();
      stopAutoSlide();
      startAutoSlide();
    });
  }

  // Dot navigation
  dots.forEach(function(dot, index) {
    dot.addEventListener('click', function() {
      console.log('Dot clicked:', index);
      testimonialIndex = index;
      showSlide(index);
      stopAutoSlide();
      startAutoSlide();
    });
  });

  // Pause on hover
  const wrapper = document.querySelector('.testimonials-carousel-wrapper');
  if (wrapper) {
    wrapper.addEventListener('mouseenter', stopAutoSlide);
    wrapper.addEventListener('mouseleave', startAutoSlide);
  }

  // Initialize
  showSlide(0);
  startAutoSlide();
  console.log('Carousel initialized');
});
