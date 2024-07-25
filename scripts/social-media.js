const icons = [
  {
    path: "https://github.com/euerickap",
    className: "ph ph-github-logo",
  },
  {
    path: "https://www.linkedin.com/in/erick-frontend/",
    className: "ph ph-linkedin-logo",
  },
  {
    path: "mailto:erick.almeida.86@gmail.com",
    className: "ph ph-envelope-simple",
  },
  {
    path: "https://www.instagram.com/euerickap/",
    className: "ph ph-instagram-logo",
  },
];

const iconsList = document.querySelector(".icons");

icons.forEach((item) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  const i = document.createElement("i");

  a.href = item.path;

  item.className.split(" ").forEach((cls) => i.classList.add(cls));

  a.appendChild(i);
  li.appendChild(a);
  iconsList.appendChild(li);
});
