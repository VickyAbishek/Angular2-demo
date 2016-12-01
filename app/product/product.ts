export interface IProduct {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    price: number;
    description: string;
    starRating: number;
    imageUrl: string;
}

// Not required for this current application
/*
export class Product implements IProduct{
    constructor(
        public productId: number,
        public productName: string,
        public productCode: string,
        public releaseDate: string,
        public price: number,
        public description: string,
        public starRating: number,
        public imageUrl: string
    ){}
    calcDiscount(percent:number): number{
        return this.price - (this.price * percent / 100 );
    }
}
*/