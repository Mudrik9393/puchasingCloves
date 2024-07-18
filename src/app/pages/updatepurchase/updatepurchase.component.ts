import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseService } from 'src/app/purchase.service';
import { PurchaseComponent } from '../purchase/purchase.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-updatepurchase',
  templateUrl: './updatepurchase.component.html',
  styleUrls: ['./updatepurchase.component.css']
})
export class UpdatepurchaseComponent implements OnInit {

  id!: number;
 // purchase  = new PurchaseComponent();
 formGroup!: FormGroup;
  
  constructor(private purchaseService: PurchaseService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    if(this.id){
      this.getPurchaseById(this.id);
    }
    this.formConfiguration();
  }

  getPurchaseById(id:any){
    this.purchaseService.getPurchaseById(id).subscribe((res:any) =>{
      Object.keys(res).forEach(key => {
        if(this.formGroup.value.hasOwnProperty(key)){
          this.formGroup.get(key)?.setValue(res[key]);
        }
      })
    })
  }

  formConfiguration(){
    this.formGroup = new FormGroup({
      address: new FormControl('',Validators.required),
      quantity: new FormControl('', Validators.required),
      grade:new FormControl('',Validators.required),
      fullName: new FormControl('',Validators.required),
      totalamount:new FormControl('',Validators.required)
    })

  }

  onSubmit(){
    const data = this.formGroup.value;
    this.purchaseService.updatePurchase(this.id, data).subscribe( ()=>{
      this.router.navigateByUrl('/purchase');
    })
    
  }

  goToPurchaseList(){
    this.router.navigate(['/purchase']);
  }
}


