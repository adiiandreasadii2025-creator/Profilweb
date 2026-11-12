// ==============================
// 1. MENU NAVIGASI UNTUK HP
// ==============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
  const menuIsOpen = navLinks.classList.toggle("active");

  menuToggle.setAttribute("aria-expanded", menuIsOpen);
  menuToggle.setAttribute(
    "aria-label",
    menuIsOpen ? "Tutup menu" : "Buka menu"
  );
});

// Tutup menu setelah salah satu tautan navigasi dipilih.
document.querySelectorAll(".nav-links a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Buka menu");
  });
});

// ==============================
// 2. TAHUN OTOMATIS DI FOOTER
// ==============================

const currentYear = document.getElementById("currentYear");
currentYear.textContent = new Date().getFullYear();

// ==============================
// 3. PESAN DI CONSOLE
// ==============================

console.log("Website profil Andreas Adii berhasil dimuat.");
