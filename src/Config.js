import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp ({
    apiKey: "AIzaSyBjFtL_gH1EAH9L0-Z_U8zIXkejuKis4EM",
    authDomain: "burger-queen-4ac86.firebaseapp.com",
    projectId: "burger-queen-4ac86",
});

let db = firebase.firestore();
db.settings({timestampsInSnapshots:true}); //firestore maneja la info en forma de snapshot (snapshot es como una captura de informacion DEL MOMENTO)

export default db;

