import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse } from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
jsonFile;
  constructor(http: HttpClient) {
    http.get('./assets/Json/stateDetails.json')
      .subscribe(data => {this.jsonFile = data as string[]; },
        (err: HttpErrorResponse) => {
          alert(err.message);
        });
  }
  getStateList = () => {
    const states: string[] = [];
    for (const state in this.jsonFile) {
      states.push(this.jsonFile[state].state);
    }
    return states;
  }
  getCityList = (stateName: string) => {
    const city = this.jsonFile.find(state => state.state === stateName);
    console.log(city.cities);
    return city.cities;
  }
}
