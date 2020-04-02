
var prNum, tempOut;
        prNum = Math.floor((Math.random() * 10) + 1);
  
        console.log (prNum);
    // tempOut = document.getElementById ('temp-out');
    // tempOut.innerHTML == prNum;

function f1 () {
    var num,  out;
     num = document.getElementById ('my-num').value;
     out = document.getElementById ('out');
     

     if (num == prNum) {
         out.innerHTML = 'Вы угодали!!!';
     }
     else if (num > prNum) {
         out.innerHTML = 'Вы введи число больше чем нужно';
     }
     else if (num < prNum) {
         out.innerHTML = 'Вы ввели число меньше чем нужно';
     }
     else  {
         out.innerHTML ='Введите число от 1 до 10';
     }
}