import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  GetAllProducts(){
    return [
      {
        ID:1,
        Name:'T-shirt',
        Quantity:1,
        Price:123,
        Img:'bbb'
      },
      {
        ID:2,
        Name:'laptop',
        Quantity:1,
        Price:123,
        Img:'bbb'
      },
      {
        ID:3,
        Name:'watch',
        Quantity:1,
        Price:123,
        Img:'bbb'
      },
      {
        ID:4,
        Name:'Shoes',
        Quantity:1,
        Price:123,
        Img:'bbb'
      }
    ]
  }

  GetProductById(){
    return [
      {
        ID:1,
        Name:'T-shirt',
        Quantity:1,
        Price:123,
        Img:'bbb'
      },
      {
        ID:2,
        Name:'laptop',
        Quantity:1,
        Price:123,
        Img:'bbb'
      },
      {
        ID:3,
        Name:'watch',
        Quantity:1,
        Price:123,
        Img:'bbb'
      },
      {
        ID:4,
        Name:'Shoes',
        Quantity:1,
        Price:123,
        Img:'bbb'
      }
    ]
  }

  constructor() { }


}
