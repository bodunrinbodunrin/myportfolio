
const a = document.querySelector('.next');
a.addEventListener('click', function () {
  const newColor = makeRandColor()
  document.body.style.backgroundColor = newColor;
})

const el = document.querySelector('.prev'); 
el.addEventListener('click', function () {
  const newColor = makeRandColor()
  document.body.style.backgroundColor = newColor;
})

const makeRandColor = () => {
const r = Math.floor(Math.random() * 255);
const g = Math.floor(Math.random() * 255);
const b = Math.floor(Math.random() * 255);
return `rgb(${r}, ${g}, ${b})`;
}

let textWrapper = document.querySelector('.animeJ .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.animeJ .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 1000
  })
  .add({
    targets: '.animeJ .line',
    translateX: [0, document.querySelector('.animeJ .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 600,
    delay: 100
  }).add({
    targets: '.animeJ .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.animeJ',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });








let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  

  function currentSlide(n) {
    showSlides(slideIndex = n);
}
  
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    // let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    // for (i = 0; i < dots.length; i++) {
    //   dots[i].className = dots[i].className.replace(" active", "");
    // }
    slides[slideIndex-1].style.display = "block";
    // dots[slideIndex-1].className += " active";
  }

