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

export const get = async any => {
  let [primary, secondary, channel] = await Promise.all([
    db.doc('videos/primary').get(), 
    db.doc('videos/secondary').get(),
    db.doc('videos/channel').get(),
  ])
  return {primary: primary.data(), secondary: secondary.data(), channel: channel.data()}
}

export const addMessage  = async data => {
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  const date = new Date()
  const collection = `contact/date/${date.getDate()}-${months[date.getMonth()]}-${date.getFullYear()}`
  data.date = date
  data.isViewed = false
  const status = await db.collection(collection).add(data)
  return status
}

export default {
  get,
  addMessage,
}