import { Component , OnInit} from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    moduleId: module.id,
    templateUrl:
    'product-list.component.html' ,
    styleUrls:
    ['product-list.component.css']
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
    products: IProduct[] ;


    //  private _productService;
        constructor(private _productservice: ProductService)
        {
    //        _productService = productservice;
        }
        toggleImage(): void {
            this.showImage = !this.showImage;
            if ( this.showImage )
                this.visible = "Hide";
            else
                this.visible = "Show";
        }
        ngOnInit(): void{
        console.log( "in On Init dsfknah");
        this.products = this._productservice.getProducts();
    }
        onRatingClick(message: string): void{
            this.pageTitle = "Product" + message;
        }
}