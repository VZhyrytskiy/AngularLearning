import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverDirective } from './directives/hover/hover.directive';
import { FontClickDirective } from './directives/fontClick/font-click.directive';
import { OrderByPipe } from './pipes/order-by.pipe';

const items = [
  // directives
  HoverDirective,
  FontClickDirective,
  // pipes
  OrderByPipe
];

@NgModule({
  declarations: [...items],
  imports: [CommonModule],
  exports: [...items]
})
export class SharedModule {}
