function setActive(button) {
  document
    .querySelectorAll(".nav-button")
    .forEach((btn) => btn.classList.remove("active"));

  document.getElementById(button).classList.add("active");
}

function toggleModal() {
  var button = document.getElementById("header_btn");
  var modal = document.getElementById("modal");

  if (modal.style.display === "none" || modal.style.display === "") {
    var buttonRect = button.getBoundingClientRect();
    var modalHeight = modal.clientHeight;
    var modalWidth = modal.clientWidth;

    modal.style.top = buttonRect.bottom + window.scrollY + "px";
    modal.style.left = buttonRect.right + window.scrollX - modalWidth + "px";

    modal.style.display = "block";
  } else {
    modal.style.display = "none";
  }
}

var images = [
  "images/slider_first_image.png",
  "images/slider_second_image.png",
  "images/slider_third_image.png",
];

var currentImageIndex = 0;

function changeImage(direction) {
  currentImageIndex += direction;

  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  } else if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  var imageElement = document.getElementById("slider_img");

  imageElement.src = images[currentImageIndex];
}
