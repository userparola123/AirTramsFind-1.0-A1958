var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
    apiKey: "AIzaSyDMcomg1sGRFXKT6L9puI5QHYPt-b38dE4",
    authDomain: "login-system-atf-a1958.firebaseapp.com",
    projectId: "login-system-atf-a1958",
    storageBucket: "login-system-atf-a1958.appspot.com",
    messagingSenderId: "469388167402",
    appId: "1:469388167402:web:16d9d6354cdcab1459ef93"
  };
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}


