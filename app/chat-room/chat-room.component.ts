import { Component, OnInit } from '@angular/core';
import {MessageModel} from "./chat-box/message.model";
import {IndividualMessage} from "./chat-box/individual-message.model";
import {MessageService} from "../Services/ChatServices/MessageService/message.service";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import {MessageModelRest} from "./chat-box/message.model.rest";
import {Observable} from "rxjs/Observable";
import {ContactListModelRest} from "./contact.model.rest";


@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(-82%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ])
  ]
})
export class ChatRoomComponent implements OnInit {

   name: string;
   chatLists : ContactListModelRest[];
   localUserMessages : Array<MessageModel> = [];
   // private chatBoxModel: MessageModel;

   menuState:string = 'in';




  constructor(private _messageService : MessageService) {

   this.name = "Rahul";

  this._messageService.getMessage().subscribe(message => {this.localUserMessages.push(message); });



  }

  ngOnInit() {

    this._messageService.getContactLists().subscribe(data => {
      console.log("contact list data " + data);
      this.chatLists = data;
    });

  }

  /**
   *
   *
   */
  toggleMenu() {

    console.log("it comes here");

    // 1-line if statement that toggles the value:
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }



  /**
   *
   * @param chatListName
   */
  clickOnChatListName(chatList : ContactListModelRest){

    // after clicking here we need to show the chat box.

    let messageModel : MessageModel = new MessageModel();

    messageModel.emailId = chatList.email_id;
    messageModel.name = chatList.first_name;
    messageModel.conversationId = chatList.conversation_id;
    messageModel.arrayIndividualMessage.push(new IndividualMessage(Date.now(), "Hi, how are you ?", ""));
    messageModel.hiddenPanelVisibility = false;
    messageModel.mainPanelVisibility = true;


    var showChatBox = true;

     this.localUserMessages.forEach(chatBoxModelData => {

       if(chatBoxModelData.name == chatList.first_name){
         showChatBox = false;
         //TODO Make it visible.

         chatBoxModelData.mainPanelVisibility = true;
         chatBoxModelData.hiddenPanelVisibility = false;

       }

     });


      if(showChatBox && this.localUserMessages.length <12){

     var  listOfMessages : Array<MessageModelRest> = [] ;

     // this._messageService.fetchAllMessages("vidhyasgr80@gmail.com").subscribe(
     //
     //   val => {
     //     listOfMessages = val;
     //     console.log('Value emitted successfully', val);
     //   }
     //
     // );

     console.log("testng messages " + listOfMessages.toString());


        //TODO need to fetch the messages from mongoDB and store it locally. MostRecentMessages. Including ConversationID


        this._messageService.storeMessage(messageModel);

    }

   }

}
