import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackOfficeRoutingModule } from './back-office-routing.module';
import { BatchComponent } from 'src/app/backOffice/batch/batch.component';
import { MaterialComponent } from 'src/app/backOffice/material/material.component';
import { MappingComponent } from 'src/app/backOffice/mapping/mapping.component';
import { TrainerComponent } from 'src/app/backOffice/trainer/trainer.component';
import { StudentComponent } from 'src/app/backOffice/student/student.component';
import { HomeComponent } from 'src/app/backOffice/home/home.component';
import {ScheduleComponent} from 'src/app/backOffice/schedule/schedule.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    BatchComponent,
    MaterialComponent,
    MappingComponent,
    TrainerComponent,
    StudentComponent,
    HomeComponent,
    ScheduleComponent

  ],
  imports: [
    CommonModule,
    BackOfficeRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BackOfficeModule { 
  constructor(private router: Router){
    if (!localStorage.getItem("bo")) {
      router.navigateByUrl("/");
    }
  }
}
