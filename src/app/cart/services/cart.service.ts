import { Injectable } from '@angular/core';
import { ProductModel } from '../../products/models/product.model';
import { CartItemModel } from '../models/cartItem.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: CartItemModel[] = [];
  private cartItemId = 0;

  constructor() { }

  get cart() {
    return this.cartItems;
  }

  addToCart(item: ProductModel): void {
    const existingItem = this.getItemByProduct(item);
    if (existingItem) {
      existingItem.amount++;
    } else {
      this.cartItemId++;
      this.cartItems.push(
        {
          cartItemId: this.cartItemId,
          product: item,
          amount: 1
        });
    }
  }

  removeFromCart(item: CartItemModel): void {
    const ind = this.cartItems.indexOf(item);
    if (ind > -1) {
      if (item.amount > 1) {
        item.amount--;
      } else {
        this.cartItems.splice(ind, 1);
      }
    }
  }

  getItemsAmount() {
    let count = 0;
    this.cartItems.every(
      x => count += x.amount);
    return count;
  }

  getItemsSum() {
    let sum = 0;
    this.cartItems.every(
      x => sum += (x.amount * x.product.price));
    return sum;
  }

  increaseAmount(item: CartItemModel): void {
    item.amount++;
  }

  decreaseAmount(item: CartItemModel): void {
    if (item.amount === 1) {
      this.removeFromCart(item);
    } else {
      item.amount--;
    }
  }

  getItemByProduct(item: ProductModel): CartItemModel {
    let result: CartItemModel = null;

    for (const cartItem of this.cartItems) {
      if (cartItem.product.id === item.id) {
        result = cartItem;
        break;
      }
    }
    return result;
  }

  clearCart(): void {
    this.cartItems = [];
  }

}
