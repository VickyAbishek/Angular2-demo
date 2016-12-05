import { Component } from '@angular/core';
import { IProduct } from './product';
@Component ({
      //selector: 'pd',
      // selector is required only for nested components
      moduleId: module.id,
      templateUrl: './product-details.component.html'
})

export class ProductDetails {
    pageTitle: string = 'Product Detail';
    product: IProduct;  
}