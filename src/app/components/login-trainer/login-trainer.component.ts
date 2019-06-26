import { Component, OnInit } from '@angular/core';
import LoginDto from '../../model/login-dto';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-trainer',
  templateUrl: './login-trainer.component.html',
  styleUrls: ['./login-trainer.component.css']
})
export class LoginTrainerComponent implements OnInit {

  formLogin: FormGroup;
  submitted: boolean = false;
  dto: LoginDto = new LoginDto();

  constructor( private service: AuthService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.formLogin = this.fb.group({
      ussername: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  public get f(){
    return this.formLogin.controls;
  }

  onSubmit(){
    this.submitted = true;

    if (this.formLogin.invalid){
      return;
    } else {
      this.dto.username = this.formLogin.controls.username.value;
      this.dto.password = this.formLogin.controls.password.value;

      this.loginProcess(this.dto);
    }
  }

  async loginProcess (auth: LoginDto){
    let resp = await this.service.loginTrainer(auth).toPromise();
    if (resp.status != 20){
      alert(resp.message);
    } else {
      localStorage.setItem("trn", resp.data.id.toString());
      this.router.navigateByUrl("/trainer");
    }
  }
}
