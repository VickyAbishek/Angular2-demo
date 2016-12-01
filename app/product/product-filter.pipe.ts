import { PipeTransform } from '@angular/core'
import { IProduct } from './product'
<<<<<<< HEAD
import { Pipe } from '@angular/core'
=======
>>>>>>> de82830ed2fbb022d6dc840f11cdde83b157345c

@Pipe({
    name: 'productFilter'
})

export class ProductFilterPipe implements PipeTransform
{
    transform(value:IProduct[],
    filterBy:string): IProduct[]
    {
        filterBy = filterBy ? filterBy.toLowerCase() : null;
        return filterBy  ?  value.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) != -1 ): value;
    }
}