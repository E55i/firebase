import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

//Tähän firestore config tiedot


initializeApp(firebaseConfig)

const firestore = getFirestore()

export {
  firestore
}