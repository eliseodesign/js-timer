const alarma = new Audio("./assets/sound/alarma.mp3");

const hover = new Audio("./assets/sound/hover.mp3");

const lluvia = new Audio("./assets/sound/lluvia.mp3");

const itemLists = document.querySelectorAll(".item-list");

for (let i = 0; i < itemLists.length; i++) {
  itemLists[i].addEventListener("click", () => {
    hover.play();
    // setTimeout(()=>play.onpause(),200)
  });
}

music.addEventListener("click", () => {
  if (lluvia.paused) {
    lluvia.play();
  } else {
    lluvia.pause();
  }
});
