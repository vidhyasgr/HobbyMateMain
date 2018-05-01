import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StompService } from 'ng2-stomp-service';



@Component({
  selector: 'app-socket-chat',
  templateUrl: './socket-chat.component.html',
  styleUrls: ['./socket-chat.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SocketChatComponent implements OnInit {

  private serverUrl = 'http://localhost:8080/socket'
  private title = 'WebSockets chat';
  private stompClient;


  private subscription : any;

  chatMessages : Array<string> = [];


  constructor(private stomp: StompService) {
    //configuration
    stomp.configure({
      host: this.serverUrl,
      debug:true,
      queue:{'init':false}
    });

    //start connection
    stomp.startConnect().then(() => {
      stomp.done('init');
      console.log('connected');

      //subscribe
      this.subscription = stomp.subscribe('/chat', this.response);

      //send data
      // stomp.send('destionation',{"data":"data"});

      // //unsubscribe
      // this.subscription.unsubscribe();
      //
      // //disconnect
      // stomp.disconnect().then(() => {
      //   console.log( 'Connection closed' )
      // })

    });


  }

//response
  public response = (data) => {
    console.log(data);

    console.log("response from the server " + data);

    this.chatMessages.push(data);
  }



  ngOnInit(){

  }

  /**
   *
   * @param data
   */
  sendMessage(data){

    this.chatMessages.push(data);

     this.stomp.send('/app/send/message', data);

    // this.stompClient.send("/app/send/message" , {}, message);

  }




}
