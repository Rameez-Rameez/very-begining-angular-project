import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReactiveFormService {

  constructor(private http:HttpClient) { }

  postUserInfo(userInfo){
    return this.http.post('http://localhost:8089/process_login',userInfo)
  }
}
