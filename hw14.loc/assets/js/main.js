let slideIndex=1;showSlides(slideIndex);function plusSlides(n){showSlides(slideIndex+=n);}function currentSlide(n){showSlides(slideIndex=n);}function showSlides(n){let i;let slides1=document.querySelectorAll('.slide1');let slides2=document.querySelectorAll('.slide2');let slides3=document.querySelectorAll('.slide3');console.log(slides1);if(n>slides1.length){slideIndex=1;}if(n<1){slideIndex=slides1.length;}for(i=0;i<slides1.length;i++){slides1[i].style.display="none";slides2[i].style.display="none";slides3[i].style.display="none";}slides1[slideIndex-1].style.display="block";slides2[slideIndex-1].style.display="block";slides3[slideIndex-1].style.display="block";}/*let prev = document.querySelector(".prev");
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsic2xpZGVJbmRleCIsInNob3dTbGlkZXMiLCJwbHVzU2xpZGVzIiwibiIsImN1cnJlbnRTbGlkZSIsImkiLCJzbGlkZXMxIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2xpZGVzMiIsInNsaWRlczMiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwic3R5bGUiLCJkaXNwbGF5Il0sIm1hcHBpbmdzIjoiQUFFQSxHQUFJQSxDQUFBQSxVQUFVLENBQUcsQ0FBakIsQ0FFQUMsVUFBVSxDQUFDRCxVQUFELENBQVYsQ0FFQSxRQUFTRSxDQUFBQSxVQUFULENBQW9CQyxDQUFwQixDQUF1QixDQUNyQkYsVUFBVSxDQUFDRCxVQUFVLEVBQUlHLENBQWYsQ0FBVixDQUNELENBRUQsUUFBU0MsQ0FBQUEsWUFBVCxDQUFzQkQsQ0FBdEIsQ0FBeUIsQ0FDdkJGLFVBQVUsQ0FBQ0QsVUFBVSxDQUFHRyxDQUFkLENBQVYsQ0FDRCxDQUVELFFBQVNGLENBQUFBLFVBQVQsQ0FBb0JFLENBQXBCLENBQXVCLENBQ3JCLEdBQUlFLENBQUFBLENBQUosQ0FDQSxHQUFJQyxDQUFBQSxPQUFPLENBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsU0FBMUIsQ0FBZCxDQUNBLEdBQUlDLENBQUFBLE9BQU8sQ0FBR0YsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixTQUExQixDQUFkLENBQ0EsR0FBSUUsQ0FBQUEsT0FBTyxDQUFHSCxRQUFRLENBQUNDLGdCQUFULENBQTBCLFNBQTFCLENBQWQsQ0FDQUcsT0FBTyxDQUFDQyxHQUFSLENBQVlOLE9BQVosRUFFQSxHQUFJSCxDQUFDLENBQUdHLE9BQU8sQ0FBQ08sTUFBaEIsQ0FBd0IsQ0FDdEJiLFVBQVUsQ0FBRyxDQUFiLENBQ0QsQ0FFRCxHQUFJRyxDQUFDLENBQUcsQ0FBUixDQUFXLENBQ1RILFVBQVUsQ0FBR00sT0FBTyxDQUFDTyxNQUFyQixDQUNELENBRUQsSUFBS1IsQ0FBQyxDQUFHLENBQVQsQ0FBWUEsQ0FBQyxDQUFHQyxPQUFPLENBQUNPLE1BQXhCLENBQWdDUixDQUFDLEVBQWpDLENBQXFDLENBQ25DQyxPQUFPLENBQUNELENBQUQsQ0FBUCxDQUFXUyxLQUFYLENBQWlCQyxPQUFqQixDQUEyQixNQUEzQixDQUNBTixPQUFPLENBQUNKLENBQUQsQ0FBUCxDQUFXUyxLQUFYLENBQWlCQyxPQUFqQixDQUEyQixNQUEzQixDQUNBTCxPQUFPLENBQUNMLENBQUQsQ0FBUCxDQUFXUyxLQUFYLENBQWlCQyxPQUFqQixDQUEyQixNQUEzQixDQUNELENBRURULE9BQU8sQ0FBQ04sVUFBVSxDQUFHLENBQWQsQ0FBUCxDQUF3QmMsS0FBeEIsQ0FBOEJDLE9BQTlCLENBQXdDLE9BQXhDLENBQ0FOLE9BQU8sQ0FBQ1QsVUFBVSxDQUFHLENBQWQsQ0FBUCxDQUF3QmMsS0FBeEIsQ0FBOEJDLE9BQTlCLENBQXdDLE9BQXhDLENBQ0FMLE9BQU8sQ0FBQ1YsVUFBVSxDQUFHLENBQWQsQ0FBUCxDQUF3QmMsS0FBeEIsQ0FBOEJDLE9BQTlCLENBQXdDLE9BQXhDLENBQ0QsQ0FLRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmxldCBzbGlkZUluZGV4ID0gMTtcblxuc2hvd1NsaWRlcyhzbGlkZUluZGV4KTtcblxuZnVuY3Rpb24gcGx1c1NsaWRlcyhuKSB7XG4gIHNob3dTbGlkZXMoc2xpZGVJbmRleCArPSBuKTtcbn1cblxuZnVuY3Rpb24gY3VycmVudFNsaWRlKG4pIHtcbiAgc2hvd1NsaWRlcyhzbGlkZUluZGV4ID0gbik7XG59XG5cbmZ1bmN0aW9uIHNob3dTbGlkZXMobikge1xuICBsZXQgaTtcbiAgbGV0IHNsaWRlczEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGUxJyk7XG4gIGxldCBzbGlkZXMyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlMicpO1xuICBsZXQgc2xpZGVzMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZTMnKTtcbiAgY29uc29sZS5sb2coc2xpZGVzMSk7XG5cbiAgaWYgKG4gPiBzbGlkZXMxLmxlbmd0aCkge1xuICAgIHNsaWRlSW5kZXggPSAxO1xuICB9XG5cbiAgaWYgKG4gPCAxKSB7XG4gICAgc2xpZGVJbmRleCA9IHNsaWRlczEubGVuZ3RoO1xuICB9XG5cbiAgZm9yIChpID0gMDsgaSA8IHNsaWRlczEubGVuZ3RoOyBpKyspIHtcbiAgICBzbGlkZXMxW2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBzbGlkZXMyW2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBzbGlkZXMzW2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxuXG4gIHNsaWRlczFbc2xpZGVJbmRleCAtIDFdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIHNsaWRlczJbc2xpZGVJbmRleCAtIDFdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIHNsaWRlczNbc2xpZGVJbmRleCAtIDFdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59XG5cblxuXG5cbi8qbGV0IHByZXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZXZcIik7XG5sZXQgbmV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV4dFwiKTtcblxuXG5mdW5jdGlvbiAgc2xpZGVzU2hvd1ByZXYoKSB7XG4gIHNsaWRlU2hvdygtMSk7XG59XG5cbmZ1bmN0aW9uICBzbGlkZXNTaG93TmV4dCgpIHtcbiAgc2xpZGVTaG93KDEpO1xufVxuXG5mdW5jdGlvbiBzbGlkZVNob3cobW92ZSkge1xuICBjb25zb2xlLmxvZyhtb3ZlKTtcbiAgbGV0IHNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2xpZGVcIik7XG4gIGxldCBzbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNsaWRlclwiKVswXTtcbiAgbGV0IHNsaWRlckNoaWxkcmVuID0gc2xpZGVyLmNoaWxkcmVuO1xuICBsZXQgbW92ZVNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2xpZGVcIik7XG4gIC8vY29uc29sZS5sb2coc2xpZGVzKTtcbiAgY29uc29sZS5sb2coc2xpZGVyKTtcbiAgY29uc29sZS5sb2coc2xpZGVyQ2hpbGRyZW4pO1xuXG4gIHNsaWRlci5yZW1vdmVDaGlsZChzbGlkZXJbMF0pO1xuICBjb25zb2xlLmxvZyhzbGlkZXJDaGlsZHJlbik7XG5cblxuXG4gIC8vc2xpZGVyLnJlcGxhY2VDaGlsZChzbGlkZXIuY2hpbGROb2Rlc1syXSwgc2xpZGVyLmNoaWxkTm9kZXNbMF0pO1xuXG5cbiAvLyBjb25zb2xlLmxvZyhzbGlkZXIpO1xuICAvL2NvbnNvbGUubG9nKHNsaWRlckNoaWxkcmVuKTtcblxuXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspIHtcbiAgICAvL2NvbnNvbGUubG9nKHNsaWRlc1tpXSk7XG4gICAgLy9jb25zb2xlLmxvZyhtb3ZlU2xpZGVzW2ldKTtcbiAgICAvL2NvbnNvbGUubG9nKG1vdmUpO1xuXG4gICAgaWYgKChpICsgbW92ZSkgPCAwKSB7XG5cbiAgICAgIC8vY29uc29sZS5sb2cobW92ZVNsaWRlc1ttb3ZlU2xpZGVzLmxlbmd0aCAtIDFdKTtcblxuICAgICAgc2xpZGVzW2ldID0gbW92ZVNsaWRlc1ttb3ZlU2xpZGVzLmxlbmd0aCAtIDFdO1xuICAgICAgLy9jb25zb2xlLmxvZyhzbGlkZXNbaV0pO1xuICAgIH1cblxuICAgIGlmICgoaSArIG1vdmUpIDwgc2xpZGVzLmxlbmd0aCkge1xuICAgICAgc2xpZGVzW2ldID0gbW92ZVNsaWRlc1tpICsgbW92ZV07XG4gICAgfVxuXG4gICAgaWYgKChpICsgbW92ZSkgPT09IHNsaWRlcy5sZW5ndGgpIHtcbiAgICAgIHNsaWRlc1tpXSA9IG1vdmVTbGlkZXNbMF07XG4gICAgfVxuICB9XG5cbiAvLyBjb25zb2xlLmxvZyhzbGlkZXMpO1xuXG59XG5cbnByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzbGlkZXNTaG93UHJldik7XG5uZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2xpZGVzU2hvd05leHQpO1xuKi9cblxuXG5cblxuXG5cblxuXG5cbiJdfQ==