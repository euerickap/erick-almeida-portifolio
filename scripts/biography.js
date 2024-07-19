const paragraphs = [
  "Muito prazer, me chamo Erick e durante minha jornada, tive a oportunidade de conhecer a programação, onde me encontrei profissionalmente.",
  "Estudante de desenvolvimento Front-End, tenho focado na área através de estudos particulares através de cursos livres, bootcamps, eventos e ainda sonho em entrar para uma faculdade.",
  "Busco oportunidade para atuar com desenvolvimento Front-End, seja em estágio ou trabalho volutário. Se você visitou meu site e tem interesse para uma oportunidade, entre em contato por aqui.",
];

const paragraphList = document.querySelector(".biography");

paragraphs.forEach((item) => {
  const p = document.createElement("p");

  p.textContent = item;

  paragraphList.appendChild(p);
});
