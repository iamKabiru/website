import firebase from 'firebase'
import 'firebase/firestore'

let config = {
    apiKey: 'AIzaSyAsfFEDRiO-vv7LrAbWcA_eF9KBzl6jL0k',
    authDomain: 'vuejsnigeria.firebaseapp.com',
    databaseURL: 'https://vuejsnigeria.firebaseio.com',
    projectId: 'vuejsnigeria',
    storageBucket: 'vuejsnigeria.appspot.com',
    messagingSenderId: '28406734459'
}

const firebaseApp = firebase.initializeApp(config)
export default firebaseApp
export const firestore = firebaseApp.firestore()