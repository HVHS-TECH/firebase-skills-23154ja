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
  firebase.database().ref('/').set({game1: 'NaN'})
  console.log("database reset");
}

function setScore() {
    console.log("running func: setScore");
      firebase.database().ref('/game1/users/'+user+'/score').set(score)
      console.log("score of user: [" + user + "] is set to " + score);
}

function initialize() {
  console.log("running func: initialize");
    firebase.database().ref('/game1/users').set({
      bob: {score: 2},
ben: {score: 7},
bill: {score: 64984}
    });
    console.log("database set to intial state");
  } 


/**

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

 */

function displayUserScore() {
  console.log("running func: displayUserScore");

  console.log('getting user data');
  firebase.database().ref('game1/users/'+user+"/score").once('value', outputVal, logError);
}


function userScoreListener() {
  console.log("running func: userScoreListener");
  console.log('listenerActive');
  firebase.database().ref('game1/users/'+user+"/score").on('value', outputVal, logError);
}




function outputVal(data) {
  console.log("running func: outputVal");
  HTML_OUTPUT.innerHTML = "running func: outputVal";
  if (data.val() == null) {
    console.log("no key found")
    HTML_OUTPUT.innerHTML = "no key found";
  } else if ((typeof data.val() == 'object')) {
    console.log('data is an object');
  } else {
    console.log('value is ' + data.val());
    HTML_OUTPUT.innerHTML = 'value is ' + data.val();
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