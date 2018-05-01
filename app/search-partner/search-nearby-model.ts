/**
 * Created by vidhyasagar on 09.03.18.
 */


export class SearchNearbyModel{

    _firstName:string;
    _lastName:string;
    _country:string;
    _cityName:string;
    _dateOfBirth:string;
    _emailId:string;
    _mobileNumber:string;
    _hobby:string;
    _description: string;
    _isLookingForFreelancingProjects:number;
    _distance:number;
     _following:boolean = false;


  constructor() {
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }

  get cityName(): string {
    return this._cityName;
  }

  set cityName(value: string) {
    this._cityName = value;
  }

  get dateOfBirth(): string {
    return this._dateOfBirth;
  }

  set dateOfBirth(value: string) {
    this._dateOfBirth = value;
  }

  get emailId(): string {
    return this._emailId;
  }

  set emailId(value: string) {
    this._emailId = value;
  }

  get mobileNumber(): string {
    return this._mobileNumber;
  }

  set mobileNumber(value: string) {
    this._mobileNumber = value;
  }

  get hobby(): string {
    return this._hobby;
  }

  set hobby(value: string) {
    this._hobby = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get isLookingForFreelancingProjects(): number {
    return this._isLookingForFreelancingProjects;
  }

  set isLookingForFreelancingProjects(value: number) {
    this._isLookingForFreelancingProjects = value;
  }


  get distance(): number {
    return this._distance;
  }

  set distance(value: number) {
    this._distance = value;
  }


  get following(): boolean {
    return this._following;
  }

  set following(value: boolean) {
    this._following = value;
  }
}
