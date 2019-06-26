import { Component, OnInit } from '@angular/core';
import { Material } from 'src/app/model/Material';
import { CommonResponse } from 'src/app/model/CommonResponse';
import { BackOfficeService } from 'src/app/service/back-office.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  constructor(private service: BackOfficeService, private builder: FormBuilder) { }


  material: Material[] = [];

  material2: Material = new Material();
  responses: any = new CommonResponse<Material[]>();
  response: any = new CommonResponse<Material>();
  materialFormGroup: FormGroup;

  ngOnInit() {
    this.materialFormGroup = this.builder.group(
      {
        description: ['', Validators.required]
      }
    );
    this.getMaterials();
    this.refresh();
  }

  refresh(){
    this.service.refresh.subscribe(
      () => {
        setTimeout(() => {
          this.getMaterials();
        }, 1000);
      }
    );
  }

  async getMaterials() {
    this.responses = await this.service.getMaterials().toPromise();
    this.material = this.responses.data;
  }

  async save() {
    this.material2.description = this.materialFormGroup.controls['description'].value;

    this.response = await this.service.addMaterial(this.material2).toPromise().catch((err) => alert(err));

  }
}
