document.addEventListener(`DOMContentLoaded`, initPWA);

function initPWA() {
  if (`serviceWorker` in navigator) {
    navigator.serviceWorker.register("/service-worker.js", { scope: "/" }).then(
      (reg) => {
        console.log(`Service worker registered -->`, reg);
        console.log(`Registration successful, scope is:`, reg.scope);
      },
      (err) => {
        console.error(`Service worker not registered -->`, err);
      }
    );
  }
}
