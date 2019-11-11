import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from '../../../products/models/product.model';
import { ProductsService } from '../../../products/services';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {

  cars: Promise<ProductModel[]>;

  constructor(private productService: ProductsService, private router: Router) {}

  ngOnInit() {
    this.cars = this.productService.getProducts();
  }
  onAddClicked() {
    const link = ['admin/product/add'];
    this.router.navigate(link);
  }

  onEditClicked(product: ProductModel): void {
    const link = ['admin/product/edit', product.id];
    this.router.navigate(link);
  }
}
