import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductService } from './product/product.service';
import { AppComponent }  from './app.component';
import { FormsModule } from '@angular/forms'
import { ProductListComponent } from './product/product-list.component';
import { ProductFilterPipe } from './product/product-filter.pipe'
import { StarComponent } from './shared/star.component';
import { HttpModule } from '@angular/http';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetails } from './product/product-details.component';
import { RouterModule } from '@angular/router';
import { ProductGuardService } from './product/product-guard.service';

@NgModule({
  imports:       [ BrowserModule,FormsModule, HttpModule, 
  RouterModule.forRoot([
    {path: 'products', component: ProductListComponent },
    {path: 'product/:id', canActivate: [ ProductGuardService],component: ProductDetails },
    {path: 'welcome', component: WelcomeComponent },
    {path: '', redirectTo: 'welcome', pathMatch: 'full'},
    {path:'**', redirectTo:'welcome', pathMatch:'full'}
  ])// set base href = "/" in index.html
  ],
  providers: [ProductService, ProductGuardService],
  declarations:  [ AppComponent,ProductListComponent,ProductFilterPipe,StarComponent, WelcomeComponent , ProductDetails ],
  bootstrap:     [ AppComponent ]
})

export class AppModule { 
  constructor(_productService: ProductService){

  }
  
}
