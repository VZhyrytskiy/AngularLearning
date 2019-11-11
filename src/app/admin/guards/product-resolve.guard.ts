import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ProductsService } from '../../products/services';
import { ProductModel } from '../../products/models/product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductResolveGuard implements Resolve<ProductModel> {
  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot): Promise<ProductModel> | null {

    if (!route.paramMap.has('id')) {
      return Promise.resolve(new ProductModel());
    }

    const id = +route.paramMap.get('id');

    return this.productsService.getCarById(id).then(product => {
      if (product) {
        return product;
      } else {
        this.router.navigate(['/admin/products']);
        return null;
      }
    });
  }
}

