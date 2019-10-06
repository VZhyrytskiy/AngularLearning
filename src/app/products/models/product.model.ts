import { Category } from '../../common/enums/category';

export class ProductModel {
  id: number;
  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;
}
