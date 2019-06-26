import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
    home = true;
    batch = false;
    material = false;
    mapping = false;
    studenet = false;
    trainer = false;
    schedule = false;

  ngOnInit() {
  }

  
  scheduleShow(){
    this.home = false;
    this.batch = false;
    this.material = false;
    this.mapping = false;
    this.studenet = false;
    this.trainer = false;
    this.schedule= true;
  }
  homeShow() {
    this.home = true;
    this.batch = false;
    this.material = false;
    this.mapping = false;
    this.studenet = false;
    this.trainer = false;
    this.schedule= false;
  }

  batchShow() {
    this.home = false;
    this.batch = true;
    this.material = false;
    this.mapping = false;
    this.studenet = false;
    this.trainer = false;
    this.schedule= false;
  }
  materialShow() {
    this.home = false;
    this.batch = false;
    this.material = true;
    this.mapping = false;
    this.studenet = false;
    this.trainer = false;
    this.schedule= false;
  }
  mappingShow() {
    this.home = false;
    this.batch = false;
    this.material = false;
    this.mapping = true;
    this.studenet = false;
    this.trainer = false;
    this.schedule= false;
  }
  studentShow() {
    this.home = false;
    this.batch = false;
    this.material = false;
    this.mapping = false;
    this.studenet = true;
    this.trainer = false;
    this.schedule= false;
  }
  trainerShow() {
    this.home = false;
    this.batch = false;
    this.material = false;
    this.mapping = false;
    this.studenet = false;
    this.trainer = true;
    this.schedule= false;
  }



}
