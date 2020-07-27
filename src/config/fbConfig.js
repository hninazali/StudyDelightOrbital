import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
const firebaseConfig = {
    apiKey: "AIzaSyAyipTQze5Po3aID4orN0Qvr3d3AeFq-Tk",
    authDomain: "studydelight-d26b3.firebaseapp.com",
    databaseURL: "https://studydelight-d26b3.firebaseio.com",
    projectId: "studydelight-d26b3",
    storageBucket: "studydelight-d26b3.appspot.com",
    messagingSenderId: "184631917465",
    appId: "1:184631917465:web:d7e00ccf3ca056f4963108",
    measurementId: "G-TLB34798PP"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase