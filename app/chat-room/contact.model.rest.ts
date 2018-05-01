/**
 * Created by vidhyasagar on 23.03.18.
 */

export class ContactListModelRest {

  private _id: string;
  private _conversation_id: string;
  private _first_name: string;
  private _last_name: string;
  private _email_id: string;
  private _date_of_birth: string;
  private _country: string;
  private _city: string;


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

  get first_name(): string {
    return this._first_name;
  }

  set first_name(value: string) {
    this._first_name = value;
  }

  get last_name(): string {
    return this._last_name;
  }

  set last_name(value: string) {
    this._last_name = value;
  }

  get email_id(): string {
    return this._email_id;
  }

  set email_id(value: string) {
    this._email_id = value;
  }

  get date_of_birth(): string {
    return this._date_of_birth;
  }

  set date_of_birth(value: string) {
    this._date_of_birth = value;
  }

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }

  get city(): string {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }
}
