

let cameraImgs = document.querySelectorAll(".canon");
let CameraName = document.querySelector(".CameraName");
let nameContainer = document.querySelector(".nameContainer");
let nameGrid = document.querySelector(".nameGrid");

let cameraSwiper = new Swiper(".cameraSwiper", {
    navigation: {
        nextEl: ".fa-chevron-right",
        prevEl: ".fa-chevron-left",
    },
    keyboard: {
        enabled: true,
    },
    on: {
        slideNextTransitionStart: changeCamera,
    
        slidePrevTransitionStart: changeCamera,
    },
});

function changeCamera(){
    let num = cameraSwiper.activeIndex;
    CameraName.innerHTML = nameGrid.children[num].innerHTML; 
    nameContainer.appendChild(CameraName);
}



let nextSection = document.querySelector(".nextSection");
let photoshopMain = document.querySelector(".photoshopMain");
let photoshopTag = document.querySelector(".photoshopTag");
let editing =document.querySelector(".editing");

window.onscroll = () =>{
    let scollbar = window.scrollY; 
    // console.log(scollbar);
    let top = nextSection.offsetTop;
    // console.log(top);
    let height = nextSection.offsetHeight;

    if(700 < scollbar && top+height>scollbar){
        // console.log("inside if");
        photoshopMain.classList.add("photoshopScroll");
        photoshopTag.classList.add("opacityAnimation");
        editing.classList.add("opacityAnimation");
    }
    else{
        photoshopMain.classList.remove("photoshopScroll");
        photoshopTag.classList.remove("opacityAnimation");
        editing.classList.remove("opacityAnimation");



    }
}
 
