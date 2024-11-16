import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAbDlaHMm9zyELfx7yWxUEDUdICjinoasI",
  authDomain: "balkan-telecom.firebaseapp.com",
  projectId: "balkan-telecom",
  storageBucket: "balkan-telecom.firebasestorage.app",
  messagingSenderId: "95734554829",
  appId: "1:95734554829:web:7bcd196941a969a8824984",
  measurementId: "G-XTZGFDJ9N5"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;