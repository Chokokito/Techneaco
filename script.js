let est = document.querySelector(".estruturas");
let outras = document.querySelector(".outras");
let logo = document.querySelector(".logo");

est.addEventListener("click", () => {
  window.location.href = "estruturas.html";
});

outras.addEventListener("click", () => {
  window.location.href = "outras.html";
});

logo.addEventListener("click", () => {
  window.location.href = "index.html";
});

// Lista com o nome dos arquivos que você colocar na pasta
const imagens = [
  "foto1.jpg",
  "foto2.jpg",
  "foto3.jpg",
  // só adicionar o nome aqui quando colocar uma imagem nova
];

// Pegando a div onde as imagens vão aparecer
const galeria = document.getElementById("galeria");

// Para cada imagem, cria um <img> e coloca na galeria
imagens.forEach((nomeArquivo) => {
  const img = document.createElement("img");
  img.src = `/imagens/${nomeArquivo}`; // caminho da imagem
  img.alt = nomeArquivo; // texto alternativo (opcional)
  galeria.appendChild(img);
});
