import { CartService } from './../../../cart/services/cart.service';
import { ProductComponent } from './../product/product.component';
import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  cars: Promise<ProductModel[]>;
  constructor(private productService: ProductsService, private cartService: CartService) { }

  ngOnInit() {
    this.cars = this.productService.getProducts();
  }

  onAddedToCart(product: ProductModel): void {
    this.cartService.addToCart(product);
  }
}
