import { Component , OnInit} from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    moduleId: module.id,
    templateUrl:
    'product-list.component.html' ,
    styleUrls:
    ['product-list.component.css'],
    providers: [ProductService]
})

export class ProductListComponent implements OnInit
{
    pageTitle: string = 'Product List';
    //products: any = require('api/products/products.json');'
    imageWidth: number = 50;
    visible: string = "Show";
    listFilter: string ;//= "Cart";
    margin: number = 2;
    showImage: boolean = false;
    products: IProduct[] = [];
    errorMessage: string;
    toggleImage(): void 
    {
            this.showImage = !this.showImage;
            if ( this.showImage )
                this.visible = "Hide";
            else
                this.visible = "Show";
    }
    
    constructor( private _productService: ProductService){  }

    ngOnInit(): void
    {
        //this.products = this._productService.getProducts();
        this._productService.getProducts()
            .subscribe(
                products => this.products = products,
                error => this.errorMessage = <any>error);
    }

    onNotify(message: string): void
    {
            this.pageTitle = "Product:" + message;
    }

        
}