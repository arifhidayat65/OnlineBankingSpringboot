import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trainer } from '../model/Trainer';
import { Observable } from 'rxjs';
import { CommonResponse } from '../model/CommonResponse';
import { Student } from '../model/Student';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  constructor(private http: HttpClient) { }

  inputNilai(inputNilaiData: Trainer) : Observable<CommonResponse<Trainer>>{
    let url = `http://localhost:8080/`;
    return this.http.post<CommonResponse<Trainer>>(url, inputNilaiData);
  }

  getJadwal(id) {
    let url = `http://localhost:8080/customer/${id}`;
    return this.http.get<CommonResponse<Trainer>>(url);
  }

  getDataSiswa(id) {
    let url = `http://localhost:8080/customer/${id}`;
    return this.http.get<CommonResponse<Student>>(url);
  }

}
