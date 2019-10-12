import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAYq1xlCFP2t8z75dAdrv0ZmIfJXJK56Y0",
    authDomain: "sayni-dbe7b.firebaseapp.com",
    databaseURL: "https://sayni-dbe7b.firebaseio.com",
    projectId: "sayni-dbe7b",
    storageBucket: "sayni-dbe7b.appspot.com",
    messagingSenderId: "311927433477"
};

const firebaseConf = firebase.initializeApp(config);

export default firebaseConf;