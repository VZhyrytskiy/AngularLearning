import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverDirective } from './directives/hover/hover.directive';
import { FontClickDirective } from './directives/fontClick/font-click.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { EmailValidatorDirective } from './directives/email-validator/email-validator.directive';

const items = [
  // directives
  HoverDirective,
  FontClickDirective,
  EmailValidatorDirective,
  // pipes
  OrderByPipe
];

@NgModule({
  declarations: [...items],
  imports: [CommonModule],
  exports: [...items]
})
export class SharedModule {}
