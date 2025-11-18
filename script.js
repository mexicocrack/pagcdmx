function actualizarHora() {
  const horaCDMX = moment().tz("America/Mexico_City").format("HH:mm:ss");
  document.getElementById("hora-cdmx").textContent = horaCDMX;
}

setInterval(actualizarHora, 1000);
actualizarHora();
