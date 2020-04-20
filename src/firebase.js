import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

firebase.initializeApp({
  apiKey: "AIzaSyBDjvXfm_As5eLMwUd1SzvJt1EYR66sn-8",
  authDomain: "teatreritos-b8e2b.firebaseapp.com",
  databaseURL: "https://teatreritos-b8e2b.firebaseio.com",
  projectId: "teatreritos-b8e2b",
  storageBucket: "teatreritos-b8e2b.appspot.com",
  messagingSenderId: "403322597254",
  appId: "1:403322597254:web:f7a77cb03ce795c6598607",
  measurementId: "G-23CK7HSMR6"
})

firebase.auth().languageCode = 'es_419'

export const db = firebase.firestore()
export const storage = firebase.storage()
export const storageRef = storage.ref()
export { firebase }

export const getVideos = async any => {
  let [primary, secondary] = await Promise.all([db.doc('videos/primary').get(), db.doc('videos/secondary').get()])
  return {primary: primary.data(), secondary: secondary.data()}
}
