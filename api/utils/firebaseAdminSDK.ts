const admin = require("firebase-admin");
import { getAuth, Auth } from "firebase-admin/auth";

let auth = null;

if (!auth) {
  const serviceAccount = JSON.parse(process.env.FIREBASE_SDK!);

  const app = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

  auth = getAuth(app);
}

export default auth as Auth;
