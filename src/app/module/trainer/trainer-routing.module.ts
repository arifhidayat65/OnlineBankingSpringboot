import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TrainerComponent } from 'src/app/backOffice/trainer/trainer.component';

const trainerRoutes: Routes = [
  {path: '', component: TrainerComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(trainerRoutes)
  ]
})
export class TrainerRoutingModule { }
