import { Category } from '../../shared/enums/category';

export interface Product {
  id?: number;
  name?: string;
  description?: string;
  price?: number;
  category?: Category;
  isAvailable?: boolean;
}

export class ProductModel implements Product {

  constructor(
    public id: number = null,
    public name: string = '',
    public description: string = '',
    public price: number = 0,
    public category: Category.Audi,
    public isAvailable: boolean
  ) {
    this.isAvailable = isAvailable || true;
  }
}
