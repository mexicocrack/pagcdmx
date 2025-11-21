function actualizarHoraCDMX() {
  const horaCDMXElement = document.getElementById("hora-cdmx");
  const ahoraCDMX = moment.tz("America/Mexico_City").format("HH:mm:ss");
  horaCDMXElement.textContent = "Hora CDMX: " + ahoraCDMX;
  horaCDMXElement.style.color = "#fff"; /* Color blanco para la hora */
}

function actualizarTemporizador() {
  const fechaFinal = moment("2025-11-27T00:00:00"); // Jueves 27 de noviembre de 2025
  const ahora = moment();
  const diferencia = moment.duration(fechaFinal.diff(ahora));

  const dias = diferencia.days();
  const horas = diferencia.hours();
  const minutos = diferencia.minutes();
  const segundos = diferencia.seconds();

  const temporizadorElement = document.getElementById("temporizador");
  temporizadorElement.textContent = `${dias} días, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
}

// Actualizar la hora de la CDMX cada segundo
setInterval(actualizarHoraCDMX, 1000);

// Actualizar el temporizador cada segundo
setInterval(actualizarTemporizador, 1000);

// Inicializar la hora de la CDMX al cargar la página
actualizarHoraCDMX();

// Inicializar el temporizador al cargar la página
actualizarTemporizador();

console.log("¡La página está en proceso de desarrollo!");
