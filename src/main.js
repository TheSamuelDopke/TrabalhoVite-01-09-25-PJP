document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu functionality
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const mobileNav = document.getElementById("mobileNav")
  const menuIcon = mobileMenuBtn.querySelector(".menu-icon")
  const closeIcon = mobileMenuBtn.querySelector(".close-icon")

  mobileMenuBtn.addEventListener("click", () => {
    const isOpen = !mobileNav.classList.contains("hidden")

    if (isOpen) {
      mobileNav.classList.add("hidden")
      menuIcon.classList.remove("hidden")
      closeIcon.classList.add("hidden")
    } else {
      mobileNav.classList.remove("hidden")
      menuIcon.classList.add("hidden")
      closeIcon.classList.remove("hidden")
    }
  })

  // Header scroll effect
  const header = document.getElementById("header")
  let isScrolled = false

  function handleScroll() {
    const scrollY = window.scrollY
    const shouldBeScrolled = scrollY > 50

    if (shouldBeScrolled !== isScrolled) {
      isScrolled = shouldBeScrolled
      if (isScrolled) {
        header.classList.add("scrolled")
      } else {
        header.classList.remove("scrolled")
      }
    }
  }

  window.addEventListener("scroll", handleScroll)

  // CTA form submission
  const ctaForm = document.getElementById("ctaForm")
  const emailInput = document.getElementById("emailInput")

  ctaForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const email = emailInput.value
    console.log("[v0] Email submitted:", email)
    alert("Obrigado! Entraremos em contato em breve.")
    emailInput.value = ""
  })

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]')

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        const headerHeight = header.offsetHeight
        const targetPosition = targetElement.offsetTop - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })

        // Close mobile menu if open
        if (!mobileNav.classList.contains("hidden")) {
          mobileNav.classList.add("hidden")
          menuIcon.classList.remove("hidden")
          closeIcon.classList.add("hidden")
        }
      }
    })
  })

  // Add click handlers for all CTA buttons
  const ctaButtons = document.querySelectorAll(".btn-primary, .btn-secondary")

  ctaButtons.forEach((button) => {
    if (button.type !== "submit") {
      button.addEventListener("click", function (e) {
        e.preventDefault()
        console.log("[v0] CTA button clicked:", this.textContent.trim())
        alert("Redirecionando para página de cadastro...")
      })
    }
  })
})

