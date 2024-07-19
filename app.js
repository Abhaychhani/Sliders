let imgs = document.querySelectorAll(".images > img");
let slideBtn = document.querySelectorAll(".content > .slide");
let indexNumber = 0;

Array.from(slideBtn).forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.name === "chevron-forward-outline") {
      if (indexNumber < imgs.length - 1) {
        indexNumber++;
      } else {
        indexNumber = 0;
      }
    } else if (e.target.name === "chevron-back-outline") {
      if (indexNumber > 0) {
        indexNumber--;
      } else {
        indexNumber = imgs.length - 1;
      }
    }
    showImg(indexNumber);
  });
});
function showImg(index) {
  indexNumber = index;
  for (let i = 0; i < imgs.length; i++) {
    if (i == indexNumber) {
      imgs[i].style.display = "block";
      document.querySelectorAll(".btm-sliders span")[i].style.background =
        "white";
    } else {
      imgs[i].style.display = "none";
      document.querySelectorAll(".btm-sliders span")[i].style.background =
        "rgba(255,255,255,0.2)";
    }
  }
  imgs[index].style.display = "block";
}
