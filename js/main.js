
const countDownDate = new Date("apr 5, 2023 15:37:25").getTime();

let counter = setInterval(function() {
    
    const now = new Date().getTime();
    
  let distance = countDownDate - now;
    
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  for (let i = 0; i < 4; i++) {
    
      document.getElementsByClassName("days")[i].innerHTML = days;
      document.getElementsByClassName("hr")[i].innerHTML = hours;
      document.getElementsByClassName("min")[i].innerHTML = minutes;
      document.getElementsByClassName("secend")[i].innerHTML = seconds;
    }
    //   document.getElementsByClassName("days")[2].innerHTML = days;
    //   document.getElementsByClassName("days")[1].innerHTML = days;
  
  if (distance < 0) {
    clearInterval(x);
    for (let i = 0; i < 4; i++) {
    
        document.getElementsByClassName("days")[i].innerHTML = 0;
        document.getElementsByClassName("hr")[i].innerHTML = 0;
        document.getElementsByClassName("min")[i].innerHTML = 0;
        document.getElementsByClassName("secend")[i].innerHTML = 0;
      }
}
}, 1000);
console.log(counter)