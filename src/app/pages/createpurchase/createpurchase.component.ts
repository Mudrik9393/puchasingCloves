import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PurchaseService } from 'src/app/purchase.service';
import { PurchaseComponent } from '../purchase/purchase.component';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-createpurchase',
  templateUrl: './createpurchase.component.html',
  styleUrls: ['./createpurchase.component.css']
})
export class CreatepurchaseComponent implements OnInit {
[x: string]: any;
  purchase = new PurchaseComponent;
  constructor(private purchaseService: PurchaseService,
    private router: Router) { }

  ngOnInit(): void {
    this.formConfiguration();
  }

  formGroup!:FormGroup;

  formConfiguration(){
    this.formGroup = new FormGroup({
      address: new FormControl('',Validators.required),
      quantity: new FormControl('', Validators.required),
      grade:new FormControl('',Validators.required),
      fullName: new FormControl('',Validators.required),
      totalAmount:new FormControl('',Validators.required)
    })
  }

  savePurchase(){
    const data = this.formGroup.value;
    this.purchaseService.createPurchase(data).subscribe(() => {
      this.router.navigateByUrl('/purchase');
    })
    
   
  }
  goToPurchaseList() {
    this.router.navigate(['/purchase']); 
  }

 
  
  onSubmit(){
    
    console.log();
  }
}


