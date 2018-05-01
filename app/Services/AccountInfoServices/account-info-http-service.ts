/**
 * Created by vidhyasagar on 13.01.18.
 */
import 'rxjs/add/operator/map'
import {Injectable} from "@angular/core";
import {AccountInfoData} from "./account-info-model";
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpResponse} from "@angular/common/http";

import {CityData} from "../../account-info/city-model";
import {CountryData} from "../../account-info/country-model";


interface ResponseFromMongo {

  status : string;
  data : CityData[];
  message : string;

}


@Injectable()
export class AccountInfoHttpService{




  // constructor(private _http: HttpClient, private db : AngularFireDatabase){
  //
  //
  // }




  constructor(private _http: HttpClient){


  }


  /**
   *
   * @param countryName
   * @returns {Observable<R>}
   */

  getCityDataFromMongoDBUsingCountryName(countryName : string):Observable<CityData[]>{


    // return this._http.get<ResponseFromMongo>("http://localhost:8080/mongodb/citiesByCountryName/" + countryName ).map((data) => {

      return this._http.get<CityData[]>("http://localhost:8080/mongodb/citiesByCountryName/" + countryName ).map((data) => {


        return data;

    });




  }


  /**
   *
   * @returns {Observable<R>}
   */

  getAccountInfo():Observable<AccountInfoData>{

    // return this._http.get("http://localhost:8080/user/user-info").
    // map(res => {
    //
    //   console.log("json " + JSON.stringify(res));
    //
    //
    //   return <AccountInfoData> res;
    //
    //
    //
    // });

    return this._http.get<AccountInfoData>("./assets/data/user_info_mockdata.json").map((data) => {


      return data;

    });


  }


  /**
   *
   */
 doLogOut():void{


    this._http.get("http://localhost:8080/user/logout");

    // after logging out need to redirect to login page
    window.location.href = "http://localhost:8080/login"

    }


  /**
   *
   * @returns {Observable<R>}
   */

  getCountryData():Observable<CountryData[]> {

    console.log("hit it before");

   return this._http.get<CountryData[]>('./assets/data/country_data.json')
      .map(data => {
        // console.log(data);
        return data;
      });

  }

  /**
   *
   * @param User
   */
  updateAccountInfo(user:string){


    this._http.post("http://localhost:8080/user/update-info", user).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured");
      }
    );

  }






}
