import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  cars: ProductModel[];
  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.cars = this.productService.getCars();
  }
}
