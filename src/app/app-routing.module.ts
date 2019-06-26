import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackOfficeModule } from './module/back-office/back-office.module';
import { HomeComponent } from './backOffice/home/home.component';
import { LoginOptionsComponent } from './components/login-options/login-options.component';
import { LoginBackofficeComponent } from './components/login-backoffice/login-backoffice.component';
import { LoginStudentComponent } from './components/login-student/login-student.component';
import { LoginTrainerComponent } from './components/login-trainer/login-trainer.component';
import { AuthGuard } from './security/auth.guard';

const routes: Routes = [
  {path: '', component: LoginOptionsComponent},
  {path: 'student/login', component: LoginStudentComponent},
  {path: 'trainer/login', component: LoginTrainerComponent},
  {path: 'backoffice', loadChildren: () => BackOfficeModule},
  {path:'backoffice-in', component: LoginBackofficeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
