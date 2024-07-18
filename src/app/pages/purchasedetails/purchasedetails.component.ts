import { Component, OnInit } from '@angular/core';
import { PurchaseComponent } from '../purchase/purchase.component';
import { ActivatedRoute } from '@angular/router';
import { PurchaseService } from 'src/app/purchase.service';

@Component({
  selector: 'app-purchasedetails',
  templateUrl: './purchasedetails.component.html',
  styleUrls: ['./purchasedetails.component.css']
})
export class PurchasedetailsComponent implements OnInit {

  id!: number;
  purchase!: PurchaseComponent;
  
  constructor(private route: ActivatedRoute, private purchaseService: PurchaseService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.purchase = new PurchaseComponent();
    this.purchaseService.getPurchaseById(this.id).subscribe( data => {
      this.purchase = data;
    });
  }
}


