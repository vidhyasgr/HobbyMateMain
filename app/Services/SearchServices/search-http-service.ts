import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {SearchNearbyQueryModel} from "../../search-partner/search-nearby-query-model";
import {SearchNearbyModel} from "../../search-partner/search-nearby-model";
import {Observable} from "rxjs/Observable";
import {CircleData} from "../../search-partner/circle-style.model";
import {FollowModel} from "../../search-partner/follow-status-model";
/**
 * Created by vidhyasagar on 09.03.18.
 */





@Injectable()
export class SearchPageHttpService{

  circlesDatainLocalStorage:Array<CircleData> = [];
  userDataTempDatainLocalStorage:Array<SearchNearbyModel> = [];

  followingDataLocalStorage:Array<FollowModel> = [];

  constructor(private _http: HttpClient){


  }


  /**
   *
   * @param userDetail
   */
  storeFollowingStatus(userDetail: SearchNearbyModel){

    for(var i =0; i<this.followingDataLocalStorage.length;i ++){

      if(this.followingDataLocalStorage[i].emailId == userDetail.emailId){

        this.followingDataLocalStorage[i].following = !this.followingDataLocalStorage[i].following;

      }

    }

  }


  /**
   *
   * @param searchNearbyUsers
   * @returns {Subscription}
   */
  getNearByUsers(searchNearbyUsers: SearchNearbyQueryModel):Observable<SearchNearbyModel[]>{



    return this._http.get<SearchNearbyModel[]>('./assets/data/search_nearby_users_mockdata.json').map((data) => {
      return data;
    });

   // return this._http.post<SearchNearbyModel[]>("/search/get/nearby_users", JSON.stringify(searchNearbyUsers)).map((data) => {
   //   return data;
   // });

  }


  /**
   *
   * @param userDetail
   */

  followTheUser(userDetail: SearchNearbyModel){

    this._http.get("http://localhost:8080/user_contact/follow?emailId=" + userDetail.emailId).subscribe(response => {
      console.log(response);
    });
  }



  /**
   *
   * @param userDetail
   */

  unfollowTheUser(userDetail: SearchNearbyModel){

    this._http.get("http://localhost:8080/user_contact/unfollow?emailId=" + userDetail.emailId).subscribe(response => {
      console.log(response);
    });
  }



}
