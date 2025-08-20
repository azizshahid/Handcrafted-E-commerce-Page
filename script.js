// Import AOS library
import AOS from "aos"
import "aos/dist/aos.css"

// Initialize AOS (Animate On Scroll)
document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
    offset: 100,
  })
})

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.getElementById("header")
  if (window.scrollY > 50) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }
})

// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const navLinks = document.querySelector(".nav-links")

if (mobileMenuBtn && navLinks) {
  mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active")
  })
}

// FAQ accordion functionality
document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", function () {
    const faqItem = this.parentElement
    const isActive = faqItem.classList.contains("active")

    // Close all FAQ items
    document.querySelectorAll(".faq-item").forEach((item) => {
      item.classList.remove("active")
    })

    // Open clicked item if it wasn't active
    if (!isActive) {
      faqItem.classList.add("active")
    }
  })
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const headerHeight = document.getElementById("header").offsetHeight
      const targetPosition = target.offsetTop - headerHeight

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  })
})

// Newsletter form submission
const newsletterForm = document.querySelector(".newsletter-form")
if (newsletterForm) {
  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault()
    const email = this.querySelector('input[type="email"]').value

    if (email) {
      alert("Thank you for subscribing! We'll keep you updated with the latest from our artisans.")
      this.querySelector('input[type="email"]').value = ""
    }
  })
}

// Product wishlist functionality
document.querySelectorAll(".wishlist-btn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault()
    this.style.color = this.style.color === "red" ? "" : "red"

    // Add a little animation
    this.style.transform = "scale(1.2)"
    setTimeout(() => {
      this.style.transform = "scale(1)"
    }, 200)
  })
})

// Search functionality
const searchInput = document.querySelector(".search-input")
if (searchInput) {
  searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      e.preventDefault()
      const searchTerm = this.value.trim()
      if (searchTerm) {
        alert(`Searching for: ${searchTerm}`)
        // Here you would typically redirect to a search results page
      }
    }
  })
}

// Add loading animation for images
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("load", function () {
    this.style.opacity = "1"
  })

  // Set initial opacity for smooth loading
  img.style.opacity = "0"
  img.style.transition = "opacity 0.3s ease"
})

// Parallax effect for hero background
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const heroBackground = document.querySelector(".hero-background")
  if (heroBackground) {
    heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`
  }
})

// Add intersection observer for additional animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in")
    }
  })
}, observerOptions)

// Observe elements for animation
document.querySelectorAll(".product-card, .category-card").forEach((el) => {
  observer.observe(el)
})

// Add CSS for intersection observer animations
const style = document.createElement("style")
style.textContent = `
    .animate-in {
        animation: slideInUp 0.6s ease-out forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`
document.head.appendChild(style)
