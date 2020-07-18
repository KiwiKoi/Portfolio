// Automatically update copright year
document.addEventListener("DOMContentLoaded", function () {
  const yearSpan = document.querySelector(".copyright-year");
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;
});
