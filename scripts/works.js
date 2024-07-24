const works = [
  {
    path: "https://euerickap.github.io/devlinks/",
    imageUrl: "assets/devlinks.webp",
    imageAlt: "Imagem do projeto DevLinks",
    date: "07/2023",
    title: "DevLinks",
  },
  {
    path: "https://euerickap.github.io/doctorcare/",
    imageUrl: "assets/doctorcare.webp",
    imageAlt: "Imagem do projeto DoctorCare",
    date: "07/2022",
    title: "DoctorCare",
  },
];

const worksList = document.querySelector(".works");

works.forEach((item) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  const div = document.createElement("div");
  const img = document.createElement("img");
  const h4 = document.createElement("h4");
  const span = document.createElement("span");

  a.href = item.path;

  img.src = item.imageUrl;
  img.alt = item.imageAlt;

  span.textContent = item.date;

  h4.textContent = item.title;

  worksList.appendChild(li);
  li.appendChild(a);
  a.appendChild(div);
  div.appendChild(img);
  a.appendChild(span);
  a.appendChild(h4);
});
