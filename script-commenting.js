// comment

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}



document.getElementById('submit').addEventListener('click', (event) => {
  let element_display = document.getElementById('display');
  element_display.innerText = getNumberOrString(document.getElementById('input').value);

});


document.getElementById('remove').addEventListener('click', (event) => {
  let element_display2 = document.getElementById('display');
  element_display2.replaceChildren();

});

// hamburger menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
