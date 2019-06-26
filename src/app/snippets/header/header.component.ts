import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogin: boolean = false;

  constructor(private router: Router) { 
    router.events.subscribe(()=>{
      if(localStorage.getItem("bo") || localStorage.getItem("student") || localStorage.getItem("trainer")){
        this.isLogin = true;
      }
    });
  }

  ngOnInit() {
  }


  logout(){
    localStorage.removeItem("bo");
    localStorage.removeItem("student");
    localStorage.removeItem("trainer");

    this.router.navigateByUrl("/");
  }

}
