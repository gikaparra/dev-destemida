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
