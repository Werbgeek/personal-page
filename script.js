// let hamburger = document.querySelector(".icon2")
// let menudropdown = document.querySelector(".menu")
// let closed = document.querySelector(".icon3")
// let icon = document.querySelector(".icon4")
let contactBtn= document.querySelector(".contact_me")
let contact= document.querySelector(".contact")

let home= document.querySelector("#home")
let intro= document.querySelector(".introduction")
let about= document.querySelector(".about")
let aboutBtn= document.querySelector("#about")
let portfoiloBtn= document.querySelector("#portfolio")
let portfolio= document.querySelector(".portfolio")
let skillBtn= document.querySelector("#skill")
let skill= document.querySelector(".skill")
let contactBtn1= document.querySelector("#contactMe")
let contact1= document.querySelector(".contact")


var responsiveSlider = function() {

var slider = document.getElementsByClassName("about_img");
var sliderWidth = slider.offsetWidth;
var slideList = document.getElementsByClassName("images");
var count = 1;
var items = slideList.querySelectorAll("imagelist").length;
var prev = document.getElementById("prev");
var next = document.getElementById("next");

window.addEventListener('resize', function() {
  sliderWidth = slider.offsetWidth;
});

  console.log(items)


var nextSlide = function() {
  if(count < items) {
    slideList.style.left = "-" + count * sliderWidth + "px";
    count++;
  }
  else if(count = items) {
    slideList.style.left = "0px";
    count = 1;
  }
};
var prevSlide = function() {
  if(count > 1) {
    count = count - 2;
    slideList.style.left = "-" + count * sliderWidth + "px";
    count++;
  }
  else if(count = 1) {
    count = items - 1;
    slideList.style.left = "-" + count * sliderWidth + "px";
    count++;
  }
};

next.addEventListener("click", function() {
  nextSlide();
});

prev.addEventListener("click", function() {
  prevSlide();
});

setInterval(function() {
  nextSlide()
}, 8000);

};
window.onload = function() {
responsiveSlider();  
}


// hamburger.addEventListener("click", () => {
// menudropdown.classList.add('active')
// closed.classList.add('is-active')
// hamburger.classList.add('is-active')

// })

// closed.addEventListener('click', () => {
//     hamburger.classList.remove('is-active')
//     closed.classList.remove('is-active')
//     menudropdown.classList.remove('active')
// })
contactBtn.addEventListener("click", () => {
    contact.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });

})

home.addEventListener("click", () => {
   intro.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });

})

aboutBtn.addEventListener("click", () => {
   about.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });

})

portfoiloBtn.addEventListener("click", () => {
    portfolio.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });

})

skillBtn.addEventListener("click", () => {
   skill.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });

})

contactBtn1.addEventListener("click", () => {
   contact.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });

})

