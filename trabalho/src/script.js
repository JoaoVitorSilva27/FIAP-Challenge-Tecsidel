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


function changeSrc(elemnt) {
  primaryCamElement = document.querySelectorAll('#primary-cam')
  srcPathPrimaryCam = primaryCamElement[0].src
  primaryCamElement[0].src =  elemnt.src
	elemnt.src = srcPathPrimaryCam
}

function obtenerAnchoPantalla() {
  var ancho = window.innerWidth;
  console.log("Ancho de la pantalla: " + ancho + "px");
}

window.addEventListener("resize", function() {
  obtenerAnchoPantalla();
});

obtenerAnchoPantalla();