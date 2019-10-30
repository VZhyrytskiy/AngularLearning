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
  sortOptions = [
    'amount', 'product.name', 'product.price'
  ];
  selectedValue = this.sortOptions[0];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.cart;
    this.getSum = this.cartService.getItemsSum;
    this.getCount = this.cartService.getItemsAmount;
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
