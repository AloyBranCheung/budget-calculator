import { DecodedIdToken } from "firebase-admin/auth";

declare global {
  namespace Express {
    export interface Request {
      decodedIdToken?: DecodedIdToken;
      firebaseUid?: string;
    }
  }
}
