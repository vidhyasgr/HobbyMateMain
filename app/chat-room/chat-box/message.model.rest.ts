/**
 * Created by vidhyasagar on 22.03.18.
 */

export class MessageModelRest{

   _id : string;
   _conversation_id : string;
   _to : string;
   _from : string;
   _body : string;
   _sent_time : string;


  constructor() {
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get conversation_id(): string {
    return this._conversation_id;
  }

  set conversation_id(value: string) {
    this._conversation_id = value;
  }

  get to(): string {
    return this._to;
  }

  set to(value: string) {
    this._to = value;
  }

  get from(): string {
    return this._from;
  }

  set from(value: string) {
    this._from = value;
  }

  get body(): string {
    return this._body;
  }

  set body(value: string) {
    this._body = value;
  }

  get sent_time(): string {
    return this._sent_time;
  }

  set sent_time(value: string) {
    this._sent_time = value;
  }
}
