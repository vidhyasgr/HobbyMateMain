/**
 * Created by vidhyasagar on 14.02.18.
 */
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'keys',pure: false})
export class MapToEntryPipe implements PipeTransform {

  transform(map) : any {

    let keys = [];


    map.forEach((value: boolean, key: string) => {
      console.log(key, value);
    });


    for (let [key, value] of map.entries) {

      console.log("pushing entries here " + key);

      // keys.push({key: key, value: map[key]});

      keys.push(key);

    }
    return keys;
  }
}
