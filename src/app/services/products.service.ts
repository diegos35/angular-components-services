import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from '../product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProducrs(): Observable<Product[]>{
                      //<Product[]>tipamos la respuesta array de tipo Product
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }

}
