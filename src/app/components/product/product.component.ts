import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product!: Product;
  @Output() addProduct = new EventEmitter<Product>();
   
  constructor() { }

  ngOnInit(): void {
  }

  onAddCart(){
    this.addProduct.emit(this.product)
  }

}
