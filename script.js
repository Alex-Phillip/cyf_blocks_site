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

// image carousel

var background_images;


background_images = ['https://images.wallpaperscraft.com/image/single/star_galaxy_glow_light_95414_1366x768.jpg', 'https://images.wallpaperscraft.com/image/single/cosmonaut_space_suit_multicolored_123724_1366x768.jpg', 'https://images.wallpaperscraft.com/image/single/rosette_nebula_nebula_glow_207546_1366x768.jpg'];
let element_image_id = document.getElementById('image');
element_image_id.setAttribute("src", background_images[0]);


document.getElementById('button-left').addEventListener('click', (event) => {
  background_images.unshift(background_images.pop());
  let element_image_id2 = document.getElementById('image');
  element_image_id2.setAttribute("src", background_images[0]);

});

document.getElementById('button-right').addEventListener('click', (event) => {
  background_images.push(background_images.shift());
  let element_image_id3 = document.getElementById('image');
  element_image_id3.setAttribute("src", background_images[0]);

});

// text carousel

var one, two;


one = ['Coding my future', 'Project: use JavaScript', 'and implement it'];
two = ['with Code Your Future', 'generated in CYF Blocks', 'into a HTML/CSS website'];
let element_text_one = document.getElementById('text-one');
element_text_one.innerText = one[0];
let element_text_two = document.getElementById('text-two');
element_text_two.innerText = two[0];


document.getElementById('button-left').addEventListener('click', (event) => {
  one.unshift(one.pop());
  two.unshift(two.pop());
  let element_text_one2 = document.getElementById('text-one');
  element_text_one2.innerText = one[0];
  let element_text_two2 = document.getElementById('text-two');
  element_text_two2.innerText = two[0];

});

document.getElementById('button-right').addEventListener('click', (event) => {
  one.push(one.shift());
  two.push(two.shift());
  let element_text_one3 = document.getElementById('text-one');
  element_text_one3.innerText = one[0];
  let element_text_two3 = document.getElementById('text-two');
  element_text_two3.innerText = two[0];

});
