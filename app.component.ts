import { Component } from '@angular/core';
//import { ProductListComponent } from './app/product/product-list.component'; --> not necessary
import { ProductService } from './app/product/product.service'
@Component ({
    selector: 'pm-app',
    template: `
    <h1> {{pageTitle}} <h1>
     <pm-products>sdaf</pm-products>
    ` ,
    providers: [ProductService]
    // add multiple services by comma
})
export class AppComponent {
    pageTitle: string = "";//from Component 1 ";
    /*
    constructor ( _productService: ProductService ){

    }*/
}