import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getData():Observable<any>{
    const url="https://randomuser.me/api/?results=100"
    return this.http.get<any>(url)
  }



}
