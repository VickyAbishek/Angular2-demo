import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { ProductListComponent } from './app/product/product-list.component.html';
import { AppComponent }  from './app.component';
import { FormsModule } from '@angular/forms'
import { ProductListComponent } from './product/product-list.component';
import { ProductFilterPipe } from './product/product-filter.pipe'
@NgModule({
  imports: [ BrowserModule,
  FormsModule
   ],
  declarations: [ 
    AppComponent,
    ProductListComponent,
    ProductFilterPipe ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
