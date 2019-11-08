import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { OrderModel } from '../../models/order.model';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DialogService } from '../../../core/services/dialog.service';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {

  currentOrder: OrderModel;

  constructor(
    private ordersService: OrdersService,
    private router: Router,
    private dialogService: DialogService) { }

  ngOnInit() {
    this.currentOrder = this.ordersService.getCurrentOrder();
  }

  onCreateOrderClicked(): void {
    this.ordersService.startProcessing(this.currentOrder);
    const link = ['/orders'];
    this.router.navigate(link);
  }

}
