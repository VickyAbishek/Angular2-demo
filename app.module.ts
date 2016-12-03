import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ProductService } from './app/product/product.service'
import { AppComponent }  from './app.component';
import { StarComponent } from './app/shared/star.component';
import { ProductListComponent } from './app/product/product-list.component';
import { ProductFilterPipe } from './app/product/product-filter.pipe'

@NgModule({
  imports: [ BrowserModule,FormsModule, HttpModule ],
  declarations: [ AppComponent, ProductListComponent, ProductFilterPipe, StarComponent],
  bootstrap: [ AppComponent ] , 
  
})
export class AppModule { 
  constructor(_productService: ProductService){

  }
}
