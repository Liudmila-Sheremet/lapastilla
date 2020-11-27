const images = [
  "img/apricot.jpg",
  "img/grapes.jpg",
  "img/plum.jpg",
  "img/raspberry.jpg",
  "img/pear.jpg",
];
let currentIdx = 0;
function slide() {
  currentIdx = ++currentIdx > images.length - 1 ? 0 : currentIdx;
  showSlide(currentIdx);
}
setInterval(slide, 4000);
function back() {
  currentIdx = --currentIdx < 0 ? images.length - 1 : currentIdx;
  showSlide(currentIdx);
}
document.querySelector(".carousel .btn-back").addEventListener("click", back);
function showSlide(idx) {
  document.querySelector(".carousel img").src = images[idx];
}
function forward() {
  currentIdx = ++currentIdx > images.length - 1 ? 0 : currentIdx;
  showSlide(currentIdx);
}
document
  .querySelector(".carousel .btn-forward")
  .addEventListener("click", forward);
function showSlide(idx) {
  document.querySelector(".carousel img").src = images[idx];
}
