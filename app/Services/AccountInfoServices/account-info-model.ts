/**
 * Created by vidhyasagar on 13.01.18.
 */


export class AccountInfoData{

  private _first_name : string ;
  private _last_name: string;
  private  _date_of_birth: string;
  private  _city: string;
  private  _country: string;
  private  _email_id: string = "test@gmail.com";
  private  _mobile_number: string;
  private  _get_notification_for_new_request:number;
  private  _picture_url: string;
  private  _password: string;
  private  _interest: string;
  private  _looking_for_freelancing_projects:number;
  private  _description: string;


  constructor() {
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

  get date_of_birth(): string {
    return this._date_of_birth;
  }

  set date_of_birth(value: string) {
    this._date_of_birth = value;
  }

  get city(): string {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }

  get email_id(): string {
    return this._email_id;
  }

  set email_id(value: string) {
    this._email_id = value;
  }

  get mobile_number(): string {
    return this._mobile_number;
  }

  set mobile_number(value: string) {
    this._mobile_number = value;
  }

  get get_notification_for_new_request(): number {
    return this._get_notification_for_new_request;
  }

  set get_notification_for_new_request(value: number) {
    this._get_notification_for_new_request = value;
  }

  get picture_url(): string {
    return this._picture_url;
  }

  set picture_url(value: string) {
    this._picture_url = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get interest(): string {
    return this._interest;
  }

  set interest(value: string) {
    this._interest = value;
  }

  get looking_for_freelancing_projects(): number {
    return this._looking_for_freelancing_projects;
  }

  set looking_for_freelancing_projects(value: number) {
    this._looking_for_freelancing_projects = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }
}
