const dados = {
  Projetos: [
    {
      id: 0,
      titulo: "jogo da cobrar",
      conteudo: "Descrição.",
      imag: "./Assets/Imag/Screenshot_20230118-101956_Acode.jpg",
      url: "https://jogo-da-cobra-wheat.vercel.app/",
    },
    {
      id: 1,
      titulo: "relogio",
      conteudo: "Descrição",
      imag: "./Assets/Imag/Screenshot_20230523-190403_Acode.jpg",
      url: "https://relogio-digital-matheusai.vercel.app/",
    },
    {
      id: 2,
      titulo: "crometro",
      conteudo: "Descrição",
      imag: "Assets/Imag/Screenshot_20230719-120136_Acode.jpg",
      url: "https://cronometro-matheusai.vercel.app/",
    },
    {
      id: 3,
      titulo: "devlinks",
      conteudo: "Descrição",
      imag: "Assets/Imag/Screenshot_20231210-180732_Opera GX.jpg",
      url: "https://matheusai.github.io/DEVLINKS/",
    },
    {
      id: 4,
      titulo: "gerador de senhas API",
      conteudo: "descrição",
      imag: "Assets/Imag/gerado-de-senhas.png",
      url: "",
    },
  ],
};

function criarProjetos() {
  const containerProjetos = document.getElementById("projetos");

  dados.Projetos.forEach((projeto) => {
    const projetoElement = document.createElement("section");
    projetoElement.classList.add("projeto");

    const tituloElement = document.createElement("h2");
    const linkProjeto = document.createElement("a");
    linkProjeto.textContent = projeto.titulo;
    linkProjeto.href = projeto.url;
    tituloElement.appendChild(linkProjeto);

    const conteudoElement = document.createElement("p");
    conteudoElement.textContent = projeto.conteudo;

    const imagemElement = document.createElement("img");
    imagemElement.src = projeto.imag;
    imagemElement.alt = projeto.titulo;

    projetoElement.appendChild(tituloElement);
    projetoElement.appendChild(imagemElement);
    projetoElement.appendChild(conteudoElement);
    containerProjetos.appendChild(projetoElement);
  });
}

window.onload = criarProjetos;
