let mainImage = document.querySelector(".content .img img");
let images = document.querySelectorAll(".icons");
let container = document.querySelector(".container");

images.forEach((image) => {
  image.addEventListener("click", function (e) {
    mainImage.src = e.target.src;
  });
});

function colors(color) {
  container.style.backgroundColor = color;
}