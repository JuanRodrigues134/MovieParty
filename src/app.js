document.getElementById("reveal-btn").addEventListener("click", function () {
  // Mostrar confetes
  launchConfetti();

  // Mostrar o poster do filme
  document.getElementById("movie-poster").style.display = "block";

  // Ocultar o botão
  this.style.display = "none";
});

// Função para lançar confetes
function launchConfetti() {
  confetti({
    spread: 100,
    startVelocity: 30,
    particleCount: 100,
    colors: ["#ff0", "#f00", "#0f0", "#00f"],
  });

  // Remove confetes após 5 segundos (se desejar)
  setTimeout(() => {
    // Código adicional aqui, se necessário
  }, 5000);
}
