import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';


import { FormsModule } from '@angular/forms';
import { ImgComponent } from './components/img/img.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { NavComponent } from './components/nav/nav.component'; //para utilizar el [(ngMOdel)]
@NgModule({
  declarations: [
    AppComponent,
    PropertyBindingComponent,
    ImgComponent,
    ProductComponent,
    ProductsComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //importarlo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
