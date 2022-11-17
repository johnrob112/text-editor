const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event



window.addEventListener('beforeinstallprompt', (event) => {

    deferredPrompt = e;
    butInstall.style.visibility = 'visible';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {

    if (deferredPrompt !== null) {
        deferredPrompt?.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
          butInstall.setAttribute('disabled', true);
          butInstall.textContent = 'Installed!';
          deferredPrompt = null;
      }
      }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {});
