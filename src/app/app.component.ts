import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "instagram-like";

  ngOnInit() {
    const config = {
      apiKey: "AIzaSyB39-r5isTpAAE-QKxzu-W1A_R18YjbPEM",
      authDomain: "instagram-like-31f15.firebaseapp.com",
      databaseURL: "https://instagram-like-31f15.firebaseio.com",
      projectId: "instagram-like-31f15",
      storageBucket: "instagram-like-31f15.appspot.com",
      messagingSenderId: "575564895814"
    };
    firebase.initializeApp(config);
  }
}
