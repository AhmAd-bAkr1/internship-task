
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

const moreBtn = document.querySelector('.coontainer .mob-sec2 .cards button')
let currentItem = 2
moreBtn.addEventListener("click" , function (e) {
  let elementBox = [...document.querySelectorAll('.coontainer .mob-sec2 .cards .crd')]
  for (let i = currentItem; i < currentItem + 2; i++) {
    setTimeout(() => {
      if (elementBox[i]) {
              elementBox[i].style.display = "flex"
  
      }
    }, 1000);
  }  
  currentItem += 2
  
  if (currentItem >= elementBox.length) {
    e.target.classList.add("loaded")
    
  }
  })

const loadBtn = document.querySelector("#loader")
const loadBtn1 = document.querySelector("#loader1")
const secCard = document.querySelector(".coontainer .sec5 .cerds .main-crd2")
const currentItem1 = 1
const currentItem2 = 2

loadBtn.addEventListener("click" , function (e) {
let elementBox = [...document.querySelectorAll('.coontainer .sec5 .cerds .main-crd')]
e.target.classList.add("show")
for (let i = currentItem1; i < currentItem1 + 1; i++) {
  setTimeout(() => {
    e.target.classList.remove("show")
    if (elementBox[i]) {
            elementBox[i].style.display = "block"
            elementBox[i].style.position = "inherit"

    }
  }, 1000);
}  
currentItem1 += 1

if (currentItem1 >= elementBox.length) {
  e.target.classList.add("loaded")
  
}
})

loadBtn1.addEventListener("click" , function (e) {
  let elementBox = [...document.querySelectorAll('.coontainer .sec5 .cerds .main-crd')]
  e.target.classList.add("show")
  for (let i = currentItem2; i < currentItem2 + 1; i++) {
    setTimeout(() => {
      e.target.classList.remove("show")
      if (elementBox[i]) {
        elementBox[i].style.display = "block"
        elementBox[i].style.position = "inherit"
        secCard.style.display = "block"

      }
    }, 1000);
  }  
  currentItem2 += 1
  if (currentItem2 >= elementBox.length) {
    e.target.classList.add("loaded")
    
  }
  })
