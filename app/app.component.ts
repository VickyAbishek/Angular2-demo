import { Component } from '@angular/core';
import { ProductService } from './product/product.service';

@Component ({
    selector: 'pm-app',
//    providers: [ProductService],
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'> {{pageTitle}} </a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/welcome']">Home</a></li>
                    <li><a [routerLink]="['/products']">Product</a></li>
                </ul>
                <div class="container">
                <router-outlet></router-outlet>
                </div>
            </div>
        </nav>
    </div>
    ` 
})

export class AppComponent {
    pageTitle: string = ""; 
}