const lootDiv = document.getElementById("loot");
const rollButton = document.getElementById("roll");
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

document.addEventListener("DOMContentLoaded", () => {
  const randomImage = imagens[Math.floor(Math.random() * imagens.length)];

  lootElement.style.backgroundImage = `url("${randomImage}")`;
});

rollButton.addEventListener("click", () => {
  const randomImage = imagens[Math.floor(Math.random() * imagens.length)];
  lootElement.style.backgroundImage = `url("${randomImage}")`;
  restartAnimations();
});

function restartAnimations() {
  const lootDiv = document.getElementById("lootDiv");

  // Remover a animação forçadamente do lootDiv
  lootDiv.style.animation = "none";
  void lootDiv.offsetWidth;
  lootDiv.style.animation = "appear 2s 1 linear forwards"; // Reaplica manualmente

  // Agora reinicia os filhos normalmente
  const animatedElements = lootDiv.querySelectorAll("*");

  animatedElements.forEach((el) => {
    const computedStyle = getComputedStyle(el);
    const currentAnimation = computedStyle.animation;

    // Força reinício
    el.style.animation = "none";
    void el.offsetWidth;
    el.style.animation = currentAnimation;
  });
}
