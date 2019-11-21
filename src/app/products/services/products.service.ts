import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ProductModel } from '../models/product.model';
import { ProductsServicesModule } from '../products.services.module';

@Injectable({
  providedIn: ProductsServicesModule,
})

export class ProductsService {

  private carsUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getProducts(): Promise<ProductModel[]> {
    return this.http
      .get(this.carsUrl)
      .toPromise()
      .then(response => response as ProductModel[]);
  }

  getCarById(id: number): Promise<ProductModel> {
    const url = `${this.carsUrl}/${id}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as ProductModel);
  }

  addCar(car: ProductModel): Promise<ProductModel> {
    const url = this.carsUrl;
    const body = JSON.stringify(car);
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http
      .post(url, body, options)
      .toPromise()
      .then(response => response as ProductModel);
  }

  updateCar(update: ProductModel): Promise<ProductModel> {
    const url = `${this.carsUrl}/${update.id}`;
    const body = JSON.stringify(update);
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http
      .put(url, body, options)
      .toPromise()
      .then(response => response as ProductModel);
  }
}
