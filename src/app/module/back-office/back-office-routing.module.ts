import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/backOffice/home/home.component';
import { BatchComponent } from 'src/app/backOffice/batch/batch.component';
import { MappingComponent } from 'src/app/backOffice/mapping/mapping.component';
import { MaterialComponent } from 'src/app/backOffice/material/material.component';
import { StudentComponent } from 'src/app/backOffice/student/student.component';
import { TrainerComponent } from 'src/app/backOffice/trainer/trainer.component';
import {ScheduleComponent} from 'src/app/backOffice/schedule/schedule.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'batch', component: BatchComponent},
  {path: 'mapping', component: MappingComponent},
  {path: 'material', component: MaterialComponent},
  {path: 'student', component: StudentComponent},
  {path: 'trainer', component: TrainerComponent},
  {path: 'schedule', component: ScheduleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule { }
