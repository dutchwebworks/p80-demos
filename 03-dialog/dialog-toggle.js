document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-dialog-open]").forEach((button) => {
    button.addEventListener("click", (event) => {
      if(event.target.hasAttribute("data-tooltip")) {
        document.getElementById(button.dataset.dialogOpen).show();
      } else {
        document.getElementById(button.dataset.dialogOpen).showModal();
      }
    });
  });

  document.querySelectorAll("[data-dialog-close]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.target.closest("dialog").close();
    });
  });

  document.querySelectorAll("dialog").forEach((dialog) => {
    dialog.addEventListener("click", (event) => {
      const dialogDimensions = dialog.getBoundingClientRect();

      if (
        event.clientX < dialogDimensions.left ||
        event.clientX > dialogDimensions.right ||
        event.clientY < dialogDimensions.top ||
        event.clientY > dialogDimensions.bottom
      ) {
        dialog.close();
      }
    });
  });
});
