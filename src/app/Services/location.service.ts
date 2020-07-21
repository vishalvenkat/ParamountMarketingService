import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  jsonFile: any[];

  constructor(http: HttpClient) {
    http.get('./assets/Json/stateDetails.json')
      .subscribe(data => {
          this.jsonFile = data as string[];
        },
        (err: HttpErrorResponse) => {
          alert(err.message);
        });
  }

  getStateList = () => {
    const states: string[] = [];
    this.jsonFile.find(stateList => {
      states.push(stateList.state);
    });
    return states;
  }
  getCityList = (stateName: string) => {
    const city = this.jsonFile.find(stateNameList => stateNameList.state === stateName);
    return city.cities;
  }
}
