const works = [
  {
    path: "",
    imageUrl: "",
    title: "",
    occupation: "",
  },
  {
    path: "",
    imageUrl: "",
    title: "",
    occupation: "",
  },
];

const worksList = document.querySelector(".works");

works.forEach((item) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  const img = document.createElement("img");
  const h3 = document.createElement("h3");
  const span = document.createElement("span");

  a.href = item.path;

  a.appendChild(span);
  a.appendChild(h3);
  a.appendChild(img);
  li.appendChild(a);
  worksList.appendChild(li);
});
