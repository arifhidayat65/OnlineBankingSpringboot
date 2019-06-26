import { Component, OnInit } from '@angular/core';
import { Batch } from '../../model/Batch';
import { CommonResponse } from '../../model/CommonResponse';
import { BackOfficeService } from 'src/app/service/back-office.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit {

  batch: Batch = new Batch();
  batchs: Batch[] = [];
  responseBatch: CommonResponse<Batch[]> = new CommonResponse();
  response: any = new CommonResponse<Batch>();

  constructor(private service: BackOfficeService, private builder: FormBuilder) { }


  batchFormGroup: FormGroup;

  ngOnInit() {
    this.batchFormGroup = this.builder.group(
      {
        description: ['', Validators.required],
        start: ['', Validators.required],
        finish: ['', Validators.required]
      }
    );
    
    this.getList();
    this.refresh();
  }

  refresh(){
    this.service.refresh.subscribe(
      () => {
        setTimeout(() => {
          this.getList();
        }, 1000);
      }
    ); 
  }
  

  async getList() {
    this.responseBatch = await this.service.getBatch().toPromise();
    console.log(this.responseBatch.status);
    this.batchs = this.responseBatch.data;
  }

  async save() {
    this.batch.description = this.batchFormGroup.controls['description'].value;
    this.batch.start = this.batchFormGroup.controls['start'].value;
    this.batch.finish = this.batchFormGroup.controls['finish'].value;
    console.log(this.batch);
    this.response = await this.service.addBatch(this.batch).toPromise();
    alert(this.response.message);
  }

}
