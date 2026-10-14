/* Dream Tech site settings: update the WhatsApp number here once if it changes. */
const DREAM_TECH_WHATSAPP = "263779406537";

function makeWhatsAppUrl(message) {
  return `https://wa.me/${DREAM_TECH_WHATSAPP}?text=${encodeURIComponent(message)}`;
}

document.querySelectorAll(".wa-link").forEach(link => {
  const message = link.dataset.waMessage || "Hello Dream Tech, I'd like to discuss a project. Please help me choose the right digital solution for my business.";
  link.href = makeWhatsAppUrl(message);
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");
if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });
  navigation.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }));
}
document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());

/* Keep the opening animation brief and show it only once per browser session. */
const splash = document.querySelector(".intro-splash");
if (splash) {
  try {
    if (sessionStorage.getItem("dreamTechIntroSeen") === "1" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      splash.remove();
    } else {
      sessionStorage.setItem("dreamTechIntroSeen", "1");
    }
  } catch (_) {
    /* If session storage is unavailable, the short animation still completes normally. */
  }
}
