

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
  let slides1 = document.querySelectorAll('.slide1');
  let slides2 = document.querySelectorAll('.slide2');
  let slides3 = document.querySelectorAll('.slide3');
  console.log(slides1);

  if (n > slides1.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides1.length;
  }

  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
    slides2[i].style.display = "none";
    slides3[i].style.display = "none";
  }

  slides1[slideIndex - 1].style.display = "block";
  slides2[slideIndex - 1].style.display = "block";
  slides3[slideIndex - 1].style.display = "block";
}




/*let prev = document.querySelector(".prev");
let next = document.querySelector(".next");


function  slidesShowPrev() {
  slideShow(-1);
}

function  slidesShowNext() {
  slideShow(1);
}

function slideShow(move) {
  console.log(move);
  let slides = document.querySelectorAll(".slide");
  let slider = document.querySelectorAll(".slider")[0];
  let sliderChildren = slider.children;
  let moveSlides = document.querySelectorAll(".slide");
  //console.log(slides);
  console.log(slider);
  console.log(sliderChildren);

  slider.removeChild(slider[0]);
  console.log(sliderChildren);



  //slider.replaceChild(slider.childNodes[2], slider.childNodes[0]);


 // console.log(slider);
  //console.log(sliderChildren);



  for (let i = 0; i < slides.length; i++) {
    //console.log(slides[i]);
    //console.log(moveSlides[i]);
    //console.log(move);

    if ((i + move) < 0) {

      //console.log(moveSlides[moveSlides.length - 1]);

      slides[i] = moveSlides[moveSlides.length - 1];
      //console.log(slides[i]);
    }

    if ((i + move) < slides.length) {
      slides[i] = moveSlides[i + move];
    }

    if ((i + move) === slides.length) {
      slides[i] = moveSlides[0];
    }
  }

 // console.log(slides);

}

prev.addEventListener('click', slidesShowPrev);
next.addEventListener('click', slidesShowNext);
*/









