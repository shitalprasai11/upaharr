// Mobile menu functionality
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIcon = document.getElementById('menuIcon');
  
  mobileMenu.classList.toggle('active');
  menuIcon.textContent = mobileMenu.classList.contains('active') ? '✕' : '☰';
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIcon = document.getElementById('menuIcon');
  
  mobileMenu.classList.remove('active');
  menuIcon.textContent = '☰';
}

// Header scroll effects
let lastScrollTop = 0;
const header = document.getElementById('header');
const topBar = document.getElementById('topBar');

window.addEventListener('scroll', function() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  // Add scrolled class for styling
  if (scrollTop > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  // Hide/show top bar on mobile
  if (window.innerWidth <= 768) {
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scrolling down
      topBar.classList.add('hidden');
    } else {
      // Scrolling up
      topBar.classList.remove('hidden');
    }
  }
  
  lastScrollTop = scrollTop;
});

// Close popup
function closePopup() {
  const popup = document.getElementById('welcomePopup');
  popup.style.animation = 'fadeOut 0.3s ease';
  setTimeout(() => {
    popup.style.display = 'none';
  }, 300);
}

// WhatsApp form submission
function sendWhatsApp(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');
  
  const whatsappMessage = `Contact Form Submission:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
  const whatsappURL = `https://wa.me/9779826980213?text=${encodeURIComponent(whatsappMessage)}`;
  
  window.open(whatsappURL, '_blank');
  event.target.reset();
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = document.querySelector('.header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
  const mobileMenu = document.getElementById('mobileMenu');
  const menuBtn = document.querySelector('.mobile-menu-btn');
  
  if (!mobileMenu.contains(event.target) && !menuBtn.contains(event.target)) {
    closeMobileMenu();
  }
});

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
  // Any initialization code can go here
  console.log('Upahar.np website loaded successfully!');
});