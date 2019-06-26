import { Injectable } from '@angular/core';
import LoginDto from '../model/login-dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonResponse } from '../model/CommonResponse';
import { BackOffice } from '../model/BackOffice';
import {Trainer} from '../model/Trainer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient){
  }

  urlBo = "http://localhost:9091/back-office/login";
  urlTrainer = "http://localhost:9091/trainer/login";
  // login back office
  loginBo(auth: LoginDto): Observable<CommonResponse<BackOffice>>{
    return this.http.post<CommonResponse<BackOffice>>(this.urlBo, auth);
  }

  // check is login back office
  isLoginBko(){
    if (localStorage.getItem("bo") !=null){
      return true;
    } else {
      return false;
    }
  }
  /*Login Trainer */
  loginTrainer(auth: LoginDto): Observable<CommonResponse<Trainer>>{
    return this.http.post<CommonResponse<Trainer>>(this.urlTrainer, auth);
  }

  isLoginTrainer(){
    if (localStorage.getItem("trainer")!=null){
      return true;
    } else {
      return false;
    }
  }

}


/*LOGIN TRAINER*/
