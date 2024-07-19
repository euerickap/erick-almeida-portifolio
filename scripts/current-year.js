const yearText = document.querySelector(".current-year");

const currentYear = new Date().getFullYear();

yearText.textContent = currentYear;
