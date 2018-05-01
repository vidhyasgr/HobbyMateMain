import {ItemData} from "./items-inside-circle.model";
/**
 * Created by vidhyasagar on 10.11.17.
 */

export class CircleData{

   _width : number;
   _height : number;
   _radius : number;
   _color : string;
   _itemsInCircle : Array<ItemData> = [];


  constructor() {
  }

  get width(): number {
    return this._width;
  }

  set width(value: number) {
    this._width = value;
  }

  get height(): number {
    return this._height;
  }

  set height(value: number) {
    this._height = value;
  }

  get radius(): number {
    return this._radius;
  }

  set radius(value: number) {
    this._radius = value;
  }

  get color(): string {
    return this._color;
  }

  set color(value: string) {
    this._color = value;
  }

  get itemsInCircle(): Array<ItemData> {
    return this._itemsInCircle;
  }

  set itemsInCircle(value: Array<ItemData>) {
    this._itemsInCircle = value;
  }
}
