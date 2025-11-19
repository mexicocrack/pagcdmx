moment.locale("es");

function updateTime() {
  const now = moment().tz("America/Mexico_City");
  document.getElementById("cdmx-time").textContent = now.format(
    "dddd D/MM/YYYY · HH:mm:ss"
  );
}

// Actualizar cada segundo
updateTime();
setInterval(updateTime, 1000);
