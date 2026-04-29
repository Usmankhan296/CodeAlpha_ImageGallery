const images = document.querySelectorAll(".gallery img")
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let currentIndex = 0;


images.forEach((img,index)=>{
    img.addEventListener("click",()=>{
     lightbox.style.display="flex"  
     lightboxImg.src=img.src 
     currentIndex=index
    })
})

closeBtn.addEventListener("click",()=>{
    lightbox.style.display="none"
})

// nextBtn.onclick = () => {
//   currentIndex = (currentIndex + 1) % images.length;
//   lightboxImg.src = images[currentIndex].src;
// };

nextBtn.addEventListener("click",()=>{
    currentIndex=(currentIndex+1)%images.length
    lightboxImg.src=images[currentIndex].src
})

prevBtn.addEventListener("click",()=>{
    currentIndex = (currentIndex-1 + images.length) % images.length
    lightboxImg.src=images[currentIndex].src
})