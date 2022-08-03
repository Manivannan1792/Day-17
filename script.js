let maindiv = document.getElementById("flexbox")

let timer= document.getElementById("timerIn");

maindiv.append(timer);
document.body.append(maindiv);


function f1() {
timer.innerHTML = "10";
function f2() {
 timer.innerHTML = "9";
function f3() {
 timer.innerHTML = "8";
function f4(){
 timer.innerHTML = "7";
 function f5() {
timer.innerHTML = "6";
function f6(){
 timer.innerHTML = "5";
 function f7(){
timer.innerHTML = "4";
function f8(){
timer.innerHTML = "3";
function f9(){
timer.innerHTML = "2";
 function f10(){
timer.innerHTML = "1";
function f11(){
 timer.innerHTML = " <b>Happy</b> <span>Independence</span> <dd>Day</dd>";
 timer.style.fontSize = "50px";
timer.style.fontWeight = "bold";
}
 setTimeout(f11,1000);
  }
 setTimeout(f10,1000);
 }
  setTimeout(f9,1000);
 }
setTimeout(f8,1000);
  }
setTimeout(f7,1000);
 }
setTimeout(f6, 1000);
 }
setTimeout(f5,1000);
 }
 setTimeout(f4, 1000);
 }
setTimeout(f3, 1000);
} setTimeout(f2, 1000);  
}
f1();