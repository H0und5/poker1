import './App.css';

// Import the functions you need from the SDKs you need

import { collection, getFirestore, getDocs} from 'firebase/firestore';

import { initializeApp } from "firebase/app";


// specialized firebaseconfig object
const firebaseConfig = {
  apiKey: "AIzaSyCaCLZtFd9MB9f8AMfGdSFBYbfqMDQqhsA",
  authDomain: "poker1-daf45.firebaseapp.com",
  projectId: "poker1-daf45",
  storageBucket: "poker1-daf45.appspot.com",
  messagingSenderId: "1056178650590",
  appId: "1:1056178650590:web:9f5b042e20ee8745eab14f"
};


// Initialize Firebase

initializeApp(firebaseConfig);

const db = getFirestore();

// collection references

const bestHandsColRef = collection(db, 'bestHands');


// getBestHands 
getDocs(bestHandsColRef)
  .then((hands) => {
    let bestHandsRanked = [];

    hands.docs.forEach((hand) => {
      bestHandsRanked.push({ ...hand.data() })
    })

    console.log(bestHandsRanked)
  })



// App component rendered below
function App() {
  return (
    <div className="App">
      <p>yoooo</p>
    </div>
  );
}

export default App;
