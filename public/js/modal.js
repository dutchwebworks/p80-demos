document.addEventListener("DOMContentLoaded", () => {
    const isActiveClassname = "is-active";
    let previousActiveElement;

    function openModal (event) {
        event.preventDefault();
        document.addEventListener("keydown", closeActiveModalByEscapeKey);
        previousActiveElement = document.activeElement;

        const modal = document.getElementById(event.target.dataset.modalOpen);
        modal.classList.add(isActiveClassname);
        modal.removeAttribute("aria-hidden");
        modal.querySelector("[data-modal-focus]").focus();
        modal.querySelectorAll("[data-modal-close]").forEach((modalCloseButtons) => modalCloseButtons.addEventListener("click", closeActiveModal));
    }

    function closeActiveModal(event) {
        event?.preventDefault();
        document.removeEventListener("keydown", closeActiveModalByEscapeKey);
        previousActiveElement.focus();

        const activeModal = document.querySelector(`.modal.${isActiveClassname}`);
        activeModal.setAttribute("aria-hidden", "hidden");
        activeModal.classList.remove(isActiveClassname);
    }

    function closeActiveModalByEscapeKey() {
        if (event.keyCode === 27) {
            closeActiveModal(null);
        }
    }
    
    document.querySelectorAll("[data-modal-open]").forEach((modalButton) => modalButton.addEventListener("click", openModal));
});
