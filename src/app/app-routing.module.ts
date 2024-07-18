import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { PurchaselistComponent } from './pages/purchaselist/purchaselist.component';
import { CreatepurchaseComponent } from './pages/createpurchase/createpurchase.component';
import { UpdatepurchaseComponent } from './pages/updatepurchase/updatepurchase.component';
import { PurchasedetailsComponent } from './pages/purchasedetails/purchasedetails.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  {
    path:'',
    component:MainLayoutComponent,
    children:[  
 {path: '', component:HomeComponent},
  {path: 'purchase', component: PurchaselistComponent},
  {path: 'createpurchase', component: CreatepurchaseComponent},

  {path: 'updatepurchase/:id', component: UpdatepurchaseComponent},
  {path: 'purchasedetails/:id', component: PurchasedetailsComponent},
  {path:'login', component:LoginComponent}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
