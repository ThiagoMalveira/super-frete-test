import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCKc5ZFIZd2ENJ-lELITf7h_3soFhO89nE',
  authDomain: 'super-frete-teste.firebaseapp.com',
  projectId: 'super-frete-teste',
  storageBucket: 'super-frete-teste.appspot.com',
  messagingSenderId: '1059501705913',
  appId: '1:1059501705913:web:46d0a8558b7954d6222968',
  measurementId: 'G-GBKT28V7M6',
}

initializeApp(firebaseConfig)

const app = initializeApp(firebaseConfig)
const database = getFirestore(app)

export { database }
