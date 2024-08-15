import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../../../../models/message.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message-item.component.html',
  styleUrl: './message-item.component.css'
})
export class MessageItemComponent implements OnInit{
  @Input() message!: Message;
  user: string = 'Alice';
  isYou: boolean = false;
  
  ngOnInit(): void {
   //console.log(this.message);
    if (this.user === this.message.sender){
      this.isYou = true;
    }
  }

}
