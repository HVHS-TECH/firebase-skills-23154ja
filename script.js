/**************************************************************
 **************************************************************
 **                                                          **
 ** script.js is where you will write most of your code.     **
 **                                                          **
 **************************************************************
 **************************************************************/

const HTML_OUTPUT = document.getElementById("databaseOutput");
let user = "bob"
let score = 4
/**************************************************************/
// helloWorld()
// Demonstrate a minimal write to firebase
// This function replaces the entire database with the message "Hello World"
// 
// This uses the set() operation to write the key:value pair "message":"Hello World"
// The ref('/') part tells the operation to write to the base level of the database "/"
// This means it replaces the whole database with message:Hello World
/**************************************************************/
function reset() {
  console.log("running func: reset");
  firebase.database().ref('/').set({highscoreTable: "Null"})
  console.log("database reset");
}

function setScore() {
    console.log("running func: setScore");
      firebase.database().ref('/game1/users'+user).set({highscoreTable: "Null"})
}
/**
function initialize() {
  console.log("running func: initialize");
  HTML_OUTPUT.innerHTML = "running func: initialize";
  console.log(firebase.database().ref('users').once('value', isNull, logError))
  if (firebase.database().ref('/highscoreTable').once('value', isNull, logError)) {
    firebase.database().ref('/highscoreTable').set("null");
    console.log("database set to intial state");
    HTML_OUTPUT.innerHTML = "database set to intial state";
  } else {
    console.log("root database key is already present");
    HTML_OUTPUT.innerHTML = "database set to intial state";
  } // is null check doesnt work
}

function nextYear() {
  console.log("running func: nextYear");
  HTML_OUTPUT.innerHTML = "running func: nextYear";
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
  console.log("database set to second state (next year)");
  HTML_OUTPUT.innerHTML = "database set to second state (next year)";
}


function numOfUsers() {
  console.log("running func: numOfUsers");
  HTML_OUTPUT.innerHTML = "running func: numOfUsers";

  console.log('getting user data');
  HTML_OUTPUT.innerHTML = "getting user data";
  firebase.database().ref('users').once('value', outputLength, logError);
}


function numOfUsersListener() {
  console.log("running func: numOfUsersListener");
  HTML_OUTPUT.innerHTML = "running func: numOfUsersListener";
  console.log('listenerActive');
  HTML_OUTPUT.innerHTML = "listenerActive";
  firebase.database().ref('users').on('value', outputLength, logError);
}
 */



function outputLength(data) {
  console.log("running func: outputLength");
  HTML_OUTPUT.innerHTML = "running func: outputLength";
  if (data.val() == null) {
    console.log("no key found")
    HTML_OUTPUT.innerHTML = "no key found";
  } else if (!(typeof data.val() == 'object')) {
    console.log('data is not an object');
    HTML_OUTPUT.innerHTML = "data is not an object";
  } else {
    console.log('key is an obj with a length of ' + Object.keys(data.val()).length);
    HTML_OUTPUT.innerHTML = 'the object has ' + Object.keys(data.val()).length + " item(s)";
  }
}

function isNull(data) {
  console.log("running func: isNull");
  if (data.val() == null) {
    console.log("is Null")
    return (true);
  } else {
    return (false);
  }
}

function logError(errorMessage) {
  console.log('their was an error: ');
  console.log(errorMessage);
  HTML_OUTPUT.innerHTML = errorMessage;

}