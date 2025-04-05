document.querySelector('#contacto form').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita envío real

    // Mostrar la modal
    const modal = new bootstrap.Modal(document.getElementById('modalConfirmacion'));
    modal.show();

    // Resetear formulario (opcional)
    this.reset();
  });
