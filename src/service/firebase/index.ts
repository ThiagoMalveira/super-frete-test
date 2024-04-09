import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey:
    process.env.REACT_APP_API_KEY || 'AIzaSyCKc5ZFIZd2ENJ-lELITf7h_3soFhO89nE',
  authDomain:
    process.env.REACT_APP_AUTH_DOMAIN || 'super-frete-teste.firebaseapp.com',
  projectId: process.env.REACT_APP_PROJECT_ID || 'super-frete-teste',
  storageBucket:
    process.env.REACT_APP_STORAGE_BUCKET || 'super-frete-teste.appspot.com',
  messagingSenderId:
    process.env.REACT_APP_MESSAGING_SENDER_ID || '1059501705913',
  appId:
    process.env.REACT_APP_ID || '1:1059501705913:web:46d0a8558b7954d6222968',
  measurementId: process.env.REACT_APP_MEASUREMENT_ID || 'G-GBKT28V7M6',
}

initializeApp(firebaseConfig)

const app = initializeApp(firebaseConfig)
const database = getFirestore(app)

export { database }
