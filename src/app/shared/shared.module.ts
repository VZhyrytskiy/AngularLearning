import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverDirective } from './directives/hover/hover.directive';
import { FontClickDirective } from './directives/fontClick/font-click.directive';

@NgModule({
  declarations: [HoverDirective, FontClickDirective],
  imports: [
    CommonModule
  ],
  exports: [HoverDirective, FontClickDirective]
})
export class SharedModule { }
