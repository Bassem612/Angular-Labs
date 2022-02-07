import { Component, ViewChild } from '@angular/core';
import {ProductsComponent} from './products/products.component'

@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Day1-Lab';

 @ViewChild(ProductsComponent) child:any;
 
 ngOnInit(): void {

}

products:any
ngAfterViewInit(): void {
   this.products = this.child.allProducts;
}

DisplayData(){
  console.log(this.products); 
}

GetProductById = (id:number)=>{
  this.products.filter((product:any)=>{
       if(product.ID === id){
           return console.log(product);
       }
  }) 
}



}
