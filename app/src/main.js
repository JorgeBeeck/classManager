import Vue from "vue";
import App from "./App.vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyB8fKZfoOUtayUqy8DDuBm8XZcjxhOctJ4",
  authDomain: "classmanager-42867.firebaseapp.com",
  databaseURL: "https://classmanager-42867.firebaseio.com",
  projectId: "classmanager-42867",
  storageBucket: "classmanager-42867.appspot.com",
  messagingSenderId: "490921003918",
  appId: "1:490921003918:web:a103afd78c1c7f59da32df",
  measurementId: "G-QJ452WGR9L",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

Vue.use(Buefy);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
