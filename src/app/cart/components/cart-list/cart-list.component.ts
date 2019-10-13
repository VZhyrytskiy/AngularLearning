import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ProductModel } from '../../../products/models/product.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  cartItems: ProductModel[];
  getCount: () => any;
  getSum: () => any;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.cart;
    this.getCount = this.cartService.getCount;
    this.getSum = this.cartService.getSum;
  }

  onRemoveClicked(item: ProductModel): void {
    this.cartService.removeFromCart(item);
  }
}
