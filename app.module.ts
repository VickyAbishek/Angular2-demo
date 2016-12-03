import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
//import { ProductListComponent } from './app/product/product-list.component.html';
import { ProductService } from './app/product/product.service'
import { AppComponent }  from './app.component';

import { ProductListComponent } from './app/product/product-list.component';
import { ProductFilterPipe } from './app/product/product-filter.pipe'

@NgModule({
  imports: [ BrowserModule,FormsModule ],
  declarations: [ AppComponent, ProductListComponent, ProductFilterPipe,],
  // ProductService ],
  bootstrap: [ AppComponent ] , 
  
})
export class AppModule { 
  constructor(_productService: ProductService){

  }
}
