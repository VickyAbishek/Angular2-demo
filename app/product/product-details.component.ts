import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
@Component ({
      //selector: 'pd',
      // selector is necessary only for nested components
      moduleId: module.id,
      templateUrl: './product-details.component.html'
})

export class ProductDetails {
    imageWidth: number = 50;
    margin: number = 2;
    pageTitle: string = 'Product Detail';
    products: IProduct[];  
    errorMessage: string;
    id: number;
    constructor( private _route:ActivatedRoute,
    private _router: Router,
    private _productService: ProductService,
    ){   }

    ngOnInit(): void{
        this.id = +this._route.snapshot.params['id'];
        this.pageTitle += ' : ' + this.id;
        console.log(":::::" + this.pageTitle);
        this._productService.getProducts()
            .subscribe(
                products => this.products = products,
                error => this.errorMessage = <any>error);
        //console.log("Inside onInit pro-det" + this.id);
    }

    onBack(): void {
        //console.log("Inside onBack()");
        this._router.navigate(['/products']);
    }

    getList( pro: IProduct): boolean{
        if ( pro.productId == this.id )    
            return true;
        return false;
    }
}