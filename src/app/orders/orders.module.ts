import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersServicesModule } from './orders-services.module';
import { SharedModule } from '../shared/shared.module';
import { OrderComponent } from './components';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { NewOrderComponent } from './components/new-order/new-order.component';


@NgModule({
  declarations: [OrdersRoutingModule.components, OrdersListComponent, OrderComponent, NewOrderComponent],
  imports: [
    CommonModule,
    SharedModule,
    OrdersRoutingModule,
    OrdersServicesModule
  ],
  exports: [
    OrderComponent
  ]
})
export class OrdersModule { }
