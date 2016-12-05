import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router'
import { CanActivate } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
@Injectable()
export class ProductGuardService implements CanActivate{

    constructor(private _route: ActivatedRoute,
    private _router: Router,
    ){}

    canActivate(route: ActivatedRouteSnapshot):boolean{
        let id = +route.url[1].path;
        if ( isNaN(id) || id<1 )
        {
           console.log("Inside Guard Service");
            alert("Invalid Product ID");
            this._router.navigate(['/products']);
            return false;
        }
        return true;
    }
}