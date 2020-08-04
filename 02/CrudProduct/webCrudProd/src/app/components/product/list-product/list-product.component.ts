import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {
  products: Product[]=[];
  constructor() { }

  addProduct(product: Product) {
    this.products.push({product});
    this.products.push(new Product(1, 'Vasya',20, 'Pupkin', '20'));
  }

}
