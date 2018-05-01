import { Component, OnInit } from '@angular/core';

import {CircleData} from "./circle-style.model";
import {ItemData} from "./items-inside-circle.model";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import {SearchPageHttpService} from "../Services/SearchServices/search-http-service";
import {SearchNearbyQueryModel} from "./search-nearby-query-model";
import {SearchNearbyModel} from "./search-nearby-model";

@Component({
  selector: 'app-search-partner',
  templateUrl: './search-partner.component.html',
  styleUrls: ['./search-partner.component.scss'],
  animations: [
  trigger('state', [
    state('in', style({transform: 'translateX(0)'})),
    transition('void => *', [
      style({transform: 'translateX(-100%)'}),
      animate(100)
    ]),
    transition('* => void', [
      animate(100, style({transform: 'translateX(100%)'}))
    ])
  ]),trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(-82%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ])
]
})


export class SearchPartnerComponent implements OnInit {

  constructor(private searchPageService : SearchPageHttpService){

    this.circles = this.searchPageService.circlesDatainLocalStorage;
    this.userDataTemp = this.searchPageService.userDataTempDatainLocalStorage;

  }



  circles:Array<CircleData> = [];

  state:string = "inactive";
  menuState:string = 'out';

  followButtonValue : string = "Follow";

  userDataTemp:Array<SearchNearbyModel> = [];

  // userDetail:ItemData;

  userDetail:SearchNearbyModel = new SearchNearbyModel();


  /**
   *
   *
   */
  toggleMenu() {

    console.log("it comes here");

    // 1-line if statement that toggles the value:
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

  /**
   *
   */
  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
    console.log("state " +this.state)
  }


  ngOnInit() {

    this.searchForNearbyUsers();

    this.userDetail._firstName = "Vidhya";
    this.userDetail._lastName = "sagar";
    this.userDetail._cityName = "Görlitz";
    this.userDetail._hobby = "Photography";
    this.userDetail._dateOfBirth = "15-05-1993";
    this.userDetail._description = "I am a proffesional Front end and Back end developer and " +
      "i have done many interesting projects one of the project is LocationServer based on WiFi."


    var listOfItemInOneCircle: Array<ItemData> = [];
    var listOfItemInTwoCircle: Array<ItemData> = [];
    var listOfItemInThreeCircle: Array<ItemData> = [];
    var listOfItemInFourCircle: Array<ItemData> = [];



    let circleDataOne : CircleData = new CircleData();
    let circleDataTwo : CircleData= new CircleData();
    let circleDataThree : CircleData= new CircleData();
    let circleDataFour : CircleData= new CircleData();


    circleDataOne._width = 500;
    circleDataOne._height = 500;
    circleDataOne._radius = 250;
    circleDataOne._color = "blue";
    circleDataOne._itemsInCircle = listOfItemInOneCircle;


    circleDataTwo._width = 400;
    circleDataTwo._height = 400;
    circleDataTwo._radius = 200;
    circleDataTwo._color = "blue";
    circleDataTwo._itemsInCircle = listOfItemInTwoCircle;


    circleDataThree._width = 300;
    circleDataThree._height = 300;
    circleDataThree._radius = 150;
    circleDataThree._color = "blue";
    circleDataThree._itemsInCircle = listOfItemInThreeCircle;


    circleDataFour._width = 200;
    circleDataFour._height = 200;
    circleDataFour._radius = 100;
    circleDataFour._color = "blue";
    circleDataFour._itemsInCircle = listOfItemInFourCircle;




    this.circles.push(circleDataOne);
    this.circles.push(circleDataTwo);
    this.circles.push(circleDataThree);
    this.circles.push(circleDataFour);


  }


  /**
   *
   * @param listOfItemInCircle
   * @param listOfItemInCircleOne
   */

  private copyTheArray(listOfItemInCircle: Array<ItemData>, listOfItemInCircleOne: Array<ItemData>) {
    listOfItemInCircle.forEach(item => listOfItemInCircleOne.push(Object.assign({}, item)));
  }


  /**
   *
   * After clicking the search button, it looks for the items or persons nearby and show in image inside.
   *
   */

  searchForNearbyUsers() {


    //TODO here we need to send REST request to get the nearby users by city and distance.

    let searchNearbyQueryModelForRest:SearchNearbyQueryModel = new SearchNearbyQueryModel("Görlitz", 30);


    this.searchPageService.getNearByUsers(searchNearbyQueryModelForRest).subscribe((data) => {



      for ( let searchNearbyModelData of data) {

        var isNewUserData = true;

        for (let userDataToCompare of this.userDataTemp) {

          if (userDataToCompare.emailId == searchNearbyModelData.emailId) {
            isNewUserData = false;
          }

        }

        // checks whether its new user data.

        if (isNewUserData) {

          this.userDataTemp.push(searchNearbyModelData);

        let itemDataToStore: ItemData = new ItemData();

        itemDataToStore._xAxis = 185;
        itemDataToStore._yAxis = 0;

    // Convert the searchNearbyModelData to other DTO.

        itemDataToStore._searchNearbyModel = searchNearbyModelData;

        let tempDistance = searchNearbyModelData.distance;

        if (tempDistance <= 20) {
          this.circles[3].itemsInCircle.push(itemDataToStore);

        } else if (tempDistance <= 60) {
          this.circles[2].itemsInCircle.push(itemDataToStore);

        } else if (tempDistance <= 100) {
          this.circles[1].itemsInCircle.push(itemDataToStore);

        } else {
          this.circles[0].itemsInCircle.push(itemDataToStore);

        }

      }



      }


      this.assignItemsOnCircle();


    });


  }


  /**
   *
   */


  private assignItemsOnCircle() {


    // This logic helps to keeps the items on the circle and rotate it.


    for (let circle of this.circles) {

      var angle = 0;

      var step = (2 * Math.PI) / circle.itemsInCircle.length;

      for (let item of circle.itemsInCircle) {

        item.xAxis = Math.round((circle.width / 2) + (circle.radius * Math.cos(angle)) - 30 / 2);
        item.yAxis = Math.round((circle.height / 2) + (circle.radius * Math.sin(angle)) - 30 / 2);

        console.log("new xAxis nd yAxis" + item.xAxis + " " + item.yAxis);


        angle += step;

      }

    }
  }


  /**
   *
   * @param itemData
   */
  assigningUserDetail(itemData : ItemData){

  this.userDetail = itemData._searchNearbyModel;

  }


  /**
   *
   * @param min
   * @param max
   * @returns {any}
   */

  getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


  /**
   *
   * @param userDetail
   */
  followButtonListener(userDetail : SearchNearbyModel){


    if(this.userDetail.following == false){
      this.searchPageService.followTheUser(userDetail);
    }else{
      this.searchPageService.unfollowTheUser(userDetail);
    }

   this.userDetail.following =  !this.userDetail.following;

  }





}
