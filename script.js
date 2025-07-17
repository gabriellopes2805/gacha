document.addEventListener("DOMContentLoaded", () => {
  const lootElement = document.getElementById("loot");

  const imagens = [
    "images/3dTralalero.png",
    "images/celula.png",
    "images/cilider.png",
    "images/crayolaGuy.png",
    "images/Dinossaur.png",
    "images/dog.png",
    "images/exodiaRightLeg.png",
    "images/fire.jpg",
    "images/fish.png",
    "images/J.png",
    "images/lego456.png",
    "images/mineBrush.png",
    "images/patrulhaCanina.png",
    "images/randomGuy.png",
    "images/seriousRobloxCow.png",
    "images/trator.png",
  ];

  const aleatoria = imagens[Math.floor(Math.random() * imagens.length)];

  lootElement.style.backgroundImage = `url("${aleatoria}")`;
});
