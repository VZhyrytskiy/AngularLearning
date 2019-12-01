import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCartItemHover]'
})
export class HoverDirective {

  constructor() { }

  @HostBinding('class') className = '';
  @HostListener('mouseenter', ['$event']) onMouseEnter() {
    this.className =  'hovered';
  }
  @HostListener('mouseleave', ['$event']) onMouseLeave() {
    this.className = '';
  }
}
