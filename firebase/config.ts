import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDQfHLeLlhyxmjInkaP7gU9zYLMXgRSD14",
  authDomain: "dev-tool-test.firebaseapp.com",
  projectId: "dev-tool-test",
  storageBucket: "dev-tool-test.appspot.com",
  messagingSenderId: "731568430246",
  appId: "1:731568430246:web:bedb41e6b84aee56e56867",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
