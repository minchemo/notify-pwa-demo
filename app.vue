<template>
  <div>{{ messagingToken }}</div>
  <button v-if="messagingToken" @click="copy">Copy to Clipboard</button>
  <button @click="requestPermission">Allow Notifications</button>
</template>

<script setup>
import { getToken } from "firebase/messaging"

const messagingToken = ref("")

onMounted(() => {
  requestPermission()

  if (window.matchMedia("(display-mode: standalone)").matches) {
    console.log("Running in PWA mode")
    alert('you are in pwa')
  } else {
    console.log("Not running in PWA mode")
  }
})

function requestPermission() {
  if (!window.Notification) return

  if (window.Notification.permission === "granted") {
    setToken()
  } else {
    window.Notification.requestPermission((value) => {
      if (value === "granted") {
        setToken()
      }
    })
  }
}

async function setToken() {
  const { $messaging } = useNuxtApp()
  const token = await getToken($messaging, {
    vapidKey:
      "BIOg7rlie9PJhqOJ8pfYCpKNj3oCw-csKCREjgWPHaxhPZXvROeSdyqjJPZ1anKyHEW8Bk_6r0_keysmmlsuQXs",
  })

  // Send token to server, save in user schema
  // but we're just manually doing it
  messagingToken.value = token
}

function copy() {
  navigator.clipboard.writeText(messagingToken.value)
}
</script>
