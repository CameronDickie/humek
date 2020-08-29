import firebase from 'firebase/app'
import 'firebase/firestore'
if (!firebase.apps.length) {
    const config = {
        apiKey: "AIzaSyCQJSrlqw3BDeNGoD_pgod7efpIe2QTKBA",
        authDomain: "nuxt-test-2cee1.firebaseapp.com",
        databaseURL: "https://nuxt-test-2cee1.firebaseio.com",
        projectId: "nuxt-test-2cee1",
        storageBucket: "nuxt-test-2cee1.appspot.com",
        messagingSenderId: "741913650663",
        appId: "1:741913650663:web:b6fae1705f8e500f1e4942",
        measurementId: "G-KG44WMYDW6"
    }
    firebase.initializeApp(config)
    firebase.firestore().settings({})
}
const fireDb = firebase.firestore()
export { fireDb }
