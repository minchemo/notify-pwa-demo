import { initializeApp, getApps } from 'firebase/app'
import { getMessaging, onMessage, type Messaging } from 'firebase/messaging'

declare module '#app' {
  interface NuxtApp {
    $messaging: Messaging
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $messaging: Messaging
  }
}

export default defineNuxtPlugin(() => {
  const app = getApps()[0] ?? initializeApp({
    apiKey: "AIzaSyDPqgAzcJKhBn4NljgxR6GVJYk8dZ_z_Y4",
    authDomain: "pwa-notify-791b8.firebaseapp.com",
    projectId: "pwa-notify-791b8",
    storageBucket: "pwa-notify-791b8.appspot.com",
    messagingSenderId: "1060548013925",
    appId: "1:1060548013925:web:32771e11d27b0ffcf7fb8c"
  })

  const messaging = getMessaging(app)


  // This runs whenever a message is received:
  //   - When the page is open
  //   - When the user clicked the bg notification
  onMessage(messaging, (payload) => {
    alert(JSON.stringify(payload, null, 2))
  })

  return {
    provide: {
      messaging,
    }
  }
})
