const loadingTexts = [
  "Initializing System...",
  "Loading Components...",
  "Connecting Database...",
  "Launching Interface...",
  "Almost Ready...",
];

let index = 0;
const loadingElement = document.getElementById("loadingText");
const loader = document.getElementById("loader");
const navbar = document.getElementById("navbar");
const mainContent = document.getElementById("mainContent");

// Show first text immediately
loadingElement.textContent = loadingTexts[0];

// Change loading text
const textInterval = setInterval(() => {
  index++;

  if (index < loadingTexts.length) {
    loadingElement.textContent = loadingTexts[index];
  } else {
    clearInterval(textInterval);
  }
}, 700);

// Loader timeout (5 seconds)
setTimeout(() => {
  clearInterval(textInterval);

  // fade out loader
  loader.classList.add("fade-out");

  setTimeout(() => {
    loader.style.display = "none";

    // show main content
    if (mainContent) {
      mainContent.classList.remove("hidden");
    }

    // show navbar
    if (navbar) {
      navbar.classList.remove("hidden");
    }

    // enable scrolling
    document.body.classList.remove("overflow-hidden");
  }, 800);
}, 5000);

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

emailjs.init("2rxI5irMNBZsGM0HL");

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  Toastify({
    text: "Sending message...",
    duration: 2000,
    gravity: "top",
    position: "right",
  }).showToast();

  const templateParams = {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_yprrdqk", "template_0xgv8xo", templateParams)
    .then(function () {
      Toastify({
        text: "Message Sent Successfully!",
        duration: 3000,
        gravity: "top",
        position: "right",
      }).showToast();

      form.reset();
    })
    .catch(function (error) {
      Toastify({
        text: "Failed To Send Message!",
        duration: 3000,
        gravity: "top",
        position: "right",
      }).showToast();

      console.error("EmailJS Error:", error);
    });
});
