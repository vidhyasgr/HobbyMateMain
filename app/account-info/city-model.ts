/**
 * Created by vidhyasagar on 20.01.18.
 */


export class CityData {


  private _id:string
  private _country: string;
  private _geonameid:number;
  private _name : string;
  private _subcountry:string;


  constructor(id: string, country: string, geonameid: number, name: string, subcountry: string) {
    this._id = id;
    this._country = country;
    this._geonameid = geonameid;
    this._name = name;
    this._subcountry = subcountry;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }

  get geonameid(): number {
    return this._geonameid;
  }

  set geonameid(value: number) {
    this._geonameid = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get subcountry(): string {
    return this._subcountry;
  }

  set subcountry(value: string) {
    this._subcountry = value;
  }
}
