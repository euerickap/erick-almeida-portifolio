const techs = [
  "HTML",
  "CSS",
  "Sass",
  "JavaScript",
  "Git",
  "GitHub",
  "Scrum",
  "Kanban",
  "UI Design",
  "Figma",
];

const techsList = document.querySelector(".techs");

techs.forEach((item) => {
  const li = document.createElement("li");

  li.textContent = item;

  techsList.appendChild(li);
});
