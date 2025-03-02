// Função para trocar o conteúdo da página
function switchContent() {
  const mainPage = document.getElementById("main-page");
  const giftsPage = document.getElementById("gifts-page");

  if (mainPage.style.display !== "none") {
    mainPage.style.display = "none";
    giftsPage.style.display = "block";
  } else {
    mainPage.style.display = "block";
    giftsPage.style.display = "none";
  }
}

window.onload = function () {
  const audioPlayer = document.getElementById("audio-player");
  audioPlayer.play().catch((error) => {
    console.error("Erro ao reproduzir o áudio:", error);
  });
};

// Adiciona o evento de clique ao link de "Presentes"
document
  .getElementById("gifts-link")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    switchContent();
  });

// Adiciona o evento de clique ao link de "Voltar"
document
  .getElementById("back-link")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    switchContent();
  });
