import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { Category } from '../../shared/enums/category';

@Injectable({
  providedIn: 'root',
})

export class ProductsService {
  constructor() { }

  getProducts(): ProductModel[] {

    const Cars: ProductModel[] = [
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

    return Cars;
  }
}
