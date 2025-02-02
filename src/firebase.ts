import admin from "firebase-admin";
import dotenv from "dotenv";

dotenv.config();

const serviceAccount = require(process.env.FIREBASE_CONFIG_PATH as string);
console.log("serviceAccount ",serviceAccount)
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;
