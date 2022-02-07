import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductsWithDiscountComponent } from './products-with-discount/products-with-discount.component';
import { ProductsWithoutDiscountComponent } from './products-without-discount/products-without-discount.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch:'full'},
  {path:'home' , component: HomeComponent},
  {path:'products' , component: ProductsComponent, 
   children:[
     {path:'productsWithDiscount', component:ProductsWithDiscountComponent},
     {path:'productsWithoutDiscount', component:ProductsWithoutDiscountComponent}
   ]},
  {path:'users' , component: UsersComponent},
  {path:'register' , component: RegisterComponent},
  {path:'login' , component: LoginComponent},
  {path:'posts' , component: PostsComponent},
  {path:'**' , component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
