window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    window.bipEvent = event;
});

document.addEventListener("DOMContentLoaded", () => {
    const pwaBanner = document.querySelector(".pwa-banner");
    const pwaBannerDismissButton = document.querySelector("[data-pwa-dismiss]");
    const pwaInstallButton = document.querySelector("[data-pwa-install]");
    const pwaInstallInstructions = document.querySelector("[data-pwa-install-instructions]");

    setTimeout(() => {
        pwaBanner.removeAttribute("hidden");
    }, 2000);

    pwaBannerDismissButton.addEventListener("click", () => {
        pwaBanner.setAttribute("hidden", null);
    });

    pwaInstallButton.addEventListener("click", async (event) => {
        event.preventDefault();

        if(window.bipEvent) {
            bipEvent.prompt();

            const { outcome } = await bipEvent.userChoice;

            if (outcome === 'accepted') {
                pwaInstallButton.setAttribute("hidden", null);
            } else if (outcome === 'dismissed') {
                pwaInstallButton.removeAttribute("hidden");
                pwaInstallInstructions.setAttribute("hidden", null);
            }
        } else {
            pwaInstallButton.setAttribute("hidden", "hidden");
            pwaInstallInstructions.removeAttribute("hidden");
        }
    });
});