document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll('[role="tab"]');
    const tabList = document.querySelector('[role="tablist"]');

    // Add a click event handler to each tab
    tabs.forEach((tab) => {
        tab.addEventListener("click", (event) => {
            const target = event.target;
            const parent = target.parentNode;
            const grandparent = parent.parentNode;

            // Remove all current selected tabs
            parent
                .querySelectorAll('[aria-selected="true"]')
                .forEach((t) => t.setAttribute("aria-selected", false));
                
            // Set this tab as selected
            target.setAttribute("aria-selected", true);
            
            // Set all to -1
            parent
                .querySelectorAll('[role="tab"]')
                .forEach((t) => t.setAttribute("tabindex", "-1"));
            
            // Set selected one to 0
            target.setAttribute("tabindex", "0");
            // target.removeAttribute("tabindex");

            // Hide all tab panels
            grandparent
                .querySelectorAll('[role="tabpanel"]')
                .forEach((p) => p.setAttribute("aria-hidden", "true"));

            // Show the selected panel
            grandparent
                .querySelector(`#${target.getAttribute("aria-controls")}`)
                .removeAttribute("aria-hidden");
        });
    });

    // Enable arrow navigation between tabs in the tab list
    let tabFocus = 0;

    tabList.addEventListener("keydown", (e) => {
        // Move right
        if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
            tabs[tabFocus].setAttribute("tabindex", -1);

            if (e.key === "ArrowRight") {
                tabFocus++;
                // If we're at the end, go to the start
                if (tabFocus >= tabs.length) {
                    tabFocus = 0;
                }
                // Move left
            } else if (e.key === "ArrowLeft") {
                tabFocus--;
                // If we're at the start, move to the end
                if (tabFocus < 0) {
                    tabFocus = tabs.length - 1;
                }
            }

            tabs[tabFocus].setAttribute("tabindex", 0);
            tabs[tabFocus].focus();
        }
    });
});