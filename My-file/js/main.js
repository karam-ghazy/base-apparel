let mainContainerLeft = document.querySelector(".container .left");
let emailInput = document.querySelector(".contact input");
let emailContainer = document.querySelector(".contact");
let submitBtn = document.querySelector(".contact .submit");
let text = document.querySelector(".text");

submitBtn.onclick = function () {
  let email = emailInput.value;
  let test = validateEmail(email);
  if (!test) {
    let p = document.querySelector(".error-message");
    if (!p) {
      let error = document.createElement("p");
      error.innerHTML = "Please provide a valid email address";
      error.classList.add("error-message");
      emailContainer.classList.add("error");
      emailContainer.appendChild(error);
    }
  } else {
    let p = document.querySelector(".error-message");
    if (p) {
      p.remove();
      emailInput.classList.remove("error");
    }
  }
};

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

//image for mobile screen size
let img = document.createElement("img");
let src = document.createAttribute("src");
srcText = "../images/hero-mobile.jpg";
img.src = srcText;
img.classList.add("img-background-mobile");
window.onload = function () {
  if (window.innerWidth <= 999) {
    mainContainerLeft.insertBefore(img, text);
  } else {
    img.remove();
  }
};

window.onresize = function () {
  if (window.innerWidth <= 999) {
    mainContainerLeft.insertBefore(img, text);
  } else {
    img.remove();
  }
};
