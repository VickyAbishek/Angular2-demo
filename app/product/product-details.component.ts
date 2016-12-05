import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
@Component ({
      //selector: 'pd',
      // selector is required only for nested components
      moduleId: module.id,
      templateUrl: './product-details.component.html'
})

export class ProductDetails {
    pageTitle: string = 'Product Detail';
    product: IProduct;  

    constructor( private _route:ActivatedRoute,
    private _router: Router
    ){   }

    ngOnInit(): void{
        let id = +this._route.snapshot.params['id'];
        this.pageTitle += ' : ' + id;
        console.log(":::::" + this.pageTitle);
    }

    onBack(): void {
        console.log("Inside onBack()");
        this._router.navigate(['/products']);
    }
}