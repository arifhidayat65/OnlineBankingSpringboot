import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputNilaiComponent } from 'src/app/trainer/input-nilai/input-nilai.component';
import { TrainerRoutingModule } from './trainer-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatasiswaComponent } from 'src/app/trainer/datasiswa/datasiswa.component';
import { JadwalComponent } from 'src/app/trainer/jadwal/jadwal.component';
import {Router} from '@angular/router';

@NgModule({
  declarations: [
    InputNilaiComponent,
    DatasiswaComponent,
    JadwalComponent

  ],
  imports: [
    CommonModule,
    TrainerRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class TrainerModule {
  constructor(private router: Router){
    if (!localStorage.getItem("trn")){
      router.navigateByUrl("/")
    }
  }
}
