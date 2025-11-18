function actualizarHoraCDMX() {
    const horaCDMXElement = document.getElementById('hora-cdmx');
    const ahoraCDMX = moment.tz('America/Mexico_City').format('HH:mm:ss');
    horaCDMXElement.textContent = 'Hora CDMX: ' + ahoraCDMX;
}

// Actualizar la hora cada segundo
setInterval(actualizarHoraCDMX, 1000);

// Inicializar la hora al cargar la página
actualizarHoraCDMX();

console.log("¡La página está en proceso de desarrollo!");