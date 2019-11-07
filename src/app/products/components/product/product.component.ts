import { ProductModel } from './../../models/product.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../../../shared/enums/category';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  Category = Category;

  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;

  @Input() product: ProductModel;
  @Output() addToCart: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();
  @Output() details: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  constructor() { }

  ngOnInit() { }

  onAddedToCart(): void {
    this.addToCart.emit(this.product);
  }

  onDetailsClicked(): void {
    this.details.emit(this.product);
  }

}
