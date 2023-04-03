const countDownDate = new Date("apr 10, 2023 15:37:25").getTime();

let counter = setInterval(function () {
  const now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  for (let i = 0; i < 4; i++) {
    document.getElementsByClassName("days")[i].textContent = days;
  }
  for (let i = 0; i < 8; i++) {
    document.getElementsByClassName("hr")[i].innerHTML = hours;
    document.getElementsByClassName("min")[i].innerHTML = minutes;
    document.getElementsByClassName("secend")[i].innerHTML = seconds;
    
  }
 

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

const moreBtn = document.querySelector(".coontainer .mob-sec2 .cards button");
let currentItem = 2;
moreBtn.addEventListener("click", function (e) {
  let elementBox = [
    ...document.querySelectorAll(".coontainer .mob-sec2 .cards .crd"),
  ];
  for (let i = currentItem; i < currentItem + 2; i++) {
    setTimeout(() => {
      if (elementBox[i]) {
        elementBox[i].style.display = "flex";
      }
    }, 1000);
  }
  currentItem += 2;

  if (currentItem >= elementBox.length) {
    e.target.classList.add("loaded");
  }
});

// const loadBtn = document.querySelector("#loader")
// const loadBtn1 = document.querySelector("#loader1")
// const secCard = document.querySelector(".coontainer .sec5 .cerds .main-crd2")
// const currentItem1 = 1
// const currentItem2 = 2

// loadBtn.addEventListener("click" , function (e) {
// let elementBox = [...document.querySelectorAll('.coontainer .sec5 .cerds .main-crd')]
// e.target.classList.add("show")
// for (let i = currentItem1; i < currentItem1 + 1; i++) {
//   setTimeout(() => {
//     e.target.classList.remove("show")
//     if (elementBox[i]) {
//             elementBox[i].style.display = "block"
//             elementBox[i].style.position = "inherit"

//     }
//   }, 1000);
// }
// currentItem1 += 1

// if (currentItem1 >= elementBox.length) {
//   e.target.classList.add("loaded")

// }
// })

// loadBtn1.addEventListener("click" , function (e) {
//   let elementBox = [...document.querySelectorAll('.coontainer .sec5 .cerds .main-crd')]
//   e.target.classList.add("show")
//   for (let i = currentItem2; i < currentItem2 + 1; i++) {
//     setTimeout(() => {
//       e.target.classList.remove("show")
//       if (elementBox[i]) {
//         elementBox[i].style.display = "block"
//         elementBox[i].style.position = "inherit"
//         secCard.style.display = "block"

//       }
//     }, 1000);
//   }
//   currentItem2 += 1
//   if (currentItem2 >= elementBox.length) {
//     e.target.classList.add("loaded")

//   }
//   })

const langBtn = document.querySelector(".lang");
const ldorpDown = document.querySelector(".lang .dropDown");
langBtn.addEventListener("click", function (el) {
  ldorpDown.classList.toggle("showe");
});
const placeBtn = document.querySelector(".place");
const pdorpDown = document.querySelector(".place .dropDown");
placeBtn.addEventListener("click", function (el) {
  pdorpDown.classList.toggle("showe");
});

const mainBtn = document.querySelector(
  ".coontainer .navBar2 .navbar .navbar-nav .dropdown"
);
const mdorpDown = document.querySelector(
  ".coontainer .navBar2 .navbar .navbar-nav .dropdown li .dropDown"
);
mainBtn.addEventListener("click", function (el) {
  mdorpDown.classList.toggle("showe");
});

const langBtnMob = document.querySelector(".mob-navBar2 .lang");
const mdorpDownMob = document.querySelector(".mob-navBar2 .lang .dropDown");
langBtnMob.addEventListener("click", function (el) {
  mdorpDownMob.classList.toggle("showe");
});
const placeBtnMob = document.querySelector(".mob-navBar2 .place");
const pdorpDownMob = document.querySelector(".mob-navBar2 .place .dropDown");
placeBtnMob.addEventListener("click", function (el) {
  pdorpDownMob.classList.toggle("showe");
});
