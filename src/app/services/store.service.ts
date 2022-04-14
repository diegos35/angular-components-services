import { Injectable } from '@angular/core';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShopingCart: Product [] = [];

  constructor() { }

  addProduct(product: Product){
    this.myShopingCart.push(product);
  }

  //metodo para exponer el shoppingCart
  getShoppingCart(){
    return this.myShopingCart;
  }

  getTotal(){
    return this.myShopingCart.reduce((sum ,item) => 
              sum + item.price , 0
            );
  }
}
