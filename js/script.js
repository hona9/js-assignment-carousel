var carouselContainer = document.querySelector('.carousel-container');
var imageWrapper = document.querySelector('.carousel-image-wrapper');

var images = imageWrapper.children;
var numImages = images.length;

//button wrapper
var btnDiv = document.createElement('div');
btnDiv.classList.add('carousel-buttons');
carouselContainer.appendChild(btnDiv);

//previous button
var prevButton = document.createElement('button');
prevButton.classList.add('button', 'prev');
prevButton.innerHTML = '<img class="btn-image" src="./img/icon-arrow-left.svg" alt="Previous">';
btnDiv.appendChild(prevButton);

//next button
var nextButton = document.createElement('button');
nextButton.classList.add('button', 'next');
nextButton.innerHTML = '<img class="btn-image" src="./img/icon-arrow-right.svg" alt="next">';
btnDiv.appendChild(nextButton);

let imageIndex = 0;
// let visibleImage = images[imageIndex];
// visibleImage.setAttribute('class', 'carousel-visible');

function nextImage(){
  if(imageIndex == numImages-1){
    imageIndex = 0;
  }else{
    imageIndex++;
  }
  for(let image of images){
    image.classList.remove('prev-slide');
    image.classList.add('next-slide');
  }
  updatePosition();
}

//interval to automate slide
setInterval(nextImage, 4000);

function prevImage(){
  if(imageIndex == 0){
    imageIndex = numImages-1;
  }else{
    imageIndex--;
  }
  for(let image of images){
    image.classList.remove('next-slide');
    image.classList.add('prev-slide');
  }
  updatePosition();
}

function updatePosition(){
  for(let image of images){
    image.classList.remove('carousel-visible');
    image.classList.add('carousel-hidden');
  }
  for(let indicates of indicatorButtons){
    indicates.classList.remove('current');
  }
  indicatorButtons[imageIndex].classList.add('current');
  images[imageIndex].classList.remove('carousel-hidden');
  images[imageIndex].classList.add('carousel-visible');
}

prevButton.onclick = prevImage;
nextButton.onclick = nextImage;

//carousel nav
var carouselNav = document.createElement('div');
carouselNav.classList.add('carousel-nav');
carouselContainer.appendChild(carouselNav);

//number of carousel nav buttons
for (var i = 0; i < numImages; i++) {
  var navButton = document.createElement('div');
  navButton.classList.add('carousel-indicator');
  navButton.setAttribute('id', i);
  carouselNav.appendChild(navButton);
}

//for first indicator in landing time
const firstIndicator = document.getElementById('0');
firstIndicator.classList.add('class', 'current');

//checking which nav button has been pressed and assigning the value to image index.
const indicatorButtons = document.querySelectorAll('.carousel-indicator');
indicatorButtons.forEach(button => {
  button.addEventListener('click', e =>{
    imageIndex = e.target.id;
    for(let image of images){
      image.classList.remove('prev-slide');
      image.classList.remove('next-slide');
    }
    updatePosition();
  });
});