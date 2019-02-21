let d = new Date();
let time = d.getTime(); 

function myFirstFunction() {
    setTimeout(function(){ alert("Hello"); }, 10000);
    let seconds = time - minutes * 60;
    return seconds;
  }
  function mySecondFunction() {
    setTimeout(function(){ alert("Hello"); }, 20000);
    let minutes = Math.floor(time / 60);
    return minutes;
  }
  function myThirdFunction() {
    let hours = Math.floor(time / 3600);
    return hours;
  }

let sum = seconds + minutes + hours;

alert(sum);
