var admin = require("firebase-admin/app");

var serviceAccount = require("./storage-sdk.json");

admin.initializeApp({
    credential:admin.credential.cert(serviceAccount),
    databaseURL:

})
// This registration token comes from the client FCM SDKs.
const registrationToken =
  "f6mOLJovSsilhJVqKGDHNb:APA91bESPdBWS1D0CiH4XQ2xgfPMTeSh2xwE9pmnlbA5v0cLDY5x4MszoEr0wxwUfDzIyhlBdqjsAnMWP2nBdyvMKLUJwZUMAB4Bj0F3rtmAxMMbKSisANcTYgcN051lJ6vugCHd5vhi";

const message = {
  data: {
    title: "Easee Buy Notification",
    content: "Your wish product has been saled",
  },
  token: registrationToken,
};

// Send a message to the device corresponding to the provided
// registration token.
admin.messaging()
  .send(message)
  .then((response) => {
    // Response is a message ID string.
    console.log("Successfully sent message:", response);
  })
  .catch((error) => {
    console.log("Error sending message:", error);
  });
