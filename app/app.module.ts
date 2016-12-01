import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { ProductListComponent } from './app/product/product-list.component.html';
import { AppComponent }  from './app.component';
import { FormsModule } from '@angular/forms'
import { ProductListComponent } from './product/product-list.component';

@NgModule({
  imports: [ BrowserModule,
  FormsModule
   ],
  declarations: [ 
    AppComponent,
    ProductListComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
