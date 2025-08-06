document.addEventListener('DOMContentLoaded', () => {
  const carrossel = document.querySelector('.carrossel');
  const btnEsq = document.querySelector('.seta-esq');
  const btnDir = document.querySelector('.seta-dir');

  const imagensVisiveis = 2;
  const imgExemplo = carrossel.querySelector('img');
  const gap = 10;
  let larguraImagem = imgExemplo.clientWidth + gap;
  let posicaoAtual = 0;

  const totalImagens = carrossel.querySelectorAll('img').length;

  function ajustarCarrossel() {
    const maxPosicao = totalImagens - imagensVisiveis;
    if (posicaoAtual > maxPosicao) posicaoAtual = maxPosicao;
    if (posicaoAtual < 0) posicaoAtual = 0;
    carrossel.style.transform = `translateX(-${posicaoAtual * larguraImagem}px)`;
  }

  window.addEventListener('resize', () => {
    larguraImagem = imgExemplo.clientWidth + gap;
    ajustarCarrossel();
  });

  btnDir.addEventListener('click', () => {
    const maxPosicao = totalImagens - imagensVisiveis;
    if (posicaoAtual < maxPosicao) {
      posicaoAtual++;
      ajustarCarrossel();
    }
  });

  btnEsq.addEventListener('click', () => {
    if (posicaoAtual > 0) {
      posicaoAtual--;
      ajustarCarrossel();
    }
  });

  ajustarCarrossel(); // Inicializa o carrossel
});
