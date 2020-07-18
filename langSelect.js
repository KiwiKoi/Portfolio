// Language selector
function langChange(el) {
  document.body.setAttribute("lang", el.value);
}

// language reload anchors
let dataReload = document.querySelectorAll("[data-reload]");

// Translations
let langdata = {
  eng: {
    heading: "Hi I'm Daniel",
    subtitle: "Front-end Developer",
    skillsNav: "Skills",
    portfolioNav: "Portfolio",
    contactNav: "Contact",
  },
  fr: {
    heading: "Bonjour, je suis Daniel",
    subtitle: "Développeur frontend",
    skillsNav: "Compétences",
    portfolioNav: "Portfolio",
    contactNav: "Contact",
  },
};
