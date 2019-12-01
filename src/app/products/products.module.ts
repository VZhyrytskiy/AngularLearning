import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductReviewsComponent } from './components/product-reviews/product-reviews.component';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsServicesModule } from './products.services.module';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductReviewsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductsServicesModule,
    ProductsRoutingModule
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductsModule { }
