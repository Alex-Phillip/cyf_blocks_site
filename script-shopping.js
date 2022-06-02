// shopping cart

var count_a, count_b, count_c;


count_a = 0;
count_b = 0;
count_c = 0;


document.getElementById('buy-a').addEventListener('click', (event) => {
  let element_span_a = document.getElementById('span-a');
  count_a = (typeof count_a === 'number' ? count_a : 0) + 1;
  element_span_a.innerText = count_a;

});

document.getElementById('buy-b').addEventListener('click', (event) => {
  let element_span_b = document.getElementById('span-b');
  count_b = (typeof count_b === 'number' ? count_b : 0) + 1;
  element_span_b.innerText = count_b;

});

document.getElementById('buy-c').addEventListener('click', (event) => {
  let element_span_c = document.getElementById('span-c');
  count_c = (typeof count_c === 'number' ? count_c : 0) + 1;
  element_span_c.innerText = count_c;

});

document.getElementById('fav-a').addEventListener('click', (event) => {
  let element_fav_text_a = document.getElementById('fav-text-a');
  element_fav_text_a.innerText = 'Favourited';
  window.speechSynthesis.speak(new SpeechSynthesisUtterance('Yay panda'));

});

document.getElementById('fav-b').addEventListener('click', (event) => {
  let element_fav_text_b = document.getElementById('fav-text-b');
  element_fav_text_b.innerText = 'Favourited';
  window.speechSynthesis.speak(new SpeechSynthesisUtterance('panda! panda! panda!'));

});

document.getElementById('fav-c').addEventListener('click', (event) => {
  let element_fav_text_c = document.getElementById('fav-text-c');
  element_fav_text_c.innerText = 'Favourited';
  window.speechSynthesis.speak(new SpeechSynthesisUtterance('now that\'s a proper panda'));

});

document.getElementById('unfav-a').addEventListener('click', (event) => {
  let element_fav_text_a2 = document.getElementById('fav-text-a');
  element_fav_text_a2.replaceChildren();
  window.speechSynthesis.speak(new SpeechSynthesisUtterance('you don\'t like my panda?'));

});

document.getElementById('unfav-b').addEventListener('click', (event) => {
  let element_fav_text_b2 = document.getElementById('fav-text-b');
  element_fav_text_b2.replaceChildren();
  window.speechSynthesis.speak(new SpeechSynthesisUtterance('Put the panda back on the shelf'));

});

document.getElementById('unfav-c').addEventListener('click', (event) => {
  let element_fav_text_c2 = document.getElementById('fav-text-c');
  element_fav_text_c2.replaceChildren();
  window.speechSynthesis.speak(new SpeechSynthesisUtterance('You say panda I say pando'));

});

document.getElementById('clear-cart').addEventListener('click', (event) => {
  count_a = 0;
  count_b = 0;
  count_c = 0;
  let element_span_a2 = document.getElementById('span-a');
  element_span_a2.innerText = count_a;
  let element_span_b2 = document.getElementById('span-b');
  element_span_b2.innerText = count_b;
  let element_span_c2 = document.getElementById('span-c');
  element_span_c2.innerText = count_c;
  let element_fav_text_a3 = document.getElementById('fav-text-a');
  element_fav_text_a3.replaceChildren();
  let element_fav_text_b3 = document.getElementById('fav-text-b');
  element_fav_text_b3.replaceChildren();
  let element_fav_text_c3 = document.getElementById('fav-text-c');
  element_fav_text_c3.replaceChildren();

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

