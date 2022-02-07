import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductsWithoutDiscountComponent } from './products-without-discount/products-without-discount.component';
import { ProductsWithDiscountComponent } from './products-with-discount/products-with-discount.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    HomeComponent,
    UsersComponent,
    PostsComponent,
    PagenotfoundComponent,
    ProductsWithoutDiscountComponent,
    ProductsWithDiscountComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
