
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CreatepurchaseComponent } from './pages/createpurchase/createpurchase.component';
import { UpdatepurchaseComponent } from './pages/updatepurchase/updatepurchase.component';
import { PurchasedetailsComponent } from './pages/purchasedetails/purchasedetails.component';
import { PurchaselistComponent } from './pages/purchaselist/purchaselist.component';
import { PurchaseComponent } from './pages/purchase/purchase.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    CreatepurchaseComponent,
    UpdatepurchaseComponent,
    PurchasedetailsComponent,
    PurchaselistComponent,
    PurchaseComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
     MatCardModule,
     FormsModule,
     HttpClientModule,
     ReactiveFormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
