"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var product_service_1 = require('./product/product.service');
var app_component_1 = require('./app.component');
var forms_1 = require('@angular/forms');
var product_list_component_1 = require('./product/product-list.component');
var product_filter_pipe_1 = require('./product/product-filter.pipe');
var star_component_1 = require('./shared/star.component');
var http_1 = require('@angular/http');
var welcome_component_1 = require('./home/welcome.component');
var product_details_component_1 = require('./product/product-details.component');
var router_1 = require('@angular/router');
var AppModule = (function () {
    function AppModule(_productService) {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule,
                router_1.RouterModule.forRoot([
                    { path: 'products', component: product_list_component_1.ProductListComponent },
                    { path: 'product/:id', component: product_details_component_1.ProductDetails },
                    { path: 'welcome', component: welcome_component_1.WelcomeComponent },
                    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
                ]) // set base href = "/" in index.html
            ],
            providers: [product_service_1.ProductService],
            declarations: [app_component_1.AppComponent, product_list_component_1.ProductListComponent, product_filter_pipe_1.ProductFilterPipe, star_component_1.StarComponent, welcome_component_1.WelcomeComponent, product_details_component_1.ProductDetails],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map