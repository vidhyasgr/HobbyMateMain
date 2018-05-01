/**
 * Created by vidhyasagar on 29.01.18.
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'searchFilter'})
export class SearchFilterPipe implements PipeTransform {

  transform(cities: any, search: string): any {

    console.log("value " + cities);
    console.log("search " + search);

    if  (search == "") {
      console.log("yes its undefined");

      return cities; }


    return cities.filter((city) =>{

            console.log("test pipe " + city.name.toLowerCase());
            city.name.toLowerCase().startsWith(search.toLowerCase()) }
    );

  }
}
