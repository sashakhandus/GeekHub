$(document).ready(function() {

  $(".sum").click(function(){
    let num1 = $("#num1").val();
    num1 = parseInt(num1);

    let num2 = $("#num2").val();
    num2 = parseInt(num2);

    let result = num1 + num2;
    $(".res").text(`Result: ${result}`);
  });

  $(".sub").click(function(){
    let num1 = $("#num1").val();
    num1 = parseInt(num1);

    let num2 = $("#num2").val();
    num2 = parseInt(num2);

    let result = num1 - num2;
    $(".res").text(`Result: ${result}`);
  });

  $(".pow").click(function(){
    let num1 = $("#num1").val();
    num1 = parseInt(num1);

    let num2 = $("#num2").val();
    num2 = parseInt(num2);

    var result;

    if (num2 === 0) {
      result = 1;
    } else if (num2 === 1) {
      result = num1;
    } else if (num2 > 1 ){
      result = num1;
      for (let i = 2; i <= num2; i++) {
        result = result * num1;
      }
    }

    $(".res").text(`Result: ${result}`);
  });

  $(".sin").click(function(){
    let num1 = $("#num1").val();
    num1 = parseInt(num1);

    let result = Math.sin(num1 * Math.PI / 180);
    $(".res").text(`Result: ${result}`);
  });

  $(".cos").click(function(){
    let num1 = $("#num1").val();
    num1 = parseInt(num1);

    let result = Math.cos(num1 * Math.PI / 180);
    $(".res").text(`Result: ${result}`);
  });

  $(".sqrt").click(function(){
    let num1 = $("#num1").val();
    num1 = parseInt(num1);

    let result = Math.sqrt(num1);
    $(".res").text(`Result: ${result}`);
  });

  function factorial(num) {
    if (num === 0) {
      return 1;
    } return num * factorial(num - 1);
  }

  $(".fact").click(function(){
    let num1 = $("#num1").val();
    num1 = parseInt(num1);

    let result = factorial(num1);
    $(".res").text(`Result: ${result}`);
  });

  $(".reset").click(function(){
   $("#num1").val("");
   $("#num2").val("");
   $(".res").text(`Result: `);
  });

});
