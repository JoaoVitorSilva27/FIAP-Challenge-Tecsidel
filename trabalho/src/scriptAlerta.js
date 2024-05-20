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
