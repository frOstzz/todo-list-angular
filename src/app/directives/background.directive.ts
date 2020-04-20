import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBackground]',
})
export class BackgroundDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') mouseEnter() {
    const { nativeElement } = this.element;
    this.renderer.addClass(nativeElement, 'note-line');
  }

  @HostListener('mouseleave') mouseLeave() {
    const { nativeElement } = this.element;
    this.renderer.removeClass(nativeElement, 'note-line');
  }
}
