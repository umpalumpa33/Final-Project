let currentIndex = 1;

function changeImage(n) {
  currentIndex += n;
  showImage(currentIndex);
}

function showImage(index) {
  const images = [
    "images/slider_first_image.png",
    "images/slider_second_image.png",
    "images/slider_third_image.png",
  ];

  if (index > images.length) {
    currentIndex = 1;
  }
  if (index < 1) {
    currentIndex = images.length;
  }

  const imageElement = document.getElementById("slider_img");
  imageElement.src = images[currentIndex - 1];
}

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
    var modalWidth = modal.clientWidth;

    modal.style.top = buttonRect.bottom + window.scrollY + "px";
    modal.style.left = buttonRect.right + window.scrollX - modalWidth + "px";

    modal.style.display = "block";
  } else {
    modal.style.display = "none";
  }
}
