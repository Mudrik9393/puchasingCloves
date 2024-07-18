import { Component, OnInit } from '@angular/core';
import { PurchaseService } from 'src/app/purchase.service';
import { Router } from '@angular/router';
import { PurchaseComponent } from '../purchase/purchase.component';
@Component({
  selector: 'app-purchaselist',
  templateUrl: './purchaselist.component.html',
  styleUrls: ['./purchaselist.component.css']
})
export class PurchaselistComponent implements OnInit {

  //purchase!: PurchaseComponent[];
  purchaseList:any;

  constructor(private purchaseService: PurchaseService,
    private router: Router) { }

  ngOnInit(): void {
    this.getPurchase();
  }

  getPurchase(){
    this.purchaseService.getPurchasesList().subscribe((resp:any)=>{
      this.purchaseList = resp;
      console.log(resp);
    });
  }

  purchaseDetails(id: number){
    this.router.navigate(['purchase-details', id]);
  }


  updatePurchase(id: number){
    this.router.navigate(['update-purchase', id]);
  }

  deletePurchase(id: number){
    this.purchaseService.deletePurchase(id).subscribe( data => {
      console.log(data);
      this.getPurchase();
    })
  }
}


