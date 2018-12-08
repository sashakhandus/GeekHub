function getWidthForImgGrid () {
  var w = window.innerWidth;

  var wimg = w / 5;

  var grid1 = document.querySelectorAll(".grid-img");

  grid1.forEach(item => item.style.width = `${wimg}px`);

  var grid2 = document.querySelectorAll(".hover");

  var div = document.querySelector(".grid-photo");
  var rect = div.getBoundingClientRect();
  var himg = rect.height / 2;

  console.log(rect.height);

  grid2.forEach(item => item.style.width = `${wimg}px`);
  grid2.forEach(item => item.style.height = `${himg}px`);
}

getWidthForImgGrid();
