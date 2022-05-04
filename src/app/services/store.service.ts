import { Injectable } from '@angular/core';
import { Product } from '../product.model';
import { BehaviorSubject } from 'rxjs'; //state Management Store. crea Observable para que otros componentes se puedan suscribir apenas tenga un cambio
@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShopingCart: Product [] = []; //List current shopping

  /* Estado compartido */
  private myCart = new BehaviorSubject<Product[]>([]);//array de produts state initial vacio ([])
  //Observable
  myCart$ = this.myCart.asObservable();//listening changes

  constructor() { }

  addProduct(product: Product){
    this.myShopingCart.push(product);
    this.myCart.next(this.myShopingCart); 
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
