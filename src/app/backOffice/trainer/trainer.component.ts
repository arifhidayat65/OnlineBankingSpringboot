import { Component, OnInit } from '@angular/core';
import {BackOfficeService} from '../../service/back-office.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CommonResponse} from '../../model/CommonResponse';
import {Trainer} from '../../model/Trainer';
import {Material} from '../../model/Material';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  constructor(private service: BackOfficeService, private builder: FormBuilder) { }

  trainer: Trainer[] = [];
  material: Material[] = [];
  material1: Material = new Material();
  trainer2: Trainer = new Trainer();
  response1: CommonResponse<Trainer[]>  = new CommonResponse<Trainer[]>();
  response2: any = new CommonResponse<Trainer>();
  responseMaterial: any = new CommonResponse<Material[]>();
  trainerFormGroup: FormGroup;

  ngOnInit() {
    this.getMaterial();
    this.getTrainer();
    this.trainerFormGroup = this.builder.group(
      {
        name : ['', Validators.required],
        gender: ['', Validators.required],
        place: ['', Validators.required],
        date: ['', Validators.required],
        address: ['', Validators.required],
        email: ['', Validators.required],
        phone: ['', Validators.required],
        username: ['', Validators.required],
        password: ['', Validators.required],
        material: ['', Validators.required]
      }
    );
  }

  async getMaterial() {
    this.responseMaterial = await this.service.getTrainer().toPromise();
    this.material = this.responseMaterial.data;
  }
  async getTrainer() {
    this.response1 = await this.service.getTrainer().toPromise();
    this.trainer = this.response1.data;
  }
  async saveTrainer() {
    this.trainer2.name          = this.trainerFormGroup.controls['name'].value;
    this.trainer2.gender        = this.trainerFormGroup.controls['gender'].value;
    this.trainer2.placeOb       = this.trainerFormGroup.controls['place'].value;
    this.trainer2.birthDate     = this.trainerFormGroup.controls['date'].value;
    this.trainer2.address       = this.trainerFormGroup.controls['address'].value;
    this.trainer2.email         = this.trainerFormGroup.controls['email'].value;
    this.trainer2.phoneNumber   = this.trainerFormGroup.controls['phone'].value;
    this.trainer2.username      = this.trainerFormGroup.controls['username'].value;
    this.trainer2.password      = this.trainerFormGroup.controls['password'].value;
    this.material1.idMateri     = this.trainerFormGroup.controls['batch'].value;
    this.trainer2.material      = this.material1;
    this.response2              = this.service.addTrainer(this.trainer2).toPromise();
    this.trainer2               = this.response2.data;
  }
}
