import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product.model';

//import { Product } from "../";
import { StoreService} from '../../services/store.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

/* Patern Singleton: instacia de servicio, no crea varias 
instancias solo guarda en memoria la instacia que fue creada y devuelve la referencia */
  
  total = 0 ;
  myShoppingCart: Product[] = [];

  products:Product[] = [
    { 
      id: '1',
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      id: '3',
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      id: '4',
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      id: '5',
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      id: '6',
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ];

  constructor(
    private storeService: StoreService //inyección de dependencias
  ) 
  {
    this.myShoppingCart = this.storeService.getShoppingCart(); //porque esto no es async
  }

  ngOnInit(): void {
  }

  onAddToShopingCart(product: Product){
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }
}
