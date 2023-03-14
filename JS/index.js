// When Click Menu =====> Open
let faBars = document.querySelector('.fa-bars');
faBars.addEventListener('click',()=>{
    let navMobDown = document.querySelector('header .nav-Mob');
    navMobDown.style.cssText = "display:grid";
    faBars.style.cssText = "display:none";
    faxmarks.style.cssText = "display:block";
});

// When Click Menu =====> Close
let faxmarks = document.querySelector('.fa-xmark');
faxmarks.addEventListener('click',()=>{
    let navMobDown = document.querySelector('header .nav-Mob');
    navMobDown.style.cssText = "display:none";
    faBars.style.cssText = "display:block";
    faxmarks.style.cssText = "display:none";
});

// Electric Car ===> Typed.js :)
var typed = new Typed('#typed', {
    strings: ['Electric Car'],
    typeSpeed: 70,
    loop : true
});

// Nums Before START
window.addEventListener('load',()=>{
    // Temperature
    let tempIncre = document.querySelector(".home .tools-home .child1 .temp-incre");
    var counter = 0;
    var i = setInterval(()=>{
        tempIncre.innerHTML = counter++;
        if(counter === 25) {
            clearInterval(i);
        }
    },90);

    // ML,Race
    let mlRace = document.querySelector(".home .tools-home .child2 .ml-race");
    var counter1 = 0;
    var ii = setInterval(()=>{
        mlRace.innerHTML = counter1++;
        if(counter1 === 873) {
            clearInterval(ii);
        }
    },0);

    // Battery
    let battery = document.querySelector(".home .tools-home .child3 .battery");
    var counter2 = 0;
    var iii = setInterval(()=>{
        battery.innerHTML = counter2++;
        if(counter2 === 95) {
            clearInterval(iii);
        }
    },20);
});

// Start ==> SCROLL
let start = document.querySelector('.start');
start.addEventListener('click',()=>{
    window.scroll({
        top : 850
    });
});
// Hover => ABOUT IMAGE
let myAboutImg = document.querySelector('.about .about-img img');
let myAboutImgDiv = document.querySelector('.about .about-img div');

myAboutImg.addEventListener('mouseover',()=>{
    myAboutImgDiv.style.cssText="transform:translateY(-45px)";
});
myAboutImg.addEventListener('mouseleave',()=>{
    myAboutImgDiv.style.cssText="transform:translateY(0px)";
});

// Arrow To Up
let startUp = document.querySelector('.startUp i');
startUp.addEventListener('click',()=>{
    window.scroll({
        top: 100,
        behavior: 'smooth'
});
});

// Popular Slide
// var swiper = new Swiper(".mySwiper", {
//     pagination: {
//       el: ".swiper-pagination",
//       dynamicBullets: true,
//     },
//     loop:true,
//     slidesPerView: 3,
//     spaceBetween: 20,
//     slidesPerGroup:1
// });

if(window.innerWidth <= 851){
    var swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
        loop:true,
        slidesPerView: 1,
        spaceBetween: 20,
        slidesPerGroup:1,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
    });
}else{
    var swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
        loop:true,
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup:1,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
    });
}

// Click => Features
// let fourBtnAll = document.querySelector('.four-btn .alll');
// fourBtnAll.addEventListener('click',(e)=>{
//     e.preventDefault();
//     fourBtnAll.classList.add(".four-btn active");
//     let allFeature = document.querySelector('.main-feature .all-feature');
//     allFeature.style.cssText = "display:grid";
//     allFeature.nextElementSibling.style.cssText = "display:none";
// });

// let fourBtnLogo3 = document.querySelector('.four-btn .logo3');
// fourBtnLogo3.addEventListener('click',(e)=>{
//     e.preventDefault();
//     let fourBtnLogo3 = document.querySelector('.main-feature .logo3-feature');
//     fourBtnLogo3.style.cssText = "display:grid";
//     fourBtnLogo3.nextElementSibling.style.cssText = "display:none";
// });

// let fourBtnLogo2 = document.querySelector('.four-btn .logo2');
// fourBtnLogo2.addEventListener('click',(e)=>{
//     e.preventDefault();
//     let fourBtnLogo2 = document.querySelector('.main-feature .logo2-feature');
//     fourBtnLogo2.style.cssText = "display:grid";
//     fourBtnLogo2.nextElementSibling.style.cssText = "display:none";
// });

// let fourBtnLogo1 = document.querySelector('.four-btn .logo1');
// fourBtnLogo1.addEventListener('click',(e)=>{
//     e.preventDefault();
//     let fourBtnLogo1 = document.querySelector('.main-feature .logo1-feature');
//     fourBtnLogo1.style.cssText = "display:grid";
//     fourBtnLogo1.nextElementSibling.style.cssText = "display:none";
// });