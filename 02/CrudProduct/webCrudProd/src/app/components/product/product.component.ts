import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent{
  @Input() product: Product;
  @Output() addProductEvent = new EventEmitter<Product>();
  //tasks = [];
 
  onClickAddProduct(){
    this.addProductEvent.emit(this.product);
    //this.tasks.push({name: this.product});
    //this.task = '';
  }
}
