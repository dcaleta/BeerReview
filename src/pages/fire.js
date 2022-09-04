//import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCTLHCYv0KAVpZi68jnPJg0qGzIWKuMCx4',
  authDomain: 'signin-19fcc.firebaseapp.com',
  projectId: 'signin-19fcc',
  storageBucket: 'signin-19fcc.appspot.com',
  messagingSenderId: '138883048072',
  appId: '1:138883048072:web:2895fb33a80a279d0eb53d',
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
