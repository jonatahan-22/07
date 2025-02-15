// Función para abrir el modal y mostrar la imagen y el título
function abrirModal(imagen, titulo) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");

  modalImg.src = imagen;
  modalTitle.innerText = titulo;
  modal.style.display = "flex";
}

// Función para cerrar el modal
function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}

// Cerrar modal al hacer clic fuera de la ventana modal
window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    cerrarModal();
  }
};

// Cerrar modal al presionar la tecla ESC
window.onkeydown = function (event) {
  if (event.key === "Escape") {
    cerrarModal();
  }
};
