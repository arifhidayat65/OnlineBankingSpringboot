import { Component, OnInit } from '@angular/core';
import { BackOfficeService } from 'src/app/service/back-office.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Schedule } from 'src/app/model/Schedule';
import { CommonResponse } from 'src/app/model/CommonResponse';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  response: any = new CommonResponse<Schedule>();
  schedule: Schedule = new Schedule();
  responseSchedule: CommonResponse<Schedule[]> = new CommonResponse<Schedule[]>();
  schedules: Schedule[] = [];

  constructor(private service: BackOfficeService, private builder: FormBuilder) { }

  scheduleFormGroup: FormGroup;
  ngOnInit() {
    this.scheduleFormGroup = this.builder.group({
      date: ['', Validators.required],
      start: ['', Validators.required],
      finish: ['', Validators.required],
      materi: ['', Validators.required],
      batch: ['', Validators.required],
      trainer: ['', Validators.required]
    })
    this.getList();
    this.refresh();
  }



  refresh() {
    this.service.refresh.subscribe(
      () => {
        setTimeout(() => {
          this.getList();
        }, 1000);
      }
    );
  }

  async getList() {
    {
      this.responseSchedule = await this.service.getSchedule().toPromise();
      this.schedules = this.responseSchedule.data;
    }
  }
  async save() {
    this.schedule.date = this.scheduleFormGroup.controls['date'].value;
    this.schedule.start = this.scheduleFormGroup.controls['start'].value;
    this.schedule.finish = this.scheduleFormGroup.controls['finish'].value;

    this.schedule.materialMapping.material.idMateri = this.scheduleFormGroup.controls['materi'].value;
    this.schedule.materialMapping.batch.batchId = this.scheduleFormGroup.controls['batch'].value;
    this.schedule.trainer.id = this.scheduleFormGroup.controls['trainer'].value;

    this.response = await this.service.addSchedule(this.schedule).toPromise();
    alert(this.response.message);
  }
}
