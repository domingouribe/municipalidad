const buttons = document.querySelectorAll(".mega-navi__super");
const blocks = document.querySelectorAll(".mega-block");
let openBlock = null; // Variable para mantener el bloque abierto actualmente

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (openBlock !== null) {
      // Si hay un bloque abierto, ciérralo
      openBlock.classList.remove("block-open");
    }

    if (openBlock !== blocks[index]) {
      // Si el bloque actual no está abierto, ábrelo
      blocks[index].classList.add("block-open");
      openBlock = blocks[index];
    } else {
      // Si se hace clic en el mismo botón, cierra el bloque
      openBlock = null;
    }

    // Restaurar el estado de los botones
    buttons.forEach((btn) => {
      btn.classList.remove("button-active");
    });

    // Establecer el estado del botón actual
    button.classList.add("button-active");
  });
});
