import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages : string[] = [];
  constructor() { }

  add(message : string){
    this.messages.push(message);
  }

  clearAll(){
    this.messages = [];
    console.log('Cleared all the messages');
  }

  clear(message : string){
    let index = this.messages.indexOf(message);
    this.messages.splice(index, 1);
  }
}
