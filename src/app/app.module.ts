import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BatchComponent } from './backOffice/batch/batch.component';
import { MaterialComponent } from './backOffice/material/material.component';
import { MappingComponent } from './backOffice/mapping/mapping.component';
import { TrainerComponent } from './backOffice/trainer/trainer.component';
import { StudentComponent } from './backOffice/student/student.component';
import { HomeComponent } from './backOffice/home/home.component';
import { HeaderComponent } from './snippets/header/header.component';
import { FooterComponent } from './snippets/footer/footer.component';
import { DatasiswaComponent } from './trainer/datasiswa/datasiswa.component';
import { InputNilaiComponent } from './trainer/input-nilai/input-nilai.component';
import { JadwalComponent } from './trainer/jadwal/jadwal.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginOptionsComponent } from './components/login-options/login-options.component';
import { LoginStudentComponent } from './components/login-student/login-student.component';
import { LoginTrainerComponent } from './components/login-trainer/login-trainer.component';
import { LoginBackofficeComponent } from './components/login-backoffice/login-backoffice.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DatasiswaComponent,
    InputNilaiComponent,
    JadwalComponent,
    LoginOptionsComponent,
    LoginStudentComponent,
    LoginTrainerComponent,
    LoginBackofficeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
