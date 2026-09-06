// SPORTIANS WHATSAPP SETTINGS
// Replace this number in index.html wherever you see 91XXXXXXXXXX.
// Use country code + number, with NO + sign, spaces or dashes.
// Example for an Indian number: 919876543210

const SPORTIANS_WHATSAPP_NUMBER = "91XXXXXXXXXX";

function sportiansWhatsApp(message) {
  const url = `https://wa.me/${SPORTIANS_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener");
}

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();
