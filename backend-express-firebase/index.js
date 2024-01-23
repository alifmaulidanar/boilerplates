const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccount.json");

// Firebase Admin SDK Initialization
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Server running
require("./server/server");
