let currentIndex = 1;

function changeImage(n) {
  currentIndex += n;
  showImage(currentIndex);
} // changing index of image selector

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

function setActive(activeButtonId) {
  document
    .querySelectorAll(".nav_button")
    .forEach((button) => button.classList.remove("active"));

  document.getElementById(activeButtonId).classList.add("active");
}

function toggleModal() {
  var button = document.getElementById("header_btn");
  var closeButton = document.getElementById("modal_close");
  var modal = document.getElementById("modal");

  if (
    modal.style.display === "none" ||
    (modal.style.display === "" && closeButton.style.display === "none") ||
    closeButton.style.display === ""
  ) {
    var buttonRect = button.getBoundingClientRect();
    var modalWidth = modal.clientWidth;

    modal.style.top = buttonRect.bottom + window.scrollY + "px";
    modal.style.left = buttonRect.right + window.scrollX - modalWidth + "px";
    modal.style.display = "block";
    closeButton.style.display = "block";
  } else {
    modal.style.display = "none";
    closeButton.style.display = "none";
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
  let phoneTrim = phoneValue.trim("");

  function emailCheck(content) {
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(content);
  }

  function phoneCheck(content) {
    let pattern = /^\995/;
    return pattern.test(content);
  }

  if (
    nameValue.trim() === "" &&
    emailValue.trim() === "" &&
    phoneValue.trim() === "" &&
    subjectValue.trim() === "" &&
    messageValue.trim() === ""
  ) {
    alert("Fill all the inputs!");
  } else if (nameValue.trim() === "") {
    alert(`Name input is mandatory!`);
  } else if (emailCheck(emailValue) == false) {
    alert(`The email must be in the correct format `);
  } else if (!phoneCheck(phoneValue) || phoneTrim.length !== 12) {
    alert(`Phone number should start with +995 and be 12 digits`); // + არ აღიქვამს ვიტირე კინაღამ (მაგრამ console.log-ებით კარგად იტესტება რა არის შეცდომა)
  } else if (subjectValue.length < 5) {
    alert(`Subject should be more than 5 characters`);
  } else if (messageValue.trim() === "") {
    alert(`Message is mandatory!`);
  }
}

const menuButton = document.getElementById("blue_menu_img");
menuButton.addEventListener("click", function createMenu() {
  let aLinks = document.querySelector(".a_links");
  let headerImage = document.getElementById("slider_img");
  let imageStyle = window.getComputedStyle(headerImage);
  let imageTop = imageStyle.top;
  if (aLinks.style.display == "none" || aLinks.style.display == "") {
    aLinks.style.display = "flex";
    aLinks.style.flexDirection = "column";
    aLinks.style.justifyContent = "right";
    aLinks.style.width = "fit-content";
    headerImage.style.top = imageTop + "7vh";
  } else {
    let updatedImageTop = window.getComputedStyle(headerImage);
    aLinks.style.display = "none";
    headerImage.style.top = updatedImageTop - "7vh";
  }
});
