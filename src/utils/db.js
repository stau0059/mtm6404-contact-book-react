
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCVg8BclgykA96JvXQDsgxEUjJMrR6tA50",
  authDomain: "contact-book-6be92.firebaseapp.com",
  projectId: "contact-book-6be92",
  storageBucket: "contact-book-6be92.firebasestorage.app",
  messagingSenderId: "801525847291",
  appId: "1:801525847291:web:7d695f2aa45c9d39308c5e",
  measurementId: "G-8XSLDLHPJ8"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);