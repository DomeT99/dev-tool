import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const config = useRuntimeConfig();

const firebaseConfig = {
  apiKey: config.public.apiKey,
  authDomain: config.public.authDomain,
  projectId: config.public.projectId,
  storageBucket: config.public.storageBucket,
  messagingSenderId: config.public.messagingSenderId,
  appId: config.public.appId,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
