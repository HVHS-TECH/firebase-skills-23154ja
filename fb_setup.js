/**************************************************************/
// fb_initialise()
// Initialize firebase, connect to the Firebase project.
// 
// Find the config data in the Firebase console. Cog wheel > Project Settings > General > Your Apps > SDK setup and configuration > Config
//
// Input:  n/a
// Return: n/a
/**************************************************************/
 const firebaseConfig = {
    apiKey: "AIzaSyBIzIzdh3O6NZVxwLtzc9JCF-Ig5pvg6JM",
    authDomain: "jacob-a---23154ja---12comp.firebaseapp.com",
    databaseURL: "https://jacob-a---23154ja---12comp-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "jacob-a---23154ja---12comp",
    storageBucket: "jacob-a---23154ja---12comp.firebasestorage.app",
    messagingSenderId: "852576704043",
    appId: "1:852576704043:web:060ac4c5f9aca44967bc6e"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // This log prints the firebase object to the console to show that it is working.
  // As soon as you have the script working, delete this log.
  console.log("Firebase initialize finished:");
  console.log(firebase);
