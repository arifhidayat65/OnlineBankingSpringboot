import { Component, OnInit } from '@angular/core';
import { BackOfficeService } from 'src/app/service/back-office.service';
import { CommonResponse } from 'src/app/model/CommonResponse';
import { Batch } from 'src/app/model/Batch';
import { Material } from 'src/app/model/Material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MaterialMapping } from 'src/app/model/MaterialMapping';

@Component({
  selector: 'app-mapping',
  templateUrl: './mapping.component.html',
  styleUrls: ['./mapping.component.css']
})
export class MappingComponent implements OnInit {

  constructor(private service: BackOfficeService, private builder: FormBuilder) { }

  responseBatch: CommonResponse<Batch[]> = new CommonResponse<Batch[]>();
  batch: Batch[] = [];
  responseMateri: CommonResponse<Material[]> = new CommonResponse<Material[]>();
  materi: Material[] = [];
  mapping: MaterialMapping = new MaterialMapping();
  response: CommonResponse<MaterialMapping> = new CommonResponse<MaterialMapping>();
  materialMapping: MaterialMapping[] = [];

  bath: Batch = new Batch();
  math: Material = new Material();


  mappingFormGroup: FormGroup;

  ngOnInit() {
    this.mappingFormGroup = this.builder.group(
      {
        bth: ['', Validators.required],
        material: ['', Validators.required]
      }
    );
    this.getBatch();
    this.getMaterial();
    this.getMap();
  }

  async getBatch() {
    this.responseBatch = await this.service.getBatch().toPromise();
    this.batch = this.responseBatch.data;
  }

  async getMap(){
    let resp = await this.service.getMapping().toPromise();
    this.materialMapping = resp.data;
  }

  async getMaterial(){
    this.responseMateri = await this.service.getMaterials().toPromise();
    this.materi = this.responseMateri.data;
  }

  async save() {
    let data = {
      idMateri: this.mappingFormGroup.controls['material'].value,
      batchId: this.mappingFormGroup.controls['bth'].value
    }

    this.bath.batchId = this.mappingFormGroup.controls['bth'].value;
    this.math.idMateri = this.mappingFormGroup.controls['material'].value;
    this.mapping.batch = this.bath;
    this.mapping.material = this.math;
    alert(JSON.stringify(data));
    this.response = await this.service.addMapping(data).toPromise();
    alert(this.response.message);
  }
}
