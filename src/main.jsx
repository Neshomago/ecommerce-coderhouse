import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCNia0N_fYB5iNU6S9EnM-H_OkDHLed3dQ",
    authDomain: "coderhouse-ecommerce-fe8b5.firebaseapp.com",
    projectId: "coderhouse-ecommerce-fe8b5",
    storageBucket: "coderhouse-ecommerce-fe8b5.appspot.com",
    messagingSenderId: "181009531479",
    appId: "1:181009531479:web:07bfbf0c7b120b556b1912"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
