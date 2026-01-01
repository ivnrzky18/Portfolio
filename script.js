document.addEventListener("DOMContentLoaded", () => {

  /* ===== GREETING ===== */
  const greeting = document.getElementById("greeting");
  if (greeting) {
    const hour = new Date().getHours();
    let text = "Halo 👋 ";

    if (hour < 11) text += "Selamat Pagi";
    else if (hour < 15) text += "Selamat Siang";
    else if (hour < 18) text += "Selamat Sore";
    else text += "Selamat Malam";

    greeting.textContent = text;
  }

  /* ===== SCROLL REVEAL ===== */
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  /* ===== CONTACT OVERLAY ===== */
  const openContact = document.getElementById("openContact");
  const closeContact = document.getElementById("closeContact");
  const contactOverlay = document.getElementById("contactOverlay");

  if (openContact && closeContact && contactOverlay) {
    openContact.addEventListener("click", () => {
      contactOverlay.classList.add("active");
    });

    closeContact.addEventListener("click", () => {
      contactOverlay.classList.remove("active");
    });

    // klik area luar = close
    contactOverlay.addEventListener("click", (e) => {
      if (e.target === contactOverlay) {
        contactOverlay.classList.remove("active");
      }
    });
  }

});
