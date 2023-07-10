if ("serviceWorker" in navigator && location.hostname !== "127.0.0.1") {
  window.addEventListener("load", () => {
      navigator.serviceWorker.register("/service-worker.js");
  });
}
