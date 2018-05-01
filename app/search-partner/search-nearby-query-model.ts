/**
 * Created by vidhyasagar on 09.03.18.
 */


export class SearchNearbyQueryModel{


  private _cityName:string;
  private _distance:number;


  constructor(cityName: string, distance: number) {
    this._cityName = cityName;
    this._distance = distance;
  }


  get cityName(): string {
    return this._cityName;
  }

  set cityName(value: string) {
    this._cityName = value;
  }

  get distance(): number {
    return this._distance;
  }

  set distance(value: number) {
    this._distance = value;
  }
}
