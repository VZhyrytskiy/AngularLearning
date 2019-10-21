import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverDirective } from './directives/hover/hover.directive';
import { FontClickDirective } from './directives/fontClick/font-click.directive';
// маленькое улучшение
const dirs = [HoverDirective, FontClickDirective];

@NgModule({
  declarations: [...dirs],
  imports: [CommonModule],
  exports: [...dirs]
})
export class SharedModule {}
