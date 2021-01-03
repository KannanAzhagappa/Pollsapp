import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyDINYjNZxlLlTdjOHl94G33ik1w537_Fs0",
  authDomain: "polls-app-3913d.firebaseapp.com",
  projectId: "polls-app-3913d",
  databaseURL: "https://polls-app-3913d-default-rtdb.firebaseio.com/",
  storageBucket: "polls-app-3913d.appspot.com",
};

export const firebaseApp = firebase.initializeApp(config);
