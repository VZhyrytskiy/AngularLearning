import { Directive, Input, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFontClick]'
})
export class FontClickDirective {

  @Input() size: string;

  constructor(private el: ElementRef, private render: Renderer2) { }

  @HostListener('click') onMouseEnter() {
    this.setFontSize(this.size || '15');
  }

  private setFontSize(size: string) {
    this.render.setStyle(this.el.nativeElement, 'font-size', `${size}px`);
  }

}
