import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersServicesModule } from './orders-services.module';
import { SharedModule } from '../shared/shared.module';
import { OrderComponent } from './components';


@NgModule({
  declarations: [OrdersRoutingModule.components],
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
