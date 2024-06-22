import { initializeApp } from "firebase-admin/app"
import { getMessaging } from "firebase-admin/messaging"
import * as admin from "firebase-admin"

import { DB } from "./token.post"

export default defineEventHandler(async () => {
  const app = initializeApp({
    projectId: "pwa-notify-791b8",
    credential: admin.credential.cert({
      type: "service_account",
      project_id: "pwa-notify-791b8",
      private_key_id: "a4b45fc169da04fab38f194c270f90f6015c1993",
      private_key:
        "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQChCJcQ5pOPk/xY\nHHgSxTUqdsKO4r32uZ8GVt98aoQ5SOn62dOlKg6f0q/rmQXAMOpetkYYg1w2P/Na\nEnhebuNsc13FW+/Ilz6YFS9J3avOqgq2uNDYS3t9ZuQ0ZadQPo8TgrIcAaGAd/gg\n3u+jykIGxd2sjq+d2nxfsVRpAWuLQxywZI7F9Lk59Qz9Sq4isjFygevfDy88jeFg\nbBOnPePbztnl8bQ2MrqIeKytMA9CMmoHEACPXRf+d4/Dga5c/EVmobufvub46tb9\nIx91zMKRvFFebbowbSMEBnHbaXr2H7YZ40oko8riSW4V6bsR9vas44/1TGO+aCv8\ntXk3iwl7AgMBAAECggEAEwyJljm4XeUjFicz+wByFBZdWHqw/wUhLyZKpJSTFJWv\n+/kVhLWvai+JmOSOnhgLOW31Z8PuPgqdlluV+pHCfFs/Te/csw1VHbdv0xySTM2n\nm8rMBbIUJxbrStl1i9QCp8uvlwmIWcKXSwgkL+tmmReB6/4q/xDP4p/+/LbqylvT\nV0E3wZds44RRrcP7njZWFRmIYa6bmy+6yheHrh4y7/mCBMqn65wAgsFKA5XEQTwa\nh9SHOrXjVc02IHC35IogPLqJHOsgEZ+kWbybSLFVCoEsTpRd4dRIU5QSmHoy6oMc\necfSUKAh+rB6p0SgzPc8Ubf3+IHIFPXJj1sWS4FqkQKBgQDar9YV6oUft5Y6IW0K\n7NcpYWTvCx1ojny2ICIPW2hVzpy+7E13Qu4tT5NL48KdRpgBOVZ1Yx6Mmwp/cGLA\nwddaBw/BgtKhkTrd9iKlm6lHyO3DuVQd7a6pZRuQpb6HrOpIjngm7yb5J1vkVxQX\ngLuaWiGf+GukfEb2SW7QFrG+CwKBgQC8gnplBHnN0UCNizBLYgo+IBWwwWtvR08q\n9bc+RvvoXCK76Z7MjW6EpQgoTrn6ZSDdVsunbnLh2WTo6Ix3YVKg8opWdZxxGdT9\np4V0DAOOeH3Bco4DSBrIJpcQrTI+TdjrFG6NV5WIUAFbMX4lWwrPOTSyomxkfY5x\nz7giaeK4UQKBgQC1VLQJ/CpigFIa5XiLZJOMhmuxIuBBwFR8l+xmG39KF0Y1sa8S\nQvdHrwIOHU9UJiMIcMjWEVhVcoGj5kacWp780XopFRceTVQolF1qQMZ+9YbhkhzD\nrD/1yhavPB/eVGz3uNq8PfVtB0vU7LeGPYJRnIbhJJXtD/evZHh0Jz0+vQKBgQCw\nAkfTYB12XYWfYzGBgRW9MenusnnkWbmCjBA/FroIF1bbC2OY7Akf0pNOR0uAjsHj\nyDG4r/iWBYwhp1fX80faPPuLhJ7AP3VOLQb+9mSvtrL8V0BfsghHjziHep8p6ze5\nLseWMwvMTZ8mjYyRxnLOT0Rz8hGwtka031S21RS6MQKBgQDCoZWuUGh1Bj5zcxFf\nxSNO68QCKZec1AvwS9w/uQhfSZ6g7NM71anM0pBbQTFniAdX2PftcUMEiOvr9OrP\nGC1BKCikaIdLlOKHrGPvz/pLNbXETrEEOLFA2MZ7WRzuSL7VvlvMika7edKc8z84\nlDNw+kHTPmoSFWqcfla/JDhh/w==\n-----END PRIVATE KEY-----\n",
      client_email:
        "firebase-adminsdk-dkruf@pwa-notify-791b8.iam.gserviceaccount.com",
      client_id: "113545119147661303787",
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      client_x509_cert_url:
        "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-dkruf%40pwa-notify-791b8.iam.gserviceaccount.com",
      universe_domain: "googleapis.com",
    }),
  })
  const messaging = getMessaging(app)

  // Example payload from POST
  const payload = {
    from: "id1",
    to: "id2",
    message: "test",
  }

  // Get to user

  await messaging.send({
    token: DB[0],
    notification: {
      title: "Some Title",
      body: "Some body",
    },
  })

  // list out users
  // loop 100 at a time
  // send notif
  messaging.sendEachForMulticast({
    // LImit to 100
    tokens: [],
    notification: {},
  })

  // Send to topic
  // Requires adding to topic with messaging.subscribeToTopic previously
  messaging.sendToTopic("topic", { notification: {} })
})
