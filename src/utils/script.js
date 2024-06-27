const list = document.querySelector("ul");
const imgs = Array.from(list.children);
const nextButton = document.querySelector("btn_right");
const prevButton = document.querySelector("btn_left");
const carroselNav = document.querySelector("nav");
const dots = Array.from(carroselNav.children);

const imgWidth = imgs[0].getBoundingClientRect().width;

// function setImgProsition(img, index){
//   img.style.left = innerWidth * index + "px";
// }

const setImgProsition = (img, index) => {
  img.style.left = innerWidth * index + "px";
}

imgs.forEach(setImgProsition);

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current--img");
  targetDot.classList.add("current--img");
}

const moveToImg = (list, currentImg, targetImg) => {
  list.style.transform = 'translateX(-' + targetImg.style.left + ')';
  currentImg.classList.remove('current--img');
  targetImg.classList.add('current--img');
}

const hideShowArrows = (prevButton, nextButton, imgs, targetIndex) => {
  if(targetIndex === 0){
    prevButton.classList.add('hidden');
    nextButton.classList.remove('hidden');
  }else if(targetIndex === imgs.length -1){
    prevButton.classList.remove('hidden');
    nextButton.classList.add('hidden');
  }else{
    prevButton.classList.remove('hidden');
    nextButton.classList.remove('hidden');
  }

}

nextButton.addEventListener("click", (e) => {
  const currentImg = list.querySelector('.current--img');
  const nextImg = currentImg.nextElementSibling;
  const currentDot = carroselNav.querySelector(".current--img");
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = imgs.findIndex((img) => img === nextImg);

  moveToImg(list,currentImg, nextImg);
  updateDots(currentDot, nextDot);
  hideShowArrows(prevButton, nextButton, imgs, nextIndex);
});

prevButton.addEventListener("click", (e) => {
  const currentImg = list.querySelector('.current--img');
  const prevImg = currentImg.previousElementSibling;
  const currentDot = carroselNav.querySelector(".current--img");
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = imgs.findIndex((img) => img === prevImg);
  
  moveToImg(list,currentImg, prevImg);
  updateDots(currentDot, prevDot);
  hideShowArrows(prevButton, nextButton, imgs, prevIndex);
});

carroselNav.addEventListener("click", (e) => {
  const targetDot = e.target.closest('buttom');
  if(!targetDot) return;
  const currentImg = list.querySelector(".current--img");
  const currentDot = carroselNav.querySelector(".current--img");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);

  moveToImg(list, currentDot, currentImg);
  updateDots(currentDot, targetDot);

  hideShowArrows(prevButton, nextButton, imgs, targetIndex);
})
