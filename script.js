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
    console.log("");
  console.log("running func: reset");
  firebase.database().ref('/').set({ game1: 'NaN' })
  console.log("database reset");
}

function setScore() {
   console.log("");
 console.log("running func: setScore");
  firebase.database().ref('/game1/users/' + user + '/score').set(score)
  console.log("score of user: [" + user + "] is set to " + score);
}

function initialize() {
   console.log("");
 console.log("running func: initialize");
  firebase.database().ref('/game1/users').set({
    bob: { score: 2 },
    ben: { score: 7 },
    bill: { score: 64984 }
  });
  console.log("database set to initial state");
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

function readUserScore() {
   console.log("");
 console.log("running func: readUserScore");
  console.log('getting user data');
  firebase.database().ref('game1/users/').once('value', (data) => { outputUserScore(data, user) }, logError);
}


function readHighScores() {
   console.log("");
 console.log("running func: readHighScores");
  console.log('getting user data');
  firebase.database().ref('game1/users').once('value', outputHighScores, logError);
}


function userScoreListener() {
    console.log("");
console.log("running func: userScoreListener");
  console.log('listenerActive');
firebase.database().ref('game1/users/').once('value', (data) => { outputUserScore(data, user) }, logError);}




function outputUserScore(data, userName) {
  console.log("");
  console.log("running func: outputUserScore");
  let userObj = data.val();
  if (userObj == null) {
    console.log("no key found")
    HTML_OUTPUT.innerHTML = "no key found";
  } else {
    console.log('[' + userName + '] got a score of ' + userObj[userName].score);
    HTML_OUTPUT.innerHTML = userName + ' got a score of ' + userObj[userName].score;
  }
}

function outputHighScores(data) {
    console.log("");
console.log("running func: outputHighScores");
  let userObj = data.val();
  if (userObj == null) {
    console.log("no key found")
    HTML_OUTPUT.innerHTML = "no key found";
  } else {
    HTML_OUTPUT.innerHTML = '';
    let names = Object.keys(userObj);
    for (i = 0; i < names.length; i++) {
      let userName = names[i];
      console.log('[' + userName + '] got a score of ' + userObj[userName].score)
          HTML_OUTPUT.innerHTML += userName + ' got a score of ' + userObj[userName].score+'<br>'
    }
  }
}




function isNull(data) {
   console.log("");
 console.log("running func: isNull");
  if (data.val() == null) {
    console.log("is Null")
    return (true);
  } else {
    return (false);
  }
}

function logError(errorMessage) {
   console.log("");
 console.log('their was an error: ');
  console.log(errorMessage);
  HTML_OUTPUT.innerHTML = errorMessage;

}