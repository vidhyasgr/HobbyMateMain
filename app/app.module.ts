import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { StompService } from 'ng2-stomp-service';


import {AppComponent} from './app.component';


import {routes} from "./app.router";
import {SearchPartnerComponent} from "./search-partner/search-partner.component";
import {ChatRoomComponent} from "./chat-room/chat-room.component";
import {ChatBoxComponent} from './chat-room/chat-box/chat-box.component';
//
import {MessageService} from "./Services/ChatServices/MessageService/message.service";
import {NewAccountFormComponent} from './account-info/new-account-form.component';
import {AccountInfoHttpService} from "./Services/AccountInfoServices/account-info-http-service";
import {HttpClientModule} from "@angular/common/http";
import {environment} from "../environments/environment";
import {SearchFilterPipe} from "./CentralComponents/filter-pipe";
import {LetterBoldPipe} from "./CentralComponents/letter-bold.pipe";
import { SocketChatComponent } from './socket-chat/socket-chat.component';
// import { NewChatRoomComponent } from './new-chat-room/new-chat-room.component';
// import { NewChatBoxComponent } from './new-chat-room/new-chat-box/new-chat-box.component';
import {MapToEntryPipe} from "./CentralComponents/map-key-value-pipe";
import {SearchPageHttpService} from "./Services/SearchServices/search-http-service";
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import {ImageGalleryService} from "./Services/ImageServices/image-gallery-service";
import { ImageFullScreenModeComponent } from './image-gallery/image-full-screen-mode/image-full-screen-mode.component';


@NgModule({
  declarations: [
    SearchFilterPipe,
    LetterBoldPipe,
    MapToEntryPipe,
    AppComponent,
    SearchPartnerComponent,
     ChatRoomComponent,
     ChatBoxComponent,
    NewAccountFormComponent,
    SocketChatComponent,
    ImageGalleryComponent,
    ImageFullScreenModeComponent
  ],
  imports: [
    BrowserModule,
     ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    // CountryPickerModule.forRoot(),
    routes],
  providers: [MessageService, AccountInfoHttpService, StompService, SearchPageHttpService, ImageGalleryService],
  bootstrap: [AppComponent]
})
export class AppModule {
}


