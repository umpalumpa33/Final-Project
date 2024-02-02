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

function checkRequest() {
  let nameInput = document.getElementById("nameInput");
  let emailInput = document.getElementById("emailInput");
  let phoneInput = document.getElementById("phoneInput");
  let subjectInput = document.getElementById("subjectInput");
  let messageInput = document.getElementById("messageInput");
  let nameValue = nameInput.value;
  let emailValue = emailInput.value;
  let phoneValue = phoneInput.value;
  let subjectValue = subjectInput.value;
  let messageValue = messageInput.value;
  let index = true;

  function emailCheck(content) {
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(content);
  }

  function phoneCheck(content) {
    let pattern = /^\+995/;
    return pattern.test(content);
  }

  if (nameValue.trim() === "") {
    alert(`Name input is mandatory!`);
    index = false;
  } else if (emailCheck(emailValue) == false) {
    alert(`The email must be in the correct format `);
    index = false;
  } else if (phoneCheck(phoneValue) && phoneValue.length != 13) {
    alert(`Phone number should start with +995 and be 12 digits`); // ამაზე შეკითხვა არ დამავიწყდეს (phoneCheck(phoneValue) == false
    index = false;
  } else if (subjectValue.length < 5) {
    alert(`Subject should be more than 5 characters`);
    index = false;
  } else if (messageValue.trim() === "") {
    alert(`Message is mandatory!`);
    index = false;
  }
}
