import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product.model';

//import { Product } from "../";
import { StoreService } from '../../services/store.service';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  /* Patern Singleton: instacia de servicio, no crea varias 
instancias solo guarda en memoria la instacia que fue creada y devuelve la referencia */

  total = 0;
  myShoppingCart: Product[] = [];
  products: Product[] = [];
  today = new Date();
  date = new Date(2021, 1, 21) //https://angular.io/api/common/DatePipe

  constructor(
    private storeService: StoreService, //inyección de dependencias
    private productsService: ProductsService //asincrono,
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart(); //porque esto no es asincrono
  }

  ngOnInit(): void {
    this.productsService.getAllProducrs().subscribe((data) => {
      this.products = data;
    });
    //ó tambien
    /* .subscribe({
      next:(products) => {
        console.log(products)
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
      }
    }); */
  }

  onAddToShopingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }
}
