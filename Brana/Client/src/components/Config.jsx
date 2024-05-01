import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBsiOisbMstfJ_KUGq-PJmaRyh09sLi28s",
  authDomain: "brana-784cf.firebaseapp.com",
  projectId: "brana-784cf",
  storageBucket: "brana-784cf.appspot.com",
  messagingSenderId: "481331460685",
  appId: "1:481331460685:web:5a8e0d2edc0eb2dccaba04"
};

const app = initializeApp(firebaseConfig);
export const imageDb = getStorage(app)


