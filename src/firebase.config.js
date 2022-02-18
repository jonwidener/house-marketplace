// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAi_5Jft0KkYHwdajuLIZqQt1cGFbB5mso',
  authDomain: 'house-marketplace-app-6ad3b.firebaseapp.com',
  projectId: 'house-marketplace-app-6ad3b',
  storageBucket: 'house-marketplace-app-6ad3b.appspot.com',
  messagingSenderId: '420743025909',
  appId: '1:420743025909:web:0ef354055538296dcc61bc',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
