(function () {
  const typedTextElement = document.getElementById("typed-text");
  const typingPhrases = [
    "AI Researcher",
    "ML Developer",
    "Tech Explorer",
    "Problem Solver",
    "Barcelona Fan",
  ];

  if (typedTextElement) {
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const currentPhrase = typingPhrases[phraseIndex];

      if (isDeleting) {
        typedTextElement.textContent = currentPhrase.substring(
          0,
          charIndex - 1
        );
        charIndex -= 1;
      } else {
        typedTextElement.textContent = currentPhrase.substring(
          0,
          charIndex + 1
        );
        charIndex += 1;
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => {
          isDeleting = true;
        }, 2000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % typingPhrases.length;
      }

      const typingSpeed = isDeleting ? 50 : 100;
      setTimeout(type, typingSpeed);
    };

    type();
  }

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        fadeObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".fade-in").forEach((element) => {
    fadeObserver.observe(element);
  });

  const navLinks = document.querySelectorAll(".nav-link");
  const currentPath = window.location.pathname.split("/").pop() || "index.html";

  navLinks.forEach((link) => {
    const linkTarget = link.getAttribute("href");

    if (!linkTarget) {
      return;
    }

    const normalizedTarget = linkTarget.replace("./", "");
    const isHomeLink =
      normalizedTarget === "" ||
      normalizedTarget === "/" ||
      normalizedTarget === "index.html";
    const isHomePath =
      currentPath === "" || currentPath === "/" || currentPath === "index.html";

    if ((isHomeLink && isHomePath) || normalizedTarget === currentPath) {
      link.classList.add("active");
    }
  });

  document
    .querySelectorAll(".project-card, .research-paper, .skill-category")
    .forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px) scale(1.02)";
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)";
      });
    });

  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const formData = new FormData(contactForm);
      const data = {};

      formData.forEach((value, key) => {
        data[key] = value;
      });

      fetch("https://hook.eu2.make.com/3ardugz0lrynnm9tix5bereepmsrher9", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.ok) {
            alert("Thank you! Your message has been sent successfully.");
            contactForm.reset();
          } else {
            alert("There was an error sending your message. Please try again.");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("There was an error sending your message. Please try again.");
        });
    });
  }

  const blogCards = document.querySelectorAll(".blog-card");
  const blogSearchInput = document.getElementById("blog-search");
  const filterButtons = document.querySelectorAll(".filter-button");
  const blogDetails = document.querySelectorAll(".blog-detail");
  let activeCategory = "all";

  const filterBlogCards = () => {
    const query = blogSearchInput
      ? blogSearchInput.value.toLowerCase().trim()
      : "";

    if (blogCards.length) {
      blogCards.forEach((card) => {
        const category = card.getAttribute("data-category") || "";
        const tags = card.getAttribute("data-tags") || "";
        const title = card.querySelector("h3")?.textContent || "";
        const summary = card.querySelector("p")?.textContent || "";

        const matchesCategory =
          activeCategory === "all" || category === activeCategory;
        const combinedText = `${title} ${summary} ${tags}`.toLowerCase();
        const matchesQuery = !query || combinedText.includes(query);

        card.style.display = matchesCategory && matchesQuery ? "flex" : "none";
      });
    }

    if (blogDetails.length) {
      blogDetails.forEach((detail) => {
        const category = detail.getAttribute("data-category") || "";
        const tags = detail.getAttribute("data-tags") || "";
        const title = detail.querySelector("h2")?.textContent || "";
        const body = detail.textContent || "";

        const matchesCategory =
          activeCategory === "all" || category === activeCategory;
        const combinedText = `${title} ${tags} ${body}`.toLowerCase();
        const matchesQuery = !query || combinedText.includes(query);

        detail.style.display =
          matchesCategory && matchesQuery ? "flex" : "none";
      });
    }
  };

  if (filterButtons.length) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
        activeCategory = button.getAttribute("data-category") || "all";
        filterBlogCards();
      });
    });
  }

  if (blogSearchInput) {
    blogSearchInput.addEventListener("input", () => {
      filterBlogCards();
    });
  }

  filterBlogCards();

  const blogInternalLinks = document.querySelectorAll(
    ".blog-card-link, .blog-hero-link, .featured-post .btn"
  );

  blogInternalLinks.forEach((link) => {
    const targetId = link.getAttribute("href");

    if (!targetId || !targetId.startsWith("#")) {
      return;
    }

    link.addEventListener("click", (event) => {
      const targetElement = document.querySelector(targetId);

      if (!targetElement) {
        return;
      }

      event.preventDefault();
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      if (typeof targetElement.focus === "function") {
        targetElement.focus({ preventScroll: true });
      }
    });
  });

  const newsletterForm = document.getElementById("newsletter-form");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const emailField = newsletterForm.querySelector("input[name='email']");
      const emailValue = emailField ? emailField.value.trim() : "";

      if (!emailValue) {
        alert("Please add your email before subscribing.");
        return;
      }

      alert("Thanks for subscribing! You'll hear from me soon.");
      newsletterForm.reset();
    });
  }
})();
