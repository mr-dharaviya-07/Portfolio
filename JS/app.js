// const swiper = require('swiper');

body = document.querySelector("body");

imgs = document.querySelectorAll(".image");
header = document.querySelector(".header");
mainFrame = document.querySelector(".mainFrame");
container = document.querySelector(".container");
grid = document.querySelector(".grid");
Logo = document.querySelector(".logo");

for (img of imgs) {
    img.addEventListener("click", imgSelect);
}


swiper = document.querySelector(".mySwiper");
// swiperSlides = document.querySelectorAll(".swiper-slide");
swiperWrapper = document.querySelector(".swiper-wrapper");
mainFrame1 = document.querySelector(".slidermainFrame");
sliderFrames = document.querySelectorAll(".sliderFrame");
details = document.querySelectorAll(".detail");
detailSwiper = document.querySelector(".detailSwiper");
backframe1 = document.querySelector(".backframeslider");
backframeGrid = document.querySelector(".backframegrid");
slidergrid = document.querySelector(".slidergrid");
rightArrow = document.querySelector(".fa-chevron-right");
leftArrow = document.querySelector(".fa-chevron-left");
swiperImgs = document.querySelectorAll(".swiperImg");

closeSlider = document.querySelector(".closeSlider");


function nameOfFunction(num) {
    // console.log(`inside ${num}`);
    new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".fa-chevron-right",
            prevEl: ".fa-chevron-left",
        },
        keyboard: {
            enabled: true,
        },

        initialSlide: num,
        // slidesPerView: 1,

        on: {
            slideChange: function(){
                backframe1.style.transform = "rotateY(180deg)";
                for (swiperImg of swiperImgs) {
                    let img = swiperImg;
                    img.style.transform = "rotateY(0deg)";
                    }
                back();
            },
        }
    });
}
function imgSelect() {
    let img = this;
    let gridContainer = img.parentElement;
    let children = gridContainer.children;

    let imgNumber = Array.prototype.indexOf.call(children, img);

    let sildeNumber = imgNumber;
    // console.log(sildeNumber);

    nameOfFunction(sildeNumber);

    closeSlider.style.zIndex = "2";
    
    body.style.overflow = "hidden";
    header.style.filter = "blur(20px)";
    Logo.style.filter = "blur(20px)";
    Logo.style.zIndex = "1";
    container.style.filter = "blur(12px) brightness(0.5)";
    
    setTimeout(()=>{
        swiper.style.opacity = "1";
        swiper.style.zIndex = "3";
    },100);
    detailSwiper.style.zIndex = "-5";
    rightArrow.style.opacity = "1";
    leftArrow.style.opacity = "1";
    rightArrow.style.zIndex = "4";
    leftArrow.style.zIndex = "4";

    // document.addEventListener('DOMContentLoaded', fun);

    // document.addEventListener('keydown', function (event) {
    //     if (event.key === 'ArrowRight') {
    //         swiper.slideNext();
    //     } else if (event.key === 'ArrowLeft') {
    //         swiper.slidePrev();
    //     }
    // });

    // mainFrame1.style.transform = `translateX(-${sildeNumber * 1300}px)`;

    // function nextSilde() {
    //     let backclass = backframe1.classList[1];
    //     backframe1.classList.remove(backclass);
    //     backframe1.style.background = "white";
    //     backframe1.style.opacity = "0";
    //     backframeGrid.style.zIndex = "-1";
    //     backframe1.style.transform = "rotateY(180deg)";
    //     for (sliderFrame of sliderFrames) {
    //         sliderFrame.style.transform = "rotate(0deg)";
    //     }
    //     setTimeout(() => {
    //         sildeNumber++;
    //         mainFrame1.style.transform = `translateX(-${sildeNumber * 1300}px)`;
    //     }, 250);
    // }

    // function previousSilde() {
    //     let backclass = backframe1.classList[1];
    //     backframe1.classList.remove(backclass);
    //     backframe1.style.background = "white";
    //     backframe1.style.opacity = "0";
    //     backframeGrid.style.zIndex = "-1";
    //     backframe1.style.transform = "rotateY(180deg)";
    //     for (sliderFrame of sliderFrames) {
    //         sliderFrame.style.transform = "rotate(0deg)";
    //     }
    //     setTimeout(() => {
    //         sildeNumber--;
    //         console.log(`previous:${sildeNumber}`);
    //         mainFrame1.style.transform = `translateX(-${sildeNumber * 1300}px)`;
    //     }, 250);
    // }
    // rightArrow.addEventListener("click", nextSilde);
    // leftArrow.addEventListener("click", previousSilde);

//     document.addEventListener("keydown", event => {
//         if (event.key === "ArrowRight") {
//             nextSilde();
//         }
//         else if (event.key === "ArrowLeft") {
//             previousSilde();
//         }
//     });
}

// document.addEventListener('keydown', function (event) {
//     if (event.key === 'ArrowRight') {
//         // slideNext();
//     } else if (event.key === 'ArrowLeft') {
//         slidePrev();
//     }
// });
for (swiperImg of swiperImgs) {
    swiperImg.addEventListener("click", rotate);
}

function rotate() {
    let img = this;
    let detailName = "";
    let imgSrc = img.getAttribute("src");
    let imgClass = img.classList[1];

    for (detail of details) {
        if (imgClass == detail.classList[1]) {
            detailName = detail.innerHTML;
        }
    }
    let frameClass = img.classList[2];
    backframe1.classList.add(frameClass);
    if (frameClass == "frame_note" || frameClass == "frame_note100" || frameClass == "frame_ticket") {
        let backImg = nextImage(imgSrc);

        backframe1.style.backgroundImage = `url(${backImg})`;
        backframe1.style.backgroundSize = "contain";
        backframe1.style.backgroundRepeat = "no-repeat";
        backframe1.style.backgroundPosition = "center";
        backframe1.style.backgroundColor = "transparent";

    }
    backframe1.innerHTML = detailName;
    // img.classList.toggle("filp");
    // backframe1.classList.toggle("filp");

    img.style.transform = "rotateY(180deg)";
    // img.style.transition = "transform 1s";
    // backframe1.style.transition = "transform 0.7s";
    backframe1.style.transform = "rotateY(0deg)";
    backframe1.style.opacity = "1";
    detailSwiper.style.zIndex = "5";
    detailSwiper.style.opacity = "1";
}
function back(){
        let backclass = backframe1.classList[1];
        backframe1.classList.remove(backclass);
        backframe1.style.background = "white";
        backframe1.style.opacity = "0";
        detailSwiper.style.zIndex = "-2";
        // backframeGrid.style.zIndex = "-1";
}
try{
    backframe1.addEventListener("click", rotate2);
}
catch{
}

function nextImage(Src) {
    let string = Src;
    let new_string = string.slice(11, 13);
    let num = Number(new_string);
    let url = `Gallery/IMG${num + 1}.jpg`;
    return url;
}

function rotate2() {
    backframe1.style.transform = "rotateY(180deg)";
    // backframe1.classList.toggle("filp");
    // backframe1.classList.add("filp");

   for (swiperImg of swiperImgs) {
    let img = swiperImg;
    img.style.transform = "rotateY(0deg)";
    // img.classList.toggle("filp");

    }
    swiper.style.zIndex="4";
    detailSwiper.style.zIndex= "3";

    // for (sliderFrame of sliderFrames) {
    //     sliderFrame.style.transform = "rotate(0deg)";
    // }
    // backframeGrid.style.zIndex = "1";
}
try{
    closeSlider.addEventListener("click", closeAll);

}
catch{
}

document.addEventListener("keydown", event => {
    if (event.key == "Escape") {
        closeAll();
    }
});

function closeAll() {
    swiper.style.opacity = "0";
    swiper.style.zIndex = "-3";
    closeSlider.style.zIndex = "-2";
    rightArrow.style.zIndex = "-1";
    leftArrow.style.zIndex = "-1";
    rightArrow.style.opacity = "0";
    leftArrow.style.opacity = "0";
    backframe1.style.opacity = "0";
    detailSwiper.style.zIndex= "-3";
    container.style.filter = "blur(0px)";
    header.style.filter = "blur(0px)";
    body.style.overflow = "scroll";
    let backclass = backframe1.classList[1];
    backframe1.classList.remove(backclass);
    for (swiperImg of swiperImgs) {
        let img = swiperImg;
        img.classList.remove("filp");
        img.style.transfrom = "rotateY(0deg)";
    }
    sildeNumber = 0;
    // rotate2();
    setTimeout(()=>{
        Logo.style.zIndex = "3";
        Logo.style.filter = "blur(0px)";
    },100);
    
    // slidergrid.style.transition = "opacity 0.1s";
}


navbtn = document.querySelector(".navbar");
nav = document.querySelector("nav");

navbtn.addEventListener("click", show);

function show() {
    // console.log("hello.....");
    nav.classList.toggle("visible");
    header.classList.toggle("visible");
    nav.classList.toggle("drop-filter");

}

// CameraName = document.querySelector(".CameraName");
// canon = document.querySelector(".canon");
// use = document.querySelector(".use");

// CameraName.style.transform = "translateY(0px)";
// canon.style.opacity = "1";
// use.style.opacity = "1";

