import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AccountInfoHttpService} from "../Services/AccountInfoServices/account-info-http-service";
import {AccountInfoData} from "../Services/AccountInfoServices/account-info-model";

import 'rxjs/add/observable/combineLatest';
import {Observable} from "rxjs/Observable";
import {CityData} from "./city-model";
import {CountryData} from "./country-model";


@Component({
    selector: 'app-new-account-form',
    templateUrl: './new-account-form.component.html',
    styleUrls: ['./new-account-form.component.css']
  }
)
export class NewAccountFormComponent implements OnInit {

   form: FormGroup;
   countries: CountryData[] = [];
  // private citiesFromJson: CityData[] = [];


   cities: CityData[] = null;

  showDropDown = false;

   _accountInfoData: AccountInfoData;



  constructor(private _accountInfoService: AccountInfoHttpService) {


  }


  /**
   *
   */
  fetchCities() {

    console.log("hit it " + this.form.controls["country"].value);

    // set the city value null after changing

    this.form.patchValue({"city": ""});


    this._accountInfoService.getCityDataFromMongoDBUsingCountryName(this.form.controls["country"].value).subscribe((data) => {

      if(data.length <=100) {

        this.cities = data;

      }

    });


  }


  /**
   *
   */
  selectValue(value) {
    this.form.patchValue({"city": value});
    this.showDropDown = false;
  }

  /**
   *
   */
  getSearchValue() {
    return this.form.value.city;
  }


  /**
   *
   * @param $event
   */
  search($event) {

    // let q = $event.target.value;
    //
    // console.log("starting value " + $event.target.value);
    //
    // q = q.charAt(0).toUpperCase() + q.slice(1);
    //
    //
    // this._accountInfoService.getCityDataFromMongoDB(q).subscribe((data) => {
    //
    //   console.log("test " + JSON.stringify(data));
    //
    //   this.cities = data;
    // });


  }


  /**
   *
   */
  ngOnInit() {


    this._accountInfoData = new AccountInfoData();

    this._accountInfoService.getCountryData().subscribe((data) => {

      this.countries = data;
    })

    this.initializeForm();


    this._accountInfoService.getAccountInfo().subscribe(data => {

        this._accountInfoData = data;

        let firstName = this._accountInfoData.first_name;
        let lastName = this._accountInfoData.last_name;
        let country = this._accountInfoData.country;
        let city = this._accountInfoData.city;
        let emailId = this._accountInfoData.email_id;
        let mobileNumber = this._accountInfoData.mobile_number;
        let password = this._accountInfoData.password;
        let interest = this._accountInfoData.interest;
        let desc = this._accountInfoData.description;
        let dateOfBirth = this._accountInfoData.date_of_birth;


        console.log("mobile number test " + mobileNumber);

        this.form.patchValue({"firstName": firstName});
        this.form.patchValue({"lastName": lastName});
        this.form.patchValue({"email": emailId});

        this.form.patchValue({"country": country});

         this.fetchCities();

        this.form.patchValue({"city": city});

        this.form.patchValue({"myDate" : dateOfBirth});
        this.form.patchValue({"password": password});
        this.form.patchValue({"retypePassword": password});
        this.form.patchValue({"interest": interest});
        this.form.patchValue({"description": desc});
        this.form.patchValue({"mobileNumber": mobileNumber});


        console.log("test " + this._accountInfoData.first_name);


      }
    );

  }




  toggleDropDown() {

    this.showDropDown = !this.showDropDown;

  }

  onClickedOutside() {

    this.showDropDown = false;

  }


  initializeForm(): void {

    this.form = new FormGroup({

      firstName: new FormControl(this._accountInfoData.first_name, Validators.required),
      lastName: new FormControl(this._accountInfoData.last_name, Validators.required),
      myDate: new FormControl(""),
      country: new FormControl("", Validators.required),
      city: new FormControl("", Validators.required),
      email: new FormControl(this._accountInfoData.email_id, Validators.required),
      mobileNumber: new FormControl(this._accountInfoData.mobile_number),
      getNotificationForNewRequests: new FormControl(""),
      uploadPicture: new FormControl(""),
      password: new FormControl(this._accountInfoData.password, Validators.required),
      retypePassword: new FormControl("", Validators.required),
      notRobotCode: new FormControl(""),
      interest: new FormControl("", Validators.required),
      lookingForFreelancingProjects: new FormControl(""),
      description: new FormControl("")

    });

    console.log("testing first name after initialization " + this.form.value._first_name);


  }




  onSubmit(user) {


    this._accountInfoService.updateAccountInfo(user);

    console.log("is form valid " + this.form.valid);
    console.log(user);
  }

}
