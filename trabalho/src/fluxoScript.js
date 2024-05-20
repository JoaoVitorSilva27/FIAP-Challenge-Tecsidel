function obtenerAnchoPantalla() {
  var windowWidth = window.innerWidth;

  var mainContainers = document.querySelectorAll(".main-container");
  mainContainers.forEach(function (container) {
    if (windowWidth < 768) {
      container.classList.remove("col-8");
      container.classList.add("col-12");
    } else {
      container.classList.remove("col-12");
      container.classList.add("col-8");
    }
  });
}

window.addEventListener("resize", obtenerAnchoPantalla);

obtenerAnchoPantalla();
