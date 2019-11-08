import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CartItemModel } from '../../models/cartItem.model';
import { OrdersService } from '../../../orders/services/orders.service';

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

  constructor(private cartService: CartService, private router: Router, private ordersService: OrdersService) { }

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

  onOrderClicked(): void {
    this.ordersService.create(this.cartItems);
    this.cartService.clearCart();
    const link = ['/orders/new'];
    this.router.navigate(link);
  }
}
