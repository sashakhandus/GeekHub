let btnSum=document.querySelector('.sum');let btnSub=document.querySelector('.sub');let btnPow=document.querySelector('.pow');let btnSin=document.querySelector('.sin');let btnCos=document.querySelector('.cos');let btnSqrt=document.querySelector('.sqrt');let btnFact=document.querySelector('.fact');let btnRes=document.querySelector('.reset');let res=document.querySelector('.result');function reset(){document.querySelector('#num1').value='';document.querySelector('#num2').value='';res.innerHTML=`Result: `;}function sum(){let num1=document.querySelector('#num1').value;num1=parseInt(num1);let num2=document.querySelector('#num2').value;num2=parseInt(num2);let result=num1+num2;res.innerHTML=`Result: ${result}`;}function sub(){let num1=document.querySelector('#num1').value;num1=parseInt(num1);let num2=document.querySelector('#num2').value;num2=parseInt(num2);let result=num1-num2;res.innerHTML=`Result: ${result}`;}function pow(){let num1=document.querySelector('#num1').value;num1=parseInt(num1);let num2=document.querySelector('#num2').value;num2=parseInt(num2);if(num2===0){let result=1;}else if(num2===1){let result=num1;}else if(num2>1){for(i=2;i<=num2;i++){let result=result*num1;}}res.innerHTML=`Result: ${result}`;}function sin(){let num1=document.querySelector('#num1').value;num1=parseInt(num1);console.log(num1);let result=Math.sin(num1*Math.PI/180);res.innerHTML=`Result: ${result}`;}function cos(){let num1=document.querySelector('#num1').value;num1=parseInt(num1);console.log(num1);let result=Math.cos(num1*Math.PI/180);res.innerHTML=`Result: ${result}`;}function sqrt(){let num1=document.querySelector('#num1').value;num1=parseInt(num1);let result=Math.sqrt(num1);res.innerHTML=`Result: ${result}`;}function factorial(num){if(num===0){return 1;}return num*factorial(num-1);}function getFactorial(){let num1=document.querySelector('#num1').value;num1=parseInt(num1);console.log(num1);let result=factorial(num1);res.innerHTML=`Result: ${result}`;}btnSum.addEventListener('click',sum);btnSub.addEventListener('click',sub);btnPow.addEventListener('click',pow);btnSin.addEventListener('click',sin);btnCos.addEventListener('click',cos);btnSqrt.addEventListener('click',sqrt);btnFact.addEventListener('click',getFactorial);btnRes.addEventListener('click',reset);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYnRuU3VtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYnRuU3ViIiwiYnRuUG93IiwiYnRuU2luIiwiYnRuQ29zIiwiYnRuU3FydCIsImJ0bkZhY3QiLCJidG5SZXMiLCJyZXMiLCJyZXNldCIsInZhbHVlIiwiaW5uZXJIVE1MIiwic3VtIiwibnVtMSIsInBhcnNlSW50IiwibnVtMiIsInJlc3VsdCIsInN1YiIsInBvdyIsImkiLCJzaW4iLCJjb25zb2xlIiwibG9nIiwiTWF0aCIsIlBJIiwiY29zIiwic3FydCIsImZhY3RvcmlhbCIsIm51bSIsImdldEZhY3RvcmlhbCIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiJBQUNBLEdBQUlBLENBQUFBLE1BQU0sQ0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWIsQ0FDQSxHQUFJQyxDQUFBQSxNQUFNLENBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiLENBQ0EsR0FBSUUsQ0FBQUEsTUFBTSxDQUFHSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYixDQUNBLEdBQUlHLENBQUFBLE1BQU0sQ0FBR0osUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWIsQ0FDQSxHQUFJSSxDQUFBQSxNQUFNLENBQUdMLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiLENBQ0EsR0FBSUssQ0FBQUEsT0FBTyxDQUFHTixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBZCxDQUNBLEdBQUlNLENBQUFBLE9BQU8sQ0FBR1AsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWQsQ0FDQSxHQUFJTyxDQUFBQSxNQUFNLENBQUdSLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFiLENBRUEsR0FBSVEsQ0FBQUEsR0FBRyxDQUFHVCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBVixDQUVB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QUF0QixDQUNBTCxHQUFHLENBQUNHLFNBQUosQ0FBaUIsV0FBVUssTUFBTyxFQUFsQyxDQUNELENBSURsQixNQUFNLENBQUNnQyxnQkFBUCxDQUF3QixPQUF4QixDQUFpQ2xCLEdBQWpDLEVBQ0FYLE1BQU0sQ0FBQzZCLGdCQUFQLENBQXdCLE9BQXhCLENBQWlDYixHQUFqQyxFQUNBZixNQUFNLENBQUM0QixnQkFBUCxDQUF3QixPQUF4QixDQUFpQ1osR0FBakMsRUFDQWYsTUFBTSxDQUFDMkIsZ0JBQVAsQ0FBd0IsT0FBeEIsQ0FBaUNWLEdBQWpDLEVBQ0FoQixNQUFNLENBQUMwQixnQkFBUCxDQUF3QixPQUF4QixDQUFpQ0wsR0FBakMsRUFDQXBCLE9BQU8sQ0FBQ3lCLGdCQUFSLENBQXlCLE9BQXpCLENBQWtDSixJQUFsQyxFQUNBcEIsT0FBTyxDQUFDd0IsZ0JBQVIsQ0FBeUIsT0FBekIsQ0FBa0NELFlBQWxDLEVBQ0F0QixNQUFNLENBQUN1QixnQkFBUCxDQUF3QixPQUF4QixDQUFpQ3JCLEtBQWpDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmxldCBidG5TdW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VtJyk7XG5sZXQgYnRuU3ViID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1YicpO1xubGV0IGJ0blBvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3cnKTtcbmxldCBidG5TaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2luJyk7XG5sZXQgYnRuQ29zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvcycpO1xubGV0IGJ0blNxcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3FydCcpO1xubGV0IGJ0bkZhY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmFjdCcpO1xubGV0IGJ0blJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNldCcpO1xuXG5sZXQgcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdCcpO1xuXG5mdW5jdGlvbiByZXNldCgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI251bTEnKS52YWx1ZSA9ICcnO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbnVtMicpLnZhbHVlID0gJyc7XG4gIHJlcy5pbm5lckhUTUwgPSBgUmVzdWx0OiBgO1xufVxuXG5mdW5jdGlvbiBzdW0oKSB7XG4gbGV0IG51bTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbnVtMScpLnZhbHVlO1xuICBudW0xID0gcGFyc2VJbnQobnVtMSk7XG5cbiAgbGV0IG51bTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbnVtMicpLnZhbHVlO1xuICBudW0yID0gcGFyc2VJbnQobnVtMik7XG5cbiAgbGV0IHJlc3VsdCA9IG51bTEgKyBudW0yO1xuICByZXMuaW5uZXJIVE1MID0gYFJlc3VsdDogJHtyZXN1bHR9YDtcbn1cblxuZnVuY3Rpb24gc3ViKCkge1xuICBsZXQgbnVtMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNudW0xJykudmFsdWU7XG4gIG51bTEgPSBwYXJzZUludChudW0xKTtcblxuICBsZXQgbnVtMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNudW0yJykudmFsdWU7XG4gIG51bTIgPSBwYXJzZUludChudW0yKTtcblxuICBsZXQgcmVzdWx0ID0gbnVtMSAtIG51bTI7XG4gIHJlcy5pbm5lckhUTUwgPSBgUmVzdWx0OiAke3Jlc3VsdH1gO1xufVxuXG5cbmZ1bmN0aW9uIHBvdygpIHtcbiAgbGV0IG51bTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbnVtMScpLnZhbHVlO1xuICBudW0xID0gcGFyc2VJbnQobnVtMSk7XG5cbiAgbGV0IG51bTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbnVtMicpLnZhbHVlO1xuICBudW0yID0gcGFyc2VJbnQobnVtMik7XG5cbiAgaWYgKG51bTIgPT09IDApIHtcbiAgICBsZXQgcmVzdWx0ID0gMTtcbiAgfSBlbHNlIGlmIChudW0yID09PSAxKSB7XG4gICAgbGV0IHJlc3VsdCA9IG51bTE7XG4gIH0gZWxzZSBpZiAobnVtMiA+IDEgKXtcbiAgICBmb3IgKGkgPSAyOyBpIDw9IG51bTI7IGkrKykge1xuICAgICAgbGV0IHJlc3VsdCA9IHJlc3VsdCAqIG51bTE7XG4gICAgfVxuICB9XG5cbiAgcmVzLmlubmVySFRNTCA9IGBSZXN1bHQ6ICR7cmVzdWx0fWA7XG59XG5cbmZ1bmN0aW9uIHNpbigpIHtcbiAgbGV0IG51bTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbnVtMScpLnZhbHVlO1xuICBudW0xID0gcGFyc2VJbnQobnVtMSk7XG4gIGNvbnNvbGUubG9nKG51bTEpO1xuXG4gIGxldCByZXN1bHQgPSBNYXRoLnNpbihudW0xICogTWF0aC5QSSAvIDE4MCk7XG4gIHJlcy5pbm5lckhUTUwgPSBgUmVzdWx0OiAke3Jlc3VsdH1gO1xufVxuXG5cbmZ1bmN0aW9uIGNvcygpIHtcbiAgbGV0IG51bTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbnVtMScpLnZhbHVlO1xuICBudW0xID0gcGFyc2VJbnQobnVtMSk7XG4gIGNvbnNvbGUubG9nKG51bTEpO1xuXG4gIGxldCByZXN1bHQgPSBNYXRoLmNvcyhudW0xICogTWF0aC5QSSAvIDE4MCk7XG4gIHJlcy5pbm5lckhUTUwgPSBgUmVzdWx0OiAke3Jlc3VsdH1gO1xufVxuXG5mdW5jdGlvbiBzcXJ0KCkge1xuICBsZXQgbnVtMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNudW0xJykudmFsdWU7XG4gIG51bTEgPSBwYXJzZUludChudW0xKTtcblxuICBsZXQgcmVzdWx0ID0gTWF0aC5zcXJ0KG51bTEpO1xuICByZXMuaW5uZXJIVE1MID0gYFJlc3VsdDogJHtyZXN1bHR9YDtcbn1cblxuXG5mdW5jdGlvbiBmYWN0b3JpYWwobnVtKSB7XG4gIGlmIChudW0gPT09IDApIHtcbiAgICByZXR1cm4gMTtcbiAgfSByZXR1cm4gbnVtICogZmFjdG9yaWFsKG51bSAtIDEpO1xufVxuXG5mdW5jdGlvbiBnZXRGYWN0b3JpYWwoKSB7XG4gIGxldCBudW0xID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI251bTEnKS52YWx1ZTtcbiAgbnVtMSA9IHBhcnNlSW50KG51bTEpO1xuICBjb25zb2xlLmxvZyhudW0xKTtcblxuICBsZXQgcmVzdWx0ID0gZmFjdG9yaWFsKG51bTEpO1xuICByZXMuaW5uZXJIVE1MID0gYFJlc3VsdDogJHtyZXN1bHR9YDtcbn1cblxuXG5cbmJ0blN1bS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1bSk7XG5idG5TdWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWIpO1xuYnRuUG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcG93KTtcbmJ0blNpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNpbik7XG5idG5Db3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb3MpO1xuYnRuU3FydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNxcnQpO1xuYnRuRmFjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdldEZhY3RvcmlhbCk7XG5idG5SZXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXNldCk7Il19
