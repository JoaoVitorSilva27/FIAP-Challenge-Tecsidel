var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  centeredSlides: false,
  rewind: true,
  allowTouchMove: false,
  spaceBetween: 10,
  navigation: {
	nextEl: ".swiper-button-next",
	prevEl: ".swiper-button-prev",
  },
  
});

swiper.params.slidesPerView = 4;
swiper.update();

function changeSrc(elemnt) {
  primaryCamElement = document.querySelectorAll('#primary-cam')
  srcPathPrimaryCam = primaryCamElement[0].src
  primaryCamElement[0].src =  elemnt.src
	elemnt.src = srcPathPrimaryCam
}


function obtenerAnchoPantalla() {
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;

  swiper.height = (windowHeight - 114) / 2;
  swiper.params.slidesPerView = Math.floor((windowWidth - 290) / 280); 

  if (windowWidth < 768) {
    swiper.allowTouchMove = true
  }
  
  swiper.update();

}

window.addEventListener("resize", function() {
  obtenerAnchoPantalla();
});

obtenerAnchoPantalla();


function stepsSwiper(windowWidth) {
  swiper.params.slidesPerView = Math.floor((windowWidth - 290) / 280);  
}