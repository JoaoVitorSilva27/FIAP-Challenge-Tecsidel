function obtenerAnchoPantallaNavBar() {
  var windowWidth = window.innerWidth;
  var sidebar = document.querySelector(".sidebar");
  var darkSection = document.querySelector(".dark-section");

  if (windowWidth < 768) {
    sidebar.classList.remove("sidebar-active");
    sidebar.classList.add("sidebar-inactive");

    darkSection.classList.remove("dark-section-active");
    darkSection.classList.add("dark-section-inactive");
  } else {
    sidebar.classList.add("sidebar-active");
    sidebar.classList.remove("sidebar-inactive");

    darkSection.classList.add("dark-section-active");
    darkSection.classList.remove("dark-section-inactive");
  }
}

window.addEventListener("resize", function () {
  obtenerAnchoPantallaNavBar();
});

obtenerAnchoPantallaNavBar();

function toggleNavBar() {
  var sidebar = document.querySelector(".sidebar");
  var darkSection = document.querySelector(".dark-section");
  if (sidebar.classList.contains('sidebar-inactive')) {
    sidebar.classList.add("sidebar-active");
    sidebar.classList.remove("sidebar-inactive");
    darkSection.classList.add("dark-section-active");
    darkSection.classList.remove("dark-section-inactive");
  } else {
    sidebar.classList.remove("sidebar-active");
    sidebar.classList.add("sidebar-inactive");
    darkSection.classList.remove("dark-section-active");
    darkSection.classList.add("dark-section-inactive");
  }
}

document.addEventListener('click', function(event) {
  let element = event.target;
  let isClickInsideSidebarOrIconbar = false;

  var sidebar = document.querySelector(".sidebar");
  var darkSection = document.querySelector(".dark-section");

  while (element) {
    if (element.classList) {
      if (element.classList.contains('sidebar') || element.classList.contains('iconebar')) {
        isClickInsideSidebarOrIconbar = true;
        break;
      }
    }
    element = element.parentElement;
  }

  if (!isClickInsideSidebarOrIconbar && window.innerWidth < 768) {
    sidebar.classList.remove("sidebar-active");
    sidebar.classList.add("sidebar-inactive");
    darkSection.classList.remove("dark-section-active");
    darkSection.classList.add("dark-section-inactive");
  }
});

