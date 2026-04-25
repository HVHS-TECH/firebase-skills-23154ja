/**************************************************************
 **************************************************************
 **                                                          **
 ** script.js is where you will write most of your code.     **
 **                                                          **
 **************************************************************
 **************************************************************/

const HTML_OUTPUT = document.getElementById("databaseOutput");

/**************************************************************/
// helloWorld()
// Demonstrate a minimal write to firebase
// This function replaces the entire database with the message "Hello World"
// 
// This uses the set() operation to write the key:value pair "message":"Hello World"
// The ref('/') part tells the operation to write to the base level of the database "/"
// This means it replaces the whole database with message:Hello World
/**************************************************************/
function wipe(){
  firebase.database().ref('/').set({})
}

function initialize(){
  firebase.database().ref('users').set(
    {
    bill: {
      age: 4,
      feet: 2,
      alive: true,
    },
      bob: {
      age: 32,
      feet: 2.2,
      alive: true,
      //pi: 3.141592653589793238462643383
      }
  }
  )
}

function nextYear(){
  firebase.database().ref('users').set(
    {
       bill: {
      age: 5,
      feet: 1,
      alive: true,
    },
      bob: {
      age: 33,
      feet: 2.2,
      alive: false,
      //pi: 3.141592653589793238462643383
      }
    }
  )
}

function users(){
  firebase.database().ref('users').once('value', outputLength, logError);
}

function outputLength(data){
  if (data.val()==null) {
    HTML_OUTPUT.innerHTML="404, data not found";
  } else {
  HTML_OUTPUT.innerHTML= Object.keys(data.val()).length;
  }
}

function logError(errorMessage) {
  console.log('their was an error:');
  console.log(errorMessage);
}