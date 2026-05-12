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

// ==========================================
// CEYTRIXSOFT ADVANCED AI CHATBOT
// FULL RESPONSIVE AI CHATBOT
// Sinhala + Tamil + English + Singlish
// ==========================================

(function () {

  // =========================
  // ELEMENTS
  // =========================

  const toggleBtn = document.getElementById("chatbotToggle");
  const chatbotWindow = document.getElementById("chatbotWindow");
  const closeBtn = document.getElementById("chatbotClose");
  const messagesEl = document.getElementById("chatbotMessages");
  const inputEl = document.getElementById("chatbotText");
  const sendBtn = document.getElementById("chatbotSend");

  // =========================
  // CHAT HISTORY
  // =========================

  let chatHistory = [];

  // =========================
  // OPEN / CLOSE CHATBOT
  // =========================

  toggleBtn.addEventListener("click", () => {

    if (chatbotWindow.classList.contains("hidden")) {

      chatbotWindow.classList.remove("hidden");
      chatbotWindow.classList.add("flex");
      toggleBtn.classList.add("hidden");

    } else {

      chatbotWindow.classList.add("hidden");
      chatbotWindow.classList.remove("flex");
      toggleBtn.classList.remove("hidden");

    }

    // Greeting once
    if (!messagesEl.dataset.greeted) {

      addBotMessage(`
👋 Welcome to Ceytrixsoft IT Solutions

I'm your Smart AI Assistant.

🌍 Languages:
• English
• Sinhala
• Tamil
• Singlish

💻 Services:
• Web Development
• Software Development
• Mobile Apps
• UI/UX Design
• AI Solutions
• Cyber Security
• Cloud Systems
• SEO & Marketing
• Database Systems
• Hosting & DevOps

Ask me anything 😊
      `);

      messagesEl.dataset.greeted = "true";
    }

  });

  // =========================
  // CLOSE BUTTON
  // =========================

  closeBtn.addEventListener("click", () => {

    chatbotWindow.classList.add("hidden");
    chatbotWindow.classList.remove("flex");
toggleBtn.classList.remove("hidden");

  });

  // =========================
  // ADD MESSAGE
  // =========================

  function addMessage(text, type) {

    const wrapper = document.createElement("div");

    wrapper.className = `
      flex
      ${type === "user"
        ? "justify-end"
        : "justify-start"}
    `;

    const msg = document.createElement("div");

    msg.className = `
      max-w-[85%]
      px-4
      py-3
      rounded-2xl
      whitespace-pre-line
      text-sm
      leading-6
      shadow-lg
      ${type === "user"
        ? "bg-blue-600 text-white rounded-br-sm"
        : "bg-slate-800 text-white rounded-bl-sm"}
    `;

    msg.innerText = text;

    wrapper.appendChild(msg);

    messagesEl.appendChild(wrapper);

    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function addBotMessage(text) {
    addMessage(text, "bot");
  }

  function addUserMessage(text) {
    addMessage(text, "user");
  }

  // =========================
  // THINKING ANIMATION
  // =========================

  function showTyping() {

    const typing = document.createElement("div");

    typing.id = "typing";

    typing.className = "flex justify-start";

    typing.innerHTML = `

      <div class="bg-slate-800 text-white px-4 py-3 rounded-2xl rounded-bl-sm flex items-center gap-3 shadow-lg">

        <span class="text-sm text-slate-300">
          Thinking
        </span>

        <div class="flex gap-1">

          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>

        </div>

      </div>

    `;

    messagesEl.appendChild(typing);

    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function removeTyping() {

    const typing = document.getElementById("typing");

    if (typing) {
      typing.remove();
    }
  }

  // =========================
  // LANGUAGE DETECTION
  // =========================

  function detectLanguage(text) {

    const sinhalaPattern = /[\u0D80-\u0DFF]/;
    const tamilPattern = /[\u0B80-\u0BFF]/;

    if (sinhalaPattern.test(text)) {
      return "sinhala";
    }

    if (tamilPattern.test(text)) {
      return "tamil";
    }

    // Singlish words
    if (
      text.toLowerCase().includes("machan") ||
      text.toLowerCase().includes("mokak") ||
      text.toLowerCase().includes("kohomada") ||
      text.toLowerCase().includes("hari") ||
      text.toLowerCase().includes("mage") ||
      text.toLowerCase().includes("eka")
    ) {
      return "singlish";
    }

    return "english";
  }

  // =========================
  // AI RESPONSE ENGINE
  // =========================

  function getAdvancedReply(message) {

    const q = message.toLowerCase();

    const language = detectLanguage(message);

    // =========================================
    // GREETINGS
    // =========================================

    if (/hello|hi|hey|good morning|good evening/.test(q)) {

      return `
Hello 👋

Welcome to Ceytrixsoft IT Solutions.

How can I assist you today?
      `;
    }

    if (/ayubowan|machan|kohomada|suba/.test(q)) {

      return `
ආයුබෝවන් 👋

Ceytrixsoft IT Solutions වෙත සාදරයෙන් පිළිගන්නවා.

Website development, software systems, mobile apps, AI systems, UI/UX design සහ cloud solutions පිළිබඳ ඔබට උදව් කරන්න පුළුවන් 😊
      `;
    }

    if (/vanakkam|epadi|ungal/.test(q)) {

      return `
வணக்கம் 👋

Ceytrixsoft IT Solutions-க்கு வரவேற்கிறோம்.

Software development, mobile apps, AI systems மற்றும் web solutions பற்றிய உதவிகளை வழங்க முடியும் 😊
      `;
    }

    // =========================================
    // WEBSITE DEVELOPMENT
    // =========================================

    if (/website|web development|web app|portfolio|ecommerce|e-commerce/.test(q)) {

      if (language === "sinhala" || language === "singlish") {

        return `
🌐 Website Development Services

අපි develop කරන systems:

• Company Websites
• E-commerce Websites
• Portfolio Websites
• School Management Systems
• Hotel Booking Systems
• POS Systems
• LMS Platforms
• Custom Web Applications

💻 Technologies:

• HTML
• Tailwind CSS
• JavaScript
• React JS
• Node JS
• PHP Laravel
• MySQL
• Firebase

Responsive, fast, SEO optimized modern systems develop කරනවා 🚀
        `;
      }

      return `
🌐 Website Development

We develop:

• Company Websites
• E-commerce Websites
• Booking Systems
• Portfolio Websites
• POS Systems
• LMS Platforms
• Custom Web Applications

💻 Technologies:

• HTML
• Tailwind CSS
• JavaScript
• React
• Node JS
• Laravel
• Firebase
      `;
    }

    // =========================================
    // MOBILE APP
    // =========================================

    if (/mobile|android|ios|flutter|react native|app/.test(q)) {

      return `
📱 Mobile App Development

We build:

• Android Applications
• iOS Applications
• Business Apps
• Delivery Apps
• E-commerce Apps
• Educational Apps
• Taxi Booking Apps

⚡ Technologies:

• Flutter
• React Native
• Firebase
• Kotlin
• Java
      `;
    }

    // =========================================
    // AI SOLUTIONS
    // =========================================

    if (/ai|chatbot|artificial intelligence|machine learning/.test(q)) {

      return `
🤖 AI Solutions

We develop:

• AI Chatbots
• WhatsApp Bots
• Voice Assistants
• AI Customer Support Systems
• AI Automation Systems
• Recommendation Systems

⚡ Technologies:

• OpenAI APIs
• Python
• TensorFlow
• NLP Systems
• Firebase
• Node JS
      `;
    }

    // =========================================
    // UI UX
    // =========================================

    if (/ui|ux|figma|design/.test(q)) {

      return `
🎨 UI/UX Design

We create:

• Modern Dashboards
• Landing Pages
• Mobile App UI
• Admin Panels
• SaaS Interfaces
• Interactive Prototypes

🛠 Tools:

• Figma
• Adobe XD
• Photoshop
      `;
    }

    // =========================================
    // DATABASE
    // =========================================

    if (/database|mysql|mongodb|firebase|sql/.test(q)) {

      return `
🗄 Database Solutions

Supported databases:

• MySQL
• MongoDB
• PostgreSQL
• Firebase
• SQL Server

We create scalable, secure and optimized database systems.
      `;
    }

    // =========================================
    // CYBER SECURITY
    // =========================================

    if (/security|cyber|firewall|hacking|protection/.test(q)) {

      return `
🔐 Cyber Security Services

We provide:

• Website Security
• Server Protection
• Firewall Configuration
• Malware Removal
• SSL Integration
• Authentication Systems
• Security Audits

Enterprise-grade protection for your business 🚀
      `;
    }

    // =========================================
    // CLOUD / HOSTING
    // =========================================

    if (/cloud|hosting|server|aws|vps/.test(q)) {

      return `
☁ Cloud & Hosting Solutions

Services:

• VPS Hosting
• Cloud Deployment
• AWS Setup
• cPanel Hosting
• Domain Configuration
• Server Management

Fast, secure and scalable infrastructure solutions.
      `;
    }

    // =========================================
    // SEO
    // =========================================

    if (/seo|marketing|google ranking/.test(q)) {

      return `
📈 SEO & Digital Marketing

Services:

• SEO Optimization
• Google Ranking
• Performance Optimization
• Social Media Marketing
• Branding Solutions
• Technical SEO

Grow your online presence 🚀
      `;
    }

    // =========================================
    // PRICING
    // =========================================

    if (/price|pricing|budget|cost|package/.test(q)) {

      return `
💰 Pricing Information

Project pricing depends on:

• Features
• Project complexity
• UI/UX requirements
• API integrations
• Hosting needs
• Timeline

Send your project details for a custom quotation 😊
      `;
    }

    // =========================================
    // CONTACT
    // =========================================

    if (/contact|phone|email|call|number/.test(q)) {

      return `
📞 Contact Information

📱 Phone:
+94 77 123 4567

📧 Email:
info@ceytrixsoft.com

🌐 Website:
www.ceytrixsoft.com
      `;
    }

    // =========================================
    // THANK YOU
    // =========================================

    if (/thank|thanks|thank you|sthuthi/.test(q)) {

      if (language === "sinhala" || language === "singlish") {

        return `
බොහොම ස්තූතියි 😊

තවත් ප්‍රශ්නයක් තියෙනවා නම් අහන්න.
මම උදව් කරන්න සූදානම් 🚀
        `;
      }

      return `
You're welcome 😊

Feel free to ask anything anytime 🚀
      `;
    }

    // =========================================
    // GOODBYE
    // =========================================

    if (/bye|goodbye|see you/.test(q)) {

      return `
👋 Thank you for contacting Ceytrixsoft IT Solutions.

Have a great day 😊
      `;
    }

    // =========================================
    // SMART FALLBACK
    // =========================================

    return `
🤖 I understand your message.

I can help with:

💻 Software Development
🌐 Website Development
📱 Mobile Apps
🎨 UI/UX Design
🤖 AI Chatbots
☁ Cloud Systems
🔐 Cyber Security
📊 Databases
🚀 DevOps
📈 SEO

Please ask your question in:
English / Sinhala / Tamil / Singlish 😊
    `;
  }

  // =========================
  // SEND MESSAGE
  // =========================

  function sendMessage() {

    const text = inputEl.value.trim();

    if (!text) return;

    // Save user history
    chatHistory.push({
      role: "user",
      content: text
    });

    addUserMessage(text);

    inputEl.value = "";

    showTyping();

    // Simulate AI thinking
    setTimeout(() => {

      removeTyping();

      const reply = getAdvancedReply(text);

      // Save bot history
      chatHistory.push({
        role: "assistant",
        content: reply
      });

      addBotMessage(reply);

    }, 1200);
  }

  // =========================
  // SEND EVENTS
  // =========================

  sendBtn.addEventListener("click", sendMessage);

  inputEl.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {
      sendMessage();
    }

  });

})();
