document.addEventListener("DOMContentLoaded", () => {
    const wcagForm = document.getElementById("wcag-form");

    wcagForm.addEventListener("submit", (event) => {
        const nameInput = document.getElementById("name");
        const passwordInput = document.getElementById("password");
        let formIsValid = true;

        if (!nameInput.value) {
            nameInput.setAttribute("aria-invalid", "true");
            formIsValid = false;
        }

        if (!passwordInput.value) {
            passwordInput.setAttribute("aria-invalid", "true");
            formIsValid = false;
        }

        if (!formIsValid) {
            event.preventDefault();
        }
    });
});
