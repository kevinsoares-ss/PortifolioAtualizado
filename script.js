// Simple Scroll Reveal Logic
      const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      }, observerOptions);

      document
        .querySelectorAll(".reveal")
        .forEach((el) => observer.observe(el));

      // Smooth Scroll
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
          });
        });
      });

      // Header transparency on scroll
      window.addEventListener("scroll", () => {
        const nav = document.querySelector("nav");
        if (window.scrollY > 50) {
          nav.classList.add("py-2", "bg-black/90");
          nav.classList.remove("py-4", "bg-background/70");
        } else {
          nav.classList.add("py-4", "bg-background/70");
          nav.classList.remove("py-2", "bg-black/90");
        }
      });
