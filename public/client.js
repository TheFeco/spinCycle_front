const publicVapidKey = "BM_rRLyqVP60tMstFQFpy1zDpRSTdBODR2cnd3VgFux9HtyvTeoPgIGXmZYrnZzzM5b_WunyX-DpM635ULzJHxw";

// Check for service worker
if ("serviceWorker" in navigator) {
  send().catch(err => console.error(err));
}

// Register SW, Register Push, Send Push
async function send() {
  
  if (typeof localStorage.getItem('userId') !== 'undefined') {
    const userId = localStorage.getItem('userId');

    const register = await navigator.serviceWorker.register("/worker.js", {
      scope: "/"
    });

    register.pushManager.getSubscription().then(function(sub) {
      if (sub === null) {
        // Register Push
        register.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
        }).then((subscription) => {
          // fetch("http://localhost:3001/api/subscription", {
          //   method: "POST",
          //   body: JSON.stringify({ userId, subscription }),
          //   headers: {
          //   "content-type": "application/json"
          //   }
          // }).catch((error) => console.log(error));
        });
      } else {
        console.log('Subscription object: ', sub);
      }
    });
  }
}

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
