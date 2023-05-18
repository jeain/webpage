const mb1 = document.querySelector(".main_bttn1");
const mb2 = document.querySelector(".main_bttn2");
const hd1 = document.querySelector(".hidden1");
const hd2 = document.querySelector(".hidden2");

mb1.addEventListener("click", () => {
  hd1.classList.toggle("hidden1");
});

mb2.addEventListener("click", () => {
  hd2.classList.toggle("hidden2");
});

function changeImage(strlmage) {
  document.querySelector("library.jpg").src = strlmage;
}