const icons = [
  {
    path: "",
    className: "ph ph-github-logo",
  },
  {
    path: "",
    className: "ph ph-linkedin-logo",
  },
  {
    path: "",
    className: "ph ph-envelope-simple",
  },
  {
    path: "",
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
  techsList.appendChild(li);
});
