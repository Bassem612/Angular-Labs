export interface IProduct{
    ID:number,
    Name:string,
    Quantity:number,
    Price:number,
    Img:string
}

export interface ICategory{
    ID:number,
    Name:string
} 

export enum DiscountOffers {
   "NoDiscount" = "No Discount",
    "10%" = 0.10,
    "15%" = 0.15,
}


