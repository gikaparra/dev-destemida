// Pega todas as cartas (.card)
const cards = document.querySelectorAll('.card');

// Função para criar e mostrar o toast
function showToast(message) {
  // Cria elemento
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;

  // Adiciona ao body
  document.body.appendChild(toast);

  // Remove após 3 segundos
  setTimeout(() => {
    toast.classList.add('fade-out');
  }, 2500);

  // Remove do DOM depois da animação
  toast.addEventListener('transitionend', () => {
    toast.remove();
  });
}

// Adiciona evento click em cada card
cards.forEach(card => {
  card.addEventListener('click', () => {
    const nome = card.querySelector('p').textContent;
    showToast(`Você clicou em "${nome}"`);
  });
});
// Toast já existente no seu script...

// Código player simples

const trackList = document.getElementById('trackList');
const btnPlayPause = document.getElementById('btnPlayPause');
let currentTrackIndex = null;
let audio = new Audio();
let isPlaying = false;

// Função para tocar uma faixa
function playTrack(index) {
  if (currentTrackIndex === index) {
    // Se clicar na mesma faixa, alterna play/pause
    if (isPlaying) {
      audio.pause();
      isPlaying = false;
      btnPlayPause.textContent = 'Play';
    } else {
      audio.play();
      isPlaying = true;
      btnPlayPause.textContent = 'Pause';
    }
  } else {
    // Trocar faixa
    currentTrackIndex = index;
    audio.src = trackList.children[index].dataset.src;
    audio.play();
    isPlaying = true;
    btnPlayPause.textContent = 'Pause';
    atualizarVisual();
  }
}

// Atualiza a classe active na lista
function atualizarVisual() {
  Array.from(trackList.children).forEach((li, i) => {
    li.classList.toggle('active', i === currentTrackIndex);
  });
}

// Clique nas faixas
trackList.addEventListener('click', e => {
  if (e.target && e.target.nodeName === "LI") {
    const index = Array.from(trackList.children).indexOf(e.target);
    playTrack(index);
  }
});

// Botão play/pause geral
btnPlayPause.addEventListener('click', () => {
  if (currentTrackIndex === null) return; // nada selecionado ainda

  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    btnPlayPause.textContent = 'Play';
  } else {
    audio.play();
    isPlaying = true;
    btnPlayPause.textContent = 'Pause';
  }
});

// Quando a música termina, atualiza o botão e remove o active
audio.addEventListener('ended', () => {
  isPlaying = false;
  btnPlayPause.textContent = 'Play';
  if(currentTrackIndex !== null){
    trackList.children[currentTrackIndex].classList.remove('active');
  }
  currentTrackIndex = null;
});
