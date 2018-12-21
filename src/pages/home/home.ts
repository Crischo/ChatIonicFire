import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
//variables
userName: string = "";
message: string = "";
messages = []; 
  constructor(public navCtrl: NavController) {
    this.getMessages();
  }
//obtener
getMessages(){
  var messagesRef = firebase.database().ref().child("mensajes");
  messagesRef.on("value", (snap) => {
    var data = snap.val();
    this.messages = [];
    for(var key in data){
      this.messages.push(data[key]);
    }
  });    
}
//enviar
sendMessage(){
var messageRef = firebase.database().ref().child("mensajes");
messageRef.push({mensaje: this.message, nombre: this.userName });
}
}
