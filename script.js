const imagens = document.getElementById("imagens");
const btnAnterior = document.getElementById("anterior");
const btnProximo = document.getElementById("proximo");

const totalImagens = imagens.children.length;
let indiceAtual = 0;

function atualizarCarousel() {
  const largura = imagens.children[0].offsetWidth;
  imagens.style.transform = `translateX(${-indiceAtual * largura}px)`;
}

btnProximo.addEventListener("click", () => {
  if (indiceAtual < totalImagens - 1) {
    indiceAtual++;
  } else {
    indiceAtual = 0;
  }
  atualizarCarousel();
});

btnAnterior.addEventListener("click", () => {
  if (indiceAtual > 0) {
    indiceAtual--;
  } else {
    indiceAtual = totalImagens - 1;
  }
  atualizarCarousel();
});
