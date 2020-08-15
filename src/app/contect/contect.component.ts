import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContectServiceService } from "../Service/contect-service.service";

@Component({
  selector: 'app-contect',
  templateUrl: './contect.component.html',
  styleUrls: ['./contect.component.css']
})
export class ContectComponent implements OnInit {

  contectform:FormGroup;

  constructor(private _fb:FormBuilder,private service:ContectServiceService) { }

  ngOnInit()
  {
    this.contectform = this._fb.group({
      fullname: [null, Validators.required],
      email: [null, Validators.required],
      phoneno: [null, Validators.required],
      companyname: [null, Validators.required],
      abutus: [null, Validators.required],
      primePay: [null, Validators.required],
      digitalassetsolutions: [null, Validators.required],
      custodialservices: [null, Validators.required],
      assetprotectontrusts: [null, Validators.required],
      escrowservices: [null, Validators.required],
      complianceservices: [null, Validators.required],
      other: [null, Validators.required],
      message: [null, Validators.required],
    });

  }

  savedata(data)
  {
    console.log(data);
    this.service.storedata(data)
  }

}
