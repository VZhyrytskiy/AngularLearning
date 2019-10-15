import { CartItemComponent } from './../cart-item/cart-item.component';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItemModel } from '../../models/cartItem.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  cartItems: CartItemModel[] = [];
  getSum: () => any;
  getCount: () => any;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.cart;
    this.getSum = this.cartService.getSum;
    this.getCount = this.cartService.getCount;
  }

  onRemoveClicked(item: CartItemModel): void {
    this.cartService.removeFromCart(item);
  }

  onIncreaseClicked(item: CartItemModel): void {
    this.cartService.increaseAmount(item);
  }

  onDecreaseClicked(item: CartItemModel): void {
    this.cartService.decreaseAmount(item);
  }
}
