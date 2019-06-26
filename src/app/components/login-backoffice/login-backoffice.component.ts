import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import LoginDto from 'src/app/model/login-dto';

@Component({
  selector: 'app-login-backoffice',
  templateUrl: './login-backoffice.component.html',
  styleUrls: ['./login-backoffice.component.css']
})
export class LoginBackofficeComponent implements OnInit {

  formLogin: FormGroup;
  submitted: boolean = false;
  dto: LoginDto = new LoginDto();

  constructor(private service: AuthService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {

    this.formLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  public get f() {
    return this.formLogin.controls;
  }

  onSubmit(){
    this.submitted = true;

    if(this.formLogin.invalid){
      return;
    } else {
       this.dto.username = this.formLogin.controls.username.value;
       this.dto.password = this.formLogin.controls.password.value;

       this.loginProces(this.dto);
      // alert(JSON.stringify(this.dto));
    }
  }

  async loginProces(auth: LoginDto){
    let resp = await this.service.loginBo(auth).toPromise();
    if(resp.status != 20){
      alert(resp.message);
    } else {
      localStorage.setItem("bo", resp.data.id.toString());
      this.router.navigateByUrl("/backoffice");
    }
  }

}
