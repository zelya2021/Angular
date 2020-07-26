import { Component } from '@angular/core';
import { from } from 'rxjs';
import { Product } from '../app/models/product';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'webCrudProd';
  product: Product[]=[];

  constructor() {
    this.product.push(new Product(1,'Praga',350,'delicious','dessert'));
  }
}
