function alerta() {
  var alertMenu = document.getElementById("alertMenu");
  var alertListContainer = document.getElementById("alertList");
  var alertArrow = document.querySelector(".alert-arrow"); 

  alertListContainer.innerHTML = '';

  var alerta = listAlertas[1];
  var alertItem = document.createElement("div");
  alertItem.classList.add("alert-item");
  alertItem.innerHTML = "<i class='fa-solid fa-circle pr-2' style='color: #74C0FC;'></i> <strong>Placa:</strong> " + alerta.placa + ", <strong>Infracao:</strong> " + alerta.infracao + ", <strong>Gravidade:</strong> " + alerta.gravidade;
  alertListContainer.appendChild(alertItem);

  alertArrow.style.display = "block";

  if (alertMenu.style.display === "block") {
      alertMenu.style.display = "none";
      alertArrow.style.display = "none";
  } else {
      alertMenu.style.display = "block";
      alertArrow.style.display = "block";
  }
}

window.onclick = function(event) {
  if (!event.target.matches('.fa-bell')) {
    var alertMenus = document.getElementsByClassName("alert-menu");
    for (var i = 0; i < alertMenus.length; i++) {
      var openAlertMenu = alertMenus[i];
      if (openAlertMenu.style.display === "block") {
        openAlertMenu.style.display = "none";

        var alertArrow = document.querySelector(".alert-arrow");
        if (alertArrow.style.display === "block") {
          alertArrow.style.display = "none";
        }
      }
    }
  }
}
