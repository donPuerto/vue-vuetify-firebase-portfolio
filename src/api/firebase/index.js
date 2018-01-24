
import * as firebase from 'firebase'
import 'Firebase/firestore'


// Initialize Firebase
var config = {
   apiKey: "AIzaSyB0xS8hCnmyGQcYM53T_bB3MUHPndZshUs",
   authDomain: "dp-portfolio.firebaseapp.com",
   databaseURL: "https://dp-portfolio.firebaseio.com",
   projectId: "dp-portfolio",
   storageBucket: "dp-portfolio.appspot.com",
   messagingSenderId: "679574357287"
};
firebase.initializeApp(config);

export class FirebaseService {
   // data
   firestoredb = firebase.firestore();

   // constructor
   constructor(payload) {
      this._payload  = payload;
   }

   // getter
   

   // setter


   // static


   // methods
}
