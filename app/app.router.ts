import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import {SearchPartnerComponent} from "./search-partner/search-partner.component";
import {NewAccountFormComponent} from "./account-info/new-account-form.component";
import {SocketChatComponent} from "./socket-chat/socket-chat.component";
import {ChatRoomComponent} from "./chat-room/chat-room.component";
import {ImageGalleryComponent} from "./image-gallery/image-gallery.component";





export const router : Routes = [

  {path: '', component: SearchPartnerComponent },
  { path:'search', component: SearchPartnerComponent },
  { path:'chat',component: ChatRoomComponent},
  { path:'newAccount',component: NewAccountFormComponent},
  { path:'socketChat' , component: SocketChatComponent},
  { path:'imageGallery' , component: ImageGalleryComponent}

];


export const routes: ModuleWithProviders = RouterModule.forRoot(router);
