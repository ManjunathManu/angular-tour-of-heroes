import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }
  private id;
  ngOnInit() {
    this.id = setInterval(() => {
      this.messageService.clearAll()
    }, 5000);
  }
  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }
}
