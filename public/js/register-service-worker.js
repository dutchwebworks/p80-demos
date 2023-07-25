if ("serviceWorker" in navigator && location.hostname !== "localhost") {
  window.addEventListener("load", () => {
      navigator.serviceWorker.register("/service-worker.js");
  });
}
