import { Component, OnInit } from '@angular/core';
import { IProduct, ICategory, DiscountOffers } from '../Shared Classes and types/interface';
import {ProductService} from '../services/product.service'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  ngOnInit(): void {
  }

  Discount:DiscountOffers
  storeName:string
  storeLogo:string
  ProductList:IProduct[]
  ICategory:ICategory[]
  ClientName:string
  IsPurchased:boolean = false;

  
  purchasing(){
    console.log("clicked");
    this.IsPurchased = true
  }
  

 renderValues(){
    return this.ProductService.GetAllProducts()
 } 

 allProducts:any = this.renderValues();

//  productById:any
//  ngAfterViewInit(): void {
//   this.productById = this.renderValues();  // console.log(  this.ProductService.GetProductById());
// }




  
  constructor(private ProductService:ProductService) { 

    this.ClientName = "Bassem",
    this.storeName = "Amazon",
    this.storeLogo = "https://logoeps.com/wp-content/uploads/2014/08/39237-amazon-logo-icon-vector-icon-vector-eps.png",
    this.Discount = DiscountOffers['15%'],   

    this.ProductList = [
  {
    ID:1,
    Name:'mobail',
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
  ], 
  this.ICategory = [
    {
      ID : 555, 
      Name : "Cat1" 
    },
    {
      ID : 666, 
      Name : "Cat2" 
    },
    {
      ID : 777, 
      Name : "Cat3" 
    },
    {
      ID : 888, 
      Name : "Cat4" 
    }
  ]
  }




}
