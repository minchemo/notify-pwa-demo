import { getMessaging } from "firebase-admin/messaging"
import { firebaseApp } from "@/server/index"

export default defineEventHandler(async (e) => {
  const { token } = await readBody(e)
  const messaging = getMessaging(firebaseApp)

  // Example payload from POST
  const payload = {
    from: "id1",
    to: "id2",
    message: "test",
  }

  // Get to user

  await messaging.send({
    token,
    notification: {
      title: "Some Title",
      body: "Some body",
    },
  })

  return {
    success: true,
    message: 'ok'
  }
  // list out users
  // loop 100 at a time
  // send notif
  // messaging.sendEachForMulticast({
  //   // LImit to 100
  //   tokens: [],
  //   notification: {},
  // })

  // Send to topic
  // Requires adding to topic with messaging.subscribeToTopic previously
  // messaging.sendToTopic("topic", { notification: {} })
})
