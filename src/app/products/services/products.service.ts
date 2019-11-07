import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { Category } from '../../shared/enums/category';

import { ProductsServicesModule } from '../products.services.module';

@Injectable({
  providedIn: ProductsServicesModule,
})

export class ProductsService {
  constructor() { }

  private cars: ProductModel[] = [
    {
      id: 1,
      name: 'Audi TT',
      description: 'Nice sport car',
      price: 30,
      category: Category.Audi,
      isAvailable: true
    },
    {
      id: 2,
      name: 'BMW X5',
      description: 'Serious car for serious man',
      price: 40,
      category: Category.BMW,
      isAvailable: false
    },
    {
      id: 3,
      name: 'Volkswagen Passat',
      description: 'Most useful car ever',
      price: 25,
      category: Category.Volkswagen,
      isAvailable: true
    },
  ];

  getProducts(): Promise<ProductModel[]> {
    return Promise.resolve(this.cars);
  }

  getCarById(id: number): Promise<ProductModel> {
    return this.getProducts().then((cars) => {
      return cars.find(car => car.id === id);
    });
  }

  addCar(car: ProductModel): Promise<void> {
    return this.getProducts().then((cars) => {
      car.id = cars[cars.length - 1].id++;
      cars.push(car);
    });
  }

  updateCar(update: ProductModel): Promise<void> {
    const i = this.cars.findIndex(car => car.id === update.id);
    if (i > -1) {
      this.cars.splice(i, 1, update);
    }
    return Promise.resolve();
  }
}
