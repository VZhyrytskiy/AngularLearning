import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { ProductModel } from '../../products/models/product.model';
import { CartItemModel } from '../models/cartItem.model';
import { CartServicesModule } from '../cart-services.module';

@Injectable({
  providedIn: CartServicesModule
})
export class CartService {

  private cartItems: CartItemModel[] = [];
  private id = 0;

  private cartUrl = 'http://localhost:3000/cartitems';

  constructor(private http: HttpClient) {}

  getCart(): Observable<CartItemModel[]> {
    return this.http.get<CartItemModel[]>(this.cartUrl);
  }

  addToCart(item: ProductModel): void {
    this.getItemByProduct(item)
      .subscribe(existingItem => {
          if (existingItem) {
            existingItem.amount++;
            this.updateCartItem(existingItem)
              .subscribe();
            } else {
              this.createCartItem({
                product: item,
                amount: 1
              }).subscribe();
            }
        }
      );
  }

  createCartItem(item: CartItemModel): Observable<CartItemModel> {
    const body = JSON.stringify(item);
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http
      .post<CartItemModel>(this.cartUrl, body, options);
  }

  removeFromCart(item: CartItemModel): Observable<CartItemModel[]> {
    const url = `${this.cartUrl}/${item.id}`;
    return this.http.delete(url).pipe(
      switchMap(() => this.getCart())
    );
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

  increaseAmount(item: CartItemModel): Observable<CartItemModel[]> {
    item.amount++;
    return this.updateCartItem(item).pipe(
      switchMap(() => this.getCart())
    );
  }

  decreaseAmount(item: CartItemModel): Observable<CartItemModel[]> {
    if (item.amount === 1) {
      return this.removeFromCart(item);
    } else {
      item.amount--;
      return this.updateCartItem(item).pipe(
        switchMap(() => this.getCart())
      );
    }
  }

  getItemByProduct(item: ProductModel): Observable<CartItemModel> {
    return this.getCart().pipe(
      map((cartItems: CartItemModel[]) => {
        return cartItems.find((cartItem: CartItemModel) => cartItem.product.id === item.id);
      })
    );
  }

  clearCart(): void {
    this.cartItems = [];
  }

  updateCartItem(item: CartItemModel): Observable<CartItemModel> {
    const url = `${this.cartUrl}/${item.id}`;
    const body = JSON.stringify(item);
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http
      .put<CartItemModel>(url, body, options);
  }

}
