import { Injectable } from '@angular/core';
import { ProductModel } from '../../products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: ProductModel[] = [];

  constructor() { }

  get cart() {
    return this.cartItems;
  }

  addToCart(item: ProductModel): void {
    this.cartItems.push(item);
  }

  removeFromCart(item: ProductModel): void {
    const ind = this.cartItems.indexOf(item);
    if (ind > -1) {
      this.cartItems.splice(ind, 1);
    }
  }

  getCount() {
    return this.cartItems.length;
  }

  getSum() {
    let sum = 0;
    this.cartItems.every(x => sum += x.price);
    return sum;
  }

}
