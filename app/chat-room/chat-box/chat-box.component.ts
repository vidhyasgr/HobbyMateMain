import {Component, Input, OnInit} from '@angular/core';
import {MessageModel} from "./message.model";
import {IndividualMessage} from "./individual-message.model";
import {MessageService} from "../../Services/ChatServices/MessageService/message.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {

  localUserMessages : Array<MessageModel> = [];
  // temporaryChatBoxModel : MessageModel;

  constructor(private _messageService: MessageService) {

    this.localUserMessages = this._messageService.localUserMessages;

  }


  ngOnInit() {
  }

  /**
   *
   * @param messageToUpdate
   * @param chatBoxModel
   */

  updateMessage(messageToUpdate: string, chatBoxModel: MessageModel) {

    chatBoxModel.tempMessage = "";

    //TODO Check whether its a first message. If so, then store in ConversationList and get Conversation_id.

    //Store message in localDB.

    this._messageService.storeIndividualMessageInLocalDB(chatBoxModel, new IndividualMessage(2, messageToUpdate, ""));

    //Send REST call to store the messages in MongoDB.

    this._messageService.storeMessageInMongoDB(chatBoxModel, new IndividualMessage(2, messageToUpdate, ""));

     }


  /**
   *
   * @param localUserMessage
   */

  changeInHiddenPanelVisibility(localUserMessage: MessageModel){

    localUserMessage.mainPanelVisibility = true;
    localUserMessage.hiddenPanelVisibility = false;

  }

  /**
   *
   * @param localUserMessage
   */

  changeInVisibilityByMinimizing(localUserMessage: MessageModel){

    // hiding the main panel after clicking the minimize button nd showing the hiddenpanel.

    localUserMessage.hiddenPanelVisibility = true;
    localUserMessage.mainPanelVisibility = false;


  }


  /**
   *
   * @param localUserMessage
   */
  changeInVisibilityByClosing(localUserMessage: MessageModel){

      //close main as well as hidden panels

    localUserMessage.mainPanelVisibility = false;
    localUserMessage.mainPanelVisibility = false;

  }

  /**
   *
   * @param individualMessage
   * @param chatBoxModel
   * @returns {any}
   */

  getRightUserName(individualMessage: IndividualMessage, chatBoxModel: MessageModel){

   return individualMessage.localMessage == ""?"Robot":chatBoxModel.name;
  }


  /**
   *
   * @param individualMessage
   * @returns {string}
   */
  getRightIndividualMessage(individualMessage: IndividualMessage){

    return individualMessage.localMessage != ""?individualMessage.localMessage:individualMessage.remoteMessage;

  }


}
