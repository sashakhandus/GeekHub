$(document).ready(function(){$(".sum").click(function(){let num1=$("#num1").val();num1=parseInt(num1);let num2=$("#num2").val();num2=parseInt(num2);let result=num1+num2;$(".res").text(`Result: ${result}`);});$(".sub").click(function(){let num1=$("#num1").val();num1=parseInt(num1);let num2=$("#num2").val();num2=parseInt(num2);let result=num1-num2;$(".res").text(`Result: ${result}`);});$(".pow").click(function(){let num1=$("#num1").val();num1=parseInt(num1);let num2=$("#num2").val();num2=parseInt(num2);var result;if(num2===0){result=1;}else if(num2===1){result=num1;}else if(num2>1){result=num1;for(let i=2;i<=num2;i++){result=result*num1;}}$(".res").text(`Result: ${result}`);});$(".sin").click(function(){let num1=$("#num1").val();num1=parseInt(num1);let result=Math.sin(num1*Math.PI/180);$(".res").text(`Result: ${result}`);});$(".cos").click(function(){let num1=$("#num1").val();num1=parseInt(num1);let result=Math.cos(num1*Math.PI/180);$(".res").text(`Result: ${result}`);});$(".sqrt").click(function(){let num1=$("#num1").val();num1=parseInt(num1);let result=Math.sqrt(num1);$(".res").text(`Result: ${result}`);});function factorial(num){if(num===0){return 1;}return num*factorial(num-1);}$(".fact").click(function(){let num1=$("#num1").val();num1=parseInt(num1);let result=factorial(num1);$(".res").text(`Result: ${result}`);});$(".reset").click(function(){$("#num1").val("");$("#num2").val("");$(".res").text(`Result: `);});});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJjbGljayIsIm51bTEiLCJ2YWwiLCJwYXJzZUludCIsIm51bTIiLCJyZXN1bHQiLCJ0ZXh0IiwiaSIsIk1hdGgiLCJzaW4iLCJQSSIsImNvcyIsInNxcnQiLCJmYWN0b3JpYWwiLCJudW0iXSwibWFwcGluZ3MiOiJBQUFBQSxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFVBQVcsQ0FFM0JGLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVUcsS0FBVixDQUFnQixVQUFVLENBQ3hCLEdBQUlDLENBQUFBLElBQUksQ0FBR0osQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXSyxHQUFYLEVBQVgsQ0FDQUQsSUFBSSxDQUFHRSxRQUFRLENBQUNGLElBQUQsQ0FBZixDQUVBLEdBQUlHLENBQUFBLElBQUksQ0FBR1AsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXSyxHQUFYLEVBQVgsQ0FDQUUsSUFBSSxDQUFHRCxRQUFRLENBQUNDLElBQUQsQ0FBZixDQUVBLEdBQUlDLENBQUFBLE1BQU0sQ0FBR0osSUFBSSxDQUFHRyxJQUFwQixDQUNBUCxDQUFDLENBQUMsTUFBRCxDQUFELENBQVVTLElBQVYsQ0FBZ0IsV0FBVUQsTUFBTyxFQUFqQyxFQUNELENBVEQsRUFXQVIsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVRyxLQUFWLENBQWdCLFVBQVUsQ0FDeEIsR0FBSUMsQ0FBQUEsSUFBSSxDQUFHSixDQUFDLENBQUMsT0FBRCxDQUFELENBQVdLLEdBQVgsRUFBWCxDQUNBRCxJQUFJLENBQUdFLFFBQVEsQ0FBQ0YsSUFBRCxDQUFmLENBRUEsR0FBSUcsQ0FBQUEsSUFBSSxDQUFHUCxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdLLEdBQVgsRUFBWCxDQUNBRSxJQUFJLENBQUdELFFBQVEsQ0FBQ0MsSUFBRCxDQUFmLENBRUEsR0FBSUMsQ0FBQUEsTUFBTSxDQUFHSixJQUFJLENBQUdHLElB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SCxDQUVEakIsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXRyxLQUFYLENBQWlCLFVBQVUsQ0FDekIsR0FBSUMsQ0FBQUEsSUFBSSxDQUFHSixDQUFDLENBQUMsT0FBRCxDQUFELENBQVdLLEdBQVgsRUFBWCxDQUNBRCxJQUFJLENBQUdFLFFBQVEsQ0FBQ0YsSUFBRCxDQUFmLENBRUEsR0FBSUksQ0FBQUEsTUFBTSxDQUFHUSxTQUFTLENBQUNaLElBQUQsQ0FBdEIsQ0FDQUosQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVUyxJQUFWLENBQWdCLFdBQVVELE1BQU8sRUFBakMsRUFDRCxDQU5ELEVBUUFSLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWUcsS0FBWixDQUFrQixVQUFVLENBQzNCSCxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdLLEdBQVgsQ0FBZSxFQUFmLEVBQ0FMLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV0ssR0FBWCxDQUFlLEVBQWYsRUFDQUwsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVUyxJQUFWLENBQWdCLFVBQWhCLEVBQ0EsQ0FKRCxFQU1ELENBM0ZEIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblxuICAkKFwiLnN1bVwiKS5jbGljayhmdW5jdGlvbigpe1xuICAgIGxldCBudW0xID0gJChcIiNudW0xXCIpLnZhbCgpO1xuICAgIG51bTEgPSBwYXJzZUludChudW0xKTtcblxuICAgIGxldCBudW0yID0gJChcIiNudW0yXCIpLnZhbCgpO1xuICAgIG51bTIgPSBwYXJzZUludChudW0yKTtcblxuICAgIGxldCByZXN1bHQgPSBudW0xICsgbnVtMjtcbiAgICAkKFwiLnJlc1wiKS50ZXh0KGBSZXN1bHQ6ICR7cmVzdWx0fWApO1xuICB9KTtcblxuICAkKFwiLnN1YlwiKS5jbGljayhmdW5jdGlvbigpe1xuICAgIGxldCBudW0xID0gJChcIiNudW0xXCIpLnZhbCgpO1xuICAgIG51bTEgPSBwYXJzZUludChudW0xKTtcblxuICAgIGxldCBudW0yID0gJChcIiNudW0yXCIpLnZhbCgpO1xuICAgIG51bTIgPSBwYXJzZUludChudW0yKTtcblxuICAgIGxldCByZXN1bHQgPSBudW0xIC0gbnVtMjtcbiAgICAkKFwiLnJlc1wiKS50ZXh0KGBSZXN1bHQ6ICR7cmVzdWx0fWApO1xuICB9KTtcblxuICAkKFwiLnBvd1wiKS5jbGljayhmdW5jdGlvbigpe1xuICAgIGxldCBudW0xID0gJChcIiNudW0xXCIpLnZhbCgpO1xuICAgIG51bTEgPSBwYXJzZUludChudW0xKTtcblxuICAgIGxldCBudW0yID0gJChcIiNudW0yXCIpLnZhbCgpO1xuICAgIG51bTIgPSBwYXJzZUludChudW0yKTtcblxuICAgIHZhciByZXN1bHQ7XG5cbiAgICBpZiAobnVtMiA9PT0gMCkge1xuICAgICAgcmVzdWx0ID0gMTtcbiAgICB9IGVsc2UgaWYgKG51bTIgPT09IDEpIHtcbiAgICAgIHJlc3VsdCA9IG51bTE7XG4gICAgfSBlbHNlIGlmIChudW0yID4gMSApe1xuICAgICAgcmVzdWx0ID0gbnVtMTtcbiAgICAgIGZvciAobGV0IGkgPSAyOyBpIDw9IG51bTI7IGkrKykge1xuICAgICAgICByZXN1bHQgPSByZXN1bHQgKiBudW0xO1xuICAgICAgfVxuICAgIH1cblxuICAgICQoXCIucmVzXCIpLnRleHQoYFJlc3VsdDogJHtyZXN1bHR9YCk7XG4gIH0pO1xuXG4gICQoXCIuc2luXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgbGV0IG51bTEgPSAkKFwiI251bTFcIikudmFsKCk7XG4gICAgbnVtMSA9IHBhcnNlSW50KG51bTEpO1xuXG4gICAgbGV0IHJlc3VsdCA9IE1hdGguc2luKG51bTEgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAkKFwiLnJlc1wiKS50ZXh0KGBSZXN1bHQ6ICR7cmVzdWx0fWApO1xuICB9KTtcblxuICAkKFwiLmNvc1wiKS5jbGljayhmdW5jdGlvbigpe1xuICAgIGxldCBudW0xID0gJChcIiNudW0xXCIpLnZhbCgpO1xuICAgIG51bTEgPSBwYXJzZUludChudW0xKTtcblxuICAgIGxldCByZXN1bHQgPSBNYXRoLmNvcyhudW0xICogTWF0aC5QSSAvIDE4MCk7XG4gICAgJChcIi5yZXNcIikudGV4dChgUmVzdWx0OiAke3Jlc3VsdH1gKTtcbiAgfSk7XG5cbiAgJChcIi5zcXJ0XCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgbGV0IG51bTEgPSAkKFwiI251bTFcIikudmFsKCk7XG4gICAgbnVtMSA9IHBhcnNlSW50KG51bTEpO1xuXG4gICAgbGV0IHJlc3VsdCA9IE1hdGguc3FydChudW0xKTtcbiAgICAkKFwiLnJlc1wiKS50ZXh0KGBSZXN1bHQ6ICR7cmVzdWx0fWApO1xuICB9KTtcblxuICBmdW5jdGlvbiBmYWN0b3JpYWwobnVtKSB7XG4gICAgaWYgKG51bSA9PT0gMCkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSByZXR1cm4gbnVtICogZmFjdG9yaWFsKG51bSAtIDEpO1xuICB9XG5cbiAgJChcIi5mYWN0XCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgbGV0IG51bTEgPSAkKFwiI251bTFcIikudmFsKCk7XG4gICAgbnVtMSA9IHBhcnNlSW50KG51bTEpO1xuXG4gICAgbGV0IHJlc3VsdCA9IGZhY3RvcmlhbChudW0xKTtcbiAgICAkKFwiLnJlc1wiKS50ZXh0KGBSZXN1bHQ6ICR7cmVzdWx0fWApO1xuICB9KTtcblxuICAkKFwiLnJlc2V0XCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAkKFwiI251bTFcIikudmFsKFwiXCIpO1xuICAgJChcIiNudW0yXCIpLnZhbChcIlwiKTtcbiAgICQoXCIucmVzXCIpLnRleHQoYFJlc3VsdDogYCk7XG4gIH0pO1xuICBcbn0pO1xuIl19