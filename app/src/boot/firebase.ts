import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBxfIWt1YwDf6iLsETul5JA7NhsC7eMFk4',
  authDomain: 'arktech-ebd44.firebaseapp.com',
  projectId: 'arktech-ebd44',
  storageBucket: 'arktech-ebd44.appspot.com',
  messagingSenderId: '86015592927',
  appId: '1:86015592927:web:8bd77275f7b7f7270c1c6a',
};

const app = initializeApp(firebaseConfig);

export { app };
