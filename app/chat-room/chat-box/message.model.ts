import {IndividualMessage} from "./individual-message.model";

export class MessageModel{

    _id: number;
    _emailId : string;
    _conversationId : string;
    _name: string;
    _imageSrc : string;
    _arrayIndividualMessage : Array<IndividualMessage> = [];
    _tempMessage: string = "";
    private _hiddenPanelVisibility:boolean = true;
    private _mainPanelVisibility:boolean = true;


// constructor(id, name, imageSrc, message){
//
//   this._id = id;
//   this._name = name;
//   this._imageSrc = imageSrc;
//   this._arrayIndividualMessage.push(message);
//
// }


  constructor() {
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get imageSrc(): string {
    return this._imageSrc;
  }

  set imageSrc(value: string) {
    this._imageSrc = value;
  }

  get arrayIndividualMessage(): Array<IndividualMessage> {
    return this._arrayIndividualMessage;
  }

  set arrayIndividualMessage(value: Array<IndividualMessage>) {
    this._arrayIndividualMessage = value;
  }

  get tempMessage(): string {
    return this._tempMessage;
  }

  set tempMessage(value: string) {
    this._tempMessage = value;
  }

 get emailId(): string {
    return this._emailId;
  }

  set emailId(value: string) {
    this._emailId = value;
  }

  get conversationId(): string {
    return this._conversationId;
  }

  set conversationId(value: string) {
    this._conversationId = value;
  }


  get hiddenPanelVisibility(): boolean {
    return this._hiddenPanelVisibility;
  }

  set hiddenPanelVisibility(value: boolean) {
    this._hiddenPanelVisibility = value;
  }

  get mainPanelVisibility(): boolean {
    return this._mainPanelVisibility;
  }

  set mainPanelVisibility(value: boolean) {
    this._mainPanelVisibility = value;
  }
}
