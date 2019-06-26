import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BackOfficeService } from 'src/app/service/back-office.service';
import { Student } from 'src/app/model/Student';
import { CommonResponse } from 'src/app/model/CommonResponse';
import { Batch } from 'src/app/model/Batch';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private service: BackOfficeService, private builder: FormBuilder) { }

  students: Student[] = [];
  batch: Batch[] = [];
  batch1: Batch = new Batch();
  student2: Student = new Student();
  response1: CommonResponse<Student[]>  = new CommonResponse<Student[]>();
  response2: any = new CommonResponse<Student>();
  responseBatch: any = new CommonResponse<Batch[]>();
  studentFormGroup: FormGroup;

  ngOnInit() {
    this.getBatch();
    this.getStudent();
    this.studentFormGroup = this.builder.group(
      {
        name : ['', Validators.required],
        gender: ['', Validators.required],
        place: ['', Validators.required],
        date: ['', Validators.required],
        address: ['', Validators.required],
        email: ['', Validators.required],
        phone: ['', Validators.required],
        username: ['', Validators.required],
        password: ['', Validators.required],
        batch: ['', Validators.required]
      }
    );
  }

  async getBatch() {
    this.responseBatch = await this.service.getBatch().toPromise();
    this.batch = this.responseBatch.data;
  }
  async getStudent() {
    this.response1 = await this.service.getStudent().toPromise();
    this.students = this.response1.data;
  }
  async saveStudent() {
    this.student2.name          = this.studentFormGroup.controls['name'].value;
    this.student2.gender        = this.studentFormGroup.controls['gender'].value;
    this.student2.placeOb       = this.studentFormGroup.controls['place'].value;
    this.student2.birthDate     = this.studentFormGroup.controls['date'].value;
    this.student2.address       = this.studentFormGroup.controls['address'].value;
    this.student2.email         = this.studentFormGroup.controls['email'].value;
    this.student2.phoneNumber   = this.studentFormGroup.controls['phone'].value;
    this.student2.username      = this.studentFormGroup.controls['username'].value;
    this.student2.password      = this.studentFormGroup.controls['password'].value;
    this.batch1.batchId         = this.studentFormGroup.controls['batch'].value;
    this.student2.batch         = this.batch1;
    this.response2              = this.service.addStudent(this.student2).toPromise();
    this.student2               = this.response2.data;
  }
}
