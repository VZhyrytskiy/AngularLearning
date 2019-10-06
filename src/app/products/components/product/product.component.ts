import { Component, OnInit } from '@angular/core';
import { Category } from '../../../common/enums/category';

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

  constructor() { }

  ngOnInit() {
    this.name = 'Name';
    this.description = 'Description';
    this.price = 123;
    this.category = Category.Volkswagen;
    this.isAvailable = true;
  }

  onBuy() {
    console.log('product was ordered.');
  }

}
