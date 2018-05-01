export class IndividualMessage{

   private _sentTime : string;
   private _localMessage : string = "";
   private _remoteMessage: string = "";

  constructor(sentTime, localUserMessage, remoteUserMessage){

    this._sentTime = sentTime;
    this._localMessage = localUserMessage;
    this._remoteMessage = remoteUserMessage;

  }


  get sentTime(): string {
    return this._sentTime;
  }

  set sentTime(value: string) {
    this._sentTime = value;
  }

  get localMessage(): string {
    return this._localMessage;
  }

  set localMessage(value: string) {
    this._localMessage = value;
  }

  get remoteMessage(): string {
    return this._remoteMessage;
  }

  set remoteMessage(value: string) {
    this._remoteMessage = value;
  }
}
