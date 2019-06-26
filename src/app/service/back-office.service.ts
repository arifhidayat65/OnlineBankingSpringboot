import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { CommonResponse } from '../model/CommonResponse';
import { Batch } from '../model/Batch';
import { Material } from '../model/Material';
import { Student } from '../model/Student';
import {tap} from 'rxjs/operators';
import { MaterialMapping } from '../model/MaterialMapping';
import { Schedule } from '../model/Schedule';
import {Trainer} from '../model/Trainer';


@Injectable({
  providedIn: 'root'
})
export class BackOfficeService {
  private baseUrl = 'http://localhost:9091/';

  constructor(private http: HttpClient) { }

  private _refresh = new Subject<void>();

  get refresh() {
    return this._refresh;
  }

  getBatch(): Observable<CommonResponse<Batch[]>> {
    return this.http.get<CommonResponse<Batch[]>>(`${this.baseUrl}batchs`);
  }

  getSchedule(): Observable<CommonResponse<Schedule[]>> {
    return this.http.get<CommonResponse<Schedule[]>>(`${this.baseUrl}schedules`);
  }

  addBatch(batch: Batch): Observable<CommonResponse<Batch>>{
    return this.http.post<CommonResponse<Batch>>(`${this.baseUrl}/batch`, batch).pipe(tap(()=>{this._refresh.next()}));
  }
  getMaterials(): Observable<CommonResponse<Material[]>>{
    return this.http.get<CommonResponse<Material[]>>(`${this.baseUrl}back-office/materials`);
  }
  addMaterial(material: Material): Observable<CommonResponse<Material>> {
    return this.http.post<CommonResponse<Material>>(`${this.baseUrl}back-office/material`, material).pipe(tap(()=>{this._refresh.next()}));
  }
  getStudent(): Observable<CommonResponse<Student[]>>{
    return this.http.get<CommonResponse<Student[]>>(`${this.baseUrl}students`);
  }
  addStudent(student: Student): Observable<CommonResponse<Student>> {
    return this.http.post<CommonResponse<Student>>(`${this.baseUrl}student`, student);
  }
  getMapping(): Observable<CommonResponse<MaterialMapping[]>> {
    return this.http.get<CommonResponse<MaterialMapping[]>>(`${this.baseUrl}materials`);
  }
  addMapping(map: any): Observable<CommonResponse<MaterialMapping>> {
    return this.http.post<CommonResponse<MaterialMapping>>(`${this.baseUrl}material/mapping`,map);
  }
  addSchedule(schedule: Schedule): Observable<CommonResponse<Schedule>>{
    return this.http.post<CommonResponse<Schedule>>(`${this.baseUrl}schedule`, schedule).pipe(tap(()=>{this._refresh.next()}));
  }
  getTrainer(): Observable<CommonResponse<Trainer[]>>{
    return this.http.get<CommonResponse<Trainer[]>>(`${this.baseUrl}back-office/trainers`);
  }
  addTrainer(trainer: Trainer): Observable<CommonResponse<Trainer>> {
    return this.http.post<CommonResponse<Trainer>>(`${this.baseUrl}trainer`, trainer);
  }
}
