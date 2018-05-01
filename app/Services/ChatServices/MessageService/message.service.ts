import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import {MessageModel} from "../../../chat-room/chat-box/message.model";
import {Subscription} from "rxjs/Subscription";
import {IndividualMessage} from "../../../chat-room/chat-box/individual-message.model";
import {HttpClient} from "@angular/common/http";
import {MessageModelRest} from "../../../chat-room/chat-box/message.model.rest";
import {ContactListModelRest} from "../../../chat-room/contact.model.rest";

@Injectable()

// this service contains incoming and outgoing messages. At the same time it takes care of
// chatting conversation.

// It doesnt store the messages. Just passing the messages between the components.

export class MessageService {

  localUserMessages : Array<MessageModel> = [];
  // subscription: Subscription;
  // temporaryChatBoxModel : MessageModel;



   messages = new Subject<any>();
   individualMessage = new Subject<any>();



  constructor(private _http: HttpClient) {


  }


  /**
   *
   * @param message
   */

  storeMessage(message: any) {

    this.messages.next(message);

   // Storing values in central array, so that we could access all around the app.

      this.localUserMessages.push(message);

  }

  /**
   *
   * @param message
   */

  storeIndividualMessageInLocalDB(message: any, individualMessage: IndividualMessage) {

    this.individualMessage.next(message);


    this.localUserMessages.forEach(messageModel => {

      if(messageModel.name == message.name){

        messageModel.
        arrayIndividualMessage.push(individualMessage);

      }

    });

  }


  /**
   *
   * @param chatBox
   * @param individualMessage
   */

  storeMessageInMongoDB(chatBox : MessageModel , individualMessage: IndividualMessage){

    let messageToStore : MessageModelRest = new MessageModelRest();

    messageToStore.conversation_id =chatBox.conversationId;
    messageToStore.to = chatBox.emailId;
    messageToStore.body = individualMessage.localMessage;
    messageToStore.sent_time = individualMessage.sentTime;


  let  messageToStoreInDB : string = '{"to" : "' + chatBox.emailId + '","conversation_id" ' +
    ': "' + chatBox.conversationId + '","from" : "","body" : "' + individualMessage.localMessage + '","sent_time" : "22/5/2018"}'  ;


    this._http.post("http://localhost:8080/userMessages/store", JSON.parse(messageToStoreInDB)).subscribe();


  }




  /**
   *
   * @param toEmailId
   */

  fetchAllMessages(toEmailId: String):Observable<MessageModelRest[]>{

   return this._http.get<MessageModelRest[]>("http://localhost:8080/userMessages/get?toEmailId=" + toEmailId);


  }


  /**
   * getting contact lists.
   *
   * @returns {Observable<Object>}
   */
  getContactLists(): Observable<ContactListModelRest[]>{

    // return this._http.get<ContactListModelRest[]>("http://localhost:8080/user_contact/get/contact_lists");

    return this._http.get<ContactListModelRest[]>("./assets/data/contact_lists_mockdata.json");


  }



  /**
   *
   * @param emailId
   */
  sendConversationListRest(remoteUserEmailId:string){


    this._http.get("http://localhost:8080/userConversationList/add?emailId="+ remoteUserEmailId).subscribe();
  }


  /**
   *
   */

  getRecentMessagesRest(remoteUserEmailId:string){

  }



  /**
   *
   */

  clearMessages() {
    this.messages.next();
  }

  getIndividualMessage(): Observable<any> {

    return this.individualMessage.asObservable();
  }

  getMessage(): Observable<any> {

    return this.messages.asObservable();
  }



}
