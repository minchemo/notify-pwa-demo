// Import the firebase app / messaging packages
importScripts('https://www.gstatic.com/firebasejs/10.9.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/10.9.0/firebase-messaging-compat.js')

// Initialize app
const app = firebase.initializeApp({
  apiKey: "AIzaSyDPqgAzcJKhBn4NljgxR6GVJYk8dZ_z_Y4",
  authDomain: "pwa-notify-791b8.firebaseapp.com",
  projectId: "pwa-notify-791b8",
  storageBucket: "pwa-notify-791b8.appspot.com",
  messagingSenderId: "1060548013925",
  appId: "1:1060548013925:web:32771e11d27b0ffcf7fb8c"
})

// Initialize messaging
const messaging = firebase.messaging()

// Listen to bg messages
messaging.onBackgroundMessage(payload => {
  // console.log("Received a bg message: ", payload);

  const title = payload.notification.title
  const notification = {
    body: "Notification Body",
    icon: "/icon.png",
    actions: [
      {
          action: "view-content",
          title: "Yes"
      },
      {
          action: "go-home",
          title: "No"
      }
  ]
  }

  // Show notification when message received
  self.registration.showNotification(title, notification);
  self.navigator.setAppBadge(1)
})

