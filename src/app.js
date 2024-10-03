document.getElementById("reveal-btn").addEventListener("click", function () {
  // Mostrar confetes
  launchConfetti();

  // Mostrar o poster do filme
  document.getElementById("movie-poster").style.display = "block";

  // Ocultar o botão
  this.style.display = "none";

  // Resetar a página após 5 segundos
  setTimeout(resetPage, 5000);
});

// Função para lançar confetes
function launchConfetti() {
  confetti({
    spread: 100,
    startVelocity: 30,
    particleCount: 100,
    colors: ["#ff0", "#f00", "#0f0", "#00f"],
  });
}

// Função para resetar a página
function resetPage() {
  // Ocultar o poster do filme
  document.getElementById("movie-poster").style.display = "none";

  // Mostrar o botão novamente
  document.getElementById("reveal-btn").style.display = "inline-block";

  // Remover os confetes (se estiver usando um canvas, você pode redefinir a animação aqui)
  // Se estiver adicionando confetes manualmente ao DOM, eles podem ser removidos com algo como:
  confetti.reset(); // Reseta a animação de confetes se o plugin suporta isso
}
