import { CartService } from './../../../cart/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  cars: Promise<ProductModel[]>;
  constructor(private productService: ProductsService, private cartService: CartService, private router: Router) { }

  ngOnInit() {
    this.cars = this.productService.getProducts();
  }

  onAddedToCart(product: ProductModel): void {
    this.cartService.addToCart(product);
  }

  onDetailsClicked(product: ProductModel): void {
    const link = ['/products-list', product.id];
    this.router.navigate(link);
  }
}
