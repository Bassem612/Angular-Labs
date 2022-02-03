import { Component, OnInit } from '@angular/core';
import { IProduct, ICategory, DiscountOffers } from '../Shared Classes and types/interface';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  

  Discount:DiscountOffers
  storeName:string
  storeLogo:string
  ProductList:IProduct[]
  ICategory:ICategory[]
  ClientName:string
  IsPurshased:boolean

  constructor() { 
    this.ClientName = "Bassem",
    this.IsPurshased = true,
    this.storeName = "Zara",
    this.storeLogo = "https://logosmarcas.net/wp-content/uploads/2020/05/Zara-Logo-650x366.png",
    this.Discount = DiscountOffers['15%'],
    this.ProductList = [
    {
      ID:12,
      Name:'food',
      Quantity:1,
      Price:123,
      Img:'bbb'
  }
  ], 
  this.ICategory = [
    {
      ID : 555, 
      Name : "Cat" 
    }
  ]

  }


  ngOnInit(): void {
  }

}
