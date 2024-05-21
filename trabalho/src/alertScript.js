var intervalID = setInterval(myCallback, 7000);

function myCallback() {
  let alerta = listAlertas[Math.floor(Math.random() * 10)];
  if (alerta.gravidade == "Grave") {
    var icon =
      '<i class="fas fa-times-circle status-icon inactive" style="color: red; padding-right: 10px;" ></i>';
  } else {
    var icon =
      '<i class="fa fa-exclamation-triangle" aria-hidden="true" style="color: orange; padding-right: 10px;"></i>';
  }

  let toast = document.querySelector("#toast");
  toast.innerHTML = `
  <div class="toast-header">
    ${icon}
    <strong class="mr-auto">${alerta.infracao}</strong>
    <button type="button"
            class="ml-2 mb-1 close"
            data-dismiss="toast"
            aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="toast-body">
    <p>Placa do veiculo: <strong>${alerta.placa}</strong></p>
    <p><strong>${alerta.gravidade}</strong></p>
  </div>`;

  $(".toast").toast({
    delay: 2000,
  });
  $(".toast").toast("show");
}

const listAlertas = [
  {
    placa: "NYK7C15",
    infracao: "Excesso de velocidade",
    gravidade: "Grave",
  },
  {
    placa: "MIA3H40",
    infracao: "Iluminação inadequada",
    gravidade: "Leve",
  },
  {
    placa: "GSW5C30",
    infracao: "Lanterna queimada	",
    gravidade: "Média",
  },
  {
    placa: "LAL6J23",
    infracao: "Rodizio",
    gravidade: "Média",
  },
  {
    placa: "QWE8F12",
    infracao: "Iluminação inadequada",
    gravidade: "Leve",
  },
  {
    placa: "HJK5N73",
    infracao: "Dirigir sem cinto de segurança",
    gravidade: "Grave",
  },
  {
    placa: "TYU3E21",
    infracao: "Uso do celular enquanto dirige",
    gravidade: "Media",
  },
  {
    placa: "ASD9F80",
    infracao: "Incumprimento do sinal de stop",
    gravidade: "Leve",
  },
  {
    placa: "GHJ4K56",
    infracao: "Dirigir sem cinto de segurança",
    gravidade: "Grave",
  },
];