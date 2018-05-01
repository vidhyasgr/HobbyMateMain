import {SearchNearbyModel} from "./search-nearby-model";
/**
 * Created by vidhyasagar on 10.11.17.
 */

export class ItemData{

    _xAxis:number = 0;
    _yAxis:number = 0;
    _searchNearbyModel:SearchNearbyModel;


constructor(){

}


  get xAxis(): number {
    return this._xAxis;
  }

  set xAxis(value: number) {
    this._xAxis = value;
  }

  get yAxis(): number {
    return this._yAxis;
  }

  set yAxis(value: number) {
    this._yAxis = value;
  }

  get searchNearbyModel(): SearchNearbyModel {
    return this._searchNearbyModel;
  }

  set searchNearbyModel(value: SearchNearbyModel) {
    this._searchNearbyModel = value;
  }
}
