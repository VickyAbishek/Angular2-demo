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
var product_service_1 = require('./product.service');
var router_1 = require('@angular/router');
var ProductDetails = (function () {
    function ProductDetails(_route, _router, _productService) {
        this._route = _route;
        this._router = _router;
        this._productService = _productService;
        this.imageWidth = 50;
        this.margin = 2;
        this.pageTitle = 'Product Detail';
    }
    ProductDetails.prototype.ngOnInit = function () {
        var _this = this;
        this.id = +this._route.snapshot.params['id'];
        this.pageTitle += ' : ' + this.id;
        console.log(":::::" + this.pageTitle);
        this._productService.getProducts()
            .subscribe(function (products) { return _this.products = products; }, function (error) { return _this.errorMessage = error; });
        console.log("Inside onInit pro-det" + this.id);
    };
    ProductDetails.prototype.onBack = function () {
        console.log("Inside onBack()");
        this._router.navigate(['/products']);
    };
    ProductDetails.prototype.getList = function (pro) {
        if (pro.productId == this.id)
            return true;
        return false;
    };
    ProductDetails = __decorate([
        core_1.Component({
            //selector: 'pd',
            // selector is required only for nested components
            moduleId: module.id,
            templateUrl: './product-details.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, product_service_1.ProductService])
    ], ProductDetails);
    return ProductDetails;
}());
exports.ProductDetails = ProductDetails;
//# sourceMappingURL=product-details.component.js.map