import { OrderedProductModel } from './ordered-product.model';
import { Status } from '../../shared/enums/status';

export class OrderModel {
  public orderId: number;
  public status: Status;
  public totalPrice: number;
  public products: OrderedProductModel[];
}
