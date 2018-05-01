/**
 * Created by vidhyasagar on 20.01.18.
 */





export class CountryData {

  private _country:string;
  private _dial_code:string;
  private _code : string;


  constructor(country: string, dial_code: string, code: string) {
    this._country = country;
    this._dial_code = dial_code;
    this._code = code;
  }


  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }

  get dial_code(): string {
    return this._dial_code;
  }

  set dial_code(value: string) {
    this._dial_code = value;
  }

  get code(): string {
    return this._code;
  }

  set code(value: string) {
    this._code = value;
  }
}
