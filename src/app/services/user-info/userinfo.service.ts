import { User } from './../../model/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map , catchError } from 'rxjs/operators';
import { apiEndPoint } from '../../config/endpoint';

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {

  constructor(private httpClient: HttpClient) { }

   getUserInfo = (uName:string , password:string) => {
     const localData = {
      userName: uName,
      password: password
     }
     return this.httpClient.post(apiEndPoint.getLogin() ,localData,{responseType: 'text'});
  }

  registerUser = (user: User) => {
    return this.httpClient.post(apiEndPoint.registration() ,user, {responseType: 'text'}).pipe(
       map((body:any) => body),
       catchError((error:any) => throwError(error || 'Error while loading data'))
     );
 }

 getAllEmp = ()=>{
  return this.httpClient.get("/craftingo/getAll").pipe(
    map((body:any) => body),
    catchError((error:any) => throwError(error || 'Error while loading data'))
  );
 }
}
