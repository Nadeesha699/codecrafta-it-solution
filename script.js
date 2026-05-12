// ---- SIDEBAR ----
function openSidebar() {
  document.getElementById("sidebar").classList.add("open");
  document.getElementById("sidebar-overlay").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeSidebar() {
  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("sidebar-overlay").classList.remove("open");
  document.body.style.overflow = "";
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeSidebar();
});

// ---- NAVBAR SCROLL SHADOW ----
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  nav.style.boxShadow =
    window.scrollY > 50 ? "0 4px 32px rgba(0,0,0,0.5)" : "none";
});

function applyTheme(mode) {
  const html = document.documentElement;
  const thumb = document.getElementById("toggleThumb");

  if (mode === "dark") {
    html.classList.add("dark");

    thumb.innerHTML = "🌙";
    thumb.classList.remove("translate-x-8");
  } else {
    html.classList.remove("dark");

    thumb.innerHTML = "☀️";
    thumb.classList.add("translate-x-8");
  }

  localStorage.setItem("theme", mode);
}

function toggleTheme() {
  const isDark = document.documentElement.classList.contains("dark");
  applyTheme(isDark ? "light" : "dark");
}

(function () {
  const saved = localStorage.getItem("theme") || "dark";
  applyTheme(saved);
})();

 document
    .getElementById("contactForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;

      // Open Gmail compose window
      const gmailLink =
        `https://mail.google.com/mail/?view=cm&fs=1&to=ceytrixsoft@gmail.com` +
        `&su=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(
          "Name: " +
            name +
            "\nEmail: " +
            email +
            "\n\nMessage:\n" +
            message
        )}`;

      window.open(gmailLink, "_blank");

      // Show Toast
      const toast = document.getElementById("toast");
      toast.classList.remove("hidden");

      setTimeout(() => {
        toast.classList.add("hidden");
      }, 3000);

      // Reset Form
      document.getElementById("contactForm").reset();
    });