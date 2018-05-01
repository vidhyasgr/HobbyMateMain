import { Component } from '@angular/core';
import {AccountInfoHttpService} from "./Services/AccountInfoServices/account-info-http-service";

import * as io from 'socket.io-client';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
//  templateUrl: './app2.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent {

  userName : string;

 // socket.io
 socket;

   constructor(private _accountInfoHttpService : AccountInfoHttpService){

     this._accountInfoHttpService.getAccountInfo().subscribe((data) => {

       this.userName = data.first_name;

     })


     // // socket.io initialization
     //
     // console.log("intializing socket.io");
     //
     // this.socket = io();


   }


  /**
   *
   */
    logOut(){

      console.log("doing logout");
     this._accountInfoHttpService.doLogOut();

    }





  }
