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
    console.log("running func: wipe");
    HTML_OUTPUT.innerHTML="running func: wipe";
  firebase.database().ref('/').set({})
    console.log("database wiped");
    HTML_OUTPUT.innerHTML="database wiped";
}

function initialize(){
    console.log("running func: initialize");
                HTML_OUTPUT.innerHTML="running func: initialize";
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
    console.log("database set to intial state");
            HTML_OUTPUT.innerHTML="database set to intial state";
}

function nextYear(){
    console.log("running func: nextYear");
        HTML_OUTPUT.innerHTML="running func: nextYear";
  firebase.database().ref('users').set(
  /*  {
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
    } **/

      {
        trewss: [{
      age: 5,
      feet: 1,
      alive: true,
    }, 435354, {
      0: 33,
      1: 2.2,
      2: false,
      //pi: 3.141592653589793238462643383
      }, 342, 674567]
      }
  )
    console.log("database set to second state (next year)");
          HTML_OUTPUT.innerHTML="database set to second state (next year)";
}

function numOfUsers(){
  console.log("running func: numOfUsers");
    HTML_OUTPUT.innerHTML="running func: numOfUsers";
  console.log('getting user data');
      HTML_OUTPUT.innerHTML="getting user data";
  firebase.database().ref('users').once('value', outputLength, logError);
}

function outputLength(data){
  console.log("running func: outputLength");
  HTML_OUTPUT.innerHTML="running func: outputLength";
  if (data.val()==null) {
console.log("no key found")
    HTML_OUTPUT.innerHTML="no key found";
  } else if (!(typeof data.val()=='object')) {
console.log('data is not an object');
    HTML_OUTPUT.innerHTML="data is not an object";
  }else{
    console.log('key is an obj with a length of '+Object.keys(data.val()).length);
  HTML_OUTPUT.innerHTML= 'the object has '+Object.keys(data.val()).length+" item(s)";
  }
}

function logError(errorMessage) {
  console.log('their was an error: ');
  console.log(errorMessage);
      HTML_OUTPUT.innerHTML=errorMessage;

}