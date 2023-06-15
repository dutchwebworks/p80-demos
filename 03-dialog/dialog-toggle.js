document.addEventListener("DOMContentLoaded", () => {
  const dialog2ReturnValue = document.getElementById("dialog2ReturnValue");


  // Open dialogs
  // --------------------------------------------------------------

  document.querySelectorAll("[data-dialog-open]").forEach((button) => {
    button.addEventListener("click", (event) => {
      dialog2ReturnValue.innerText = "";

      if(event.target.hasAttribute("data-tooltip")) {
        document.getElementById(button.dataset.dialogOpen).show();
      } else {
        document.getElementById(button.dataset.dialogOpen).showModal();
      }
    });
  });


  // Close dialogs
  // --------------------------------------------------------------

  document.querySelectorAll("[data-dialog-close]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.target.closest("dialog").close(event.target.value);
    });
  });


  // Close dialogs when clicking on the dimmed background
  // --------------------------------------------------------------

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


  // Dialog 2, return value
  // --------------------------------------------------------------  

  const dialog2 = document.getElementById("dialog2");
  const dialog2ConfirmButton = document.getElementById("dialog2ConfirmButton");  

  dialog2.addEventListener("close", event => {
    dialog2ReturnValue.innerText = `Return value: "${dialog2.returnValue}"`;
  });

  dialog2ConfirmButton.addEventListener("click", (event) => {
    event.preventDefault();
    dialog2.close(dialog2ConfirmButton.value);
  });
});