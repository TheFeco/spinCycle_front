console.log("Service Worker Loaded...");

self.addEventListener("push", e => {
  const data = e.data.json();
  
  self.registration.showNotification("Spincycle", {
    body: data.title,
    icon: 'https://spincycle.mx/logo2.png'
  });
});

self.addEventListener('notificationclick', function(event) {
  let url = 'https://spincycle.mx/notificaciones';
  event.notification.close();
  event.waitUntil(
      clients.matchAll({type: 'window'}).then( windowClients => {
          // Check if there is already a window/tab open with the target URL
          for (var i = 0; i < windowClients.length; i++) {
              var client = windowClients[i];
              // If so, just focus it.
              if (client.url === url && 'focus' in client) {
                  return client.focus();
              }
          }
          // If not, then open the target URL in a new window/tab.
          if (clients.openWindow) {
              return clients.openWindow(url);
          }
      })
  );
});
