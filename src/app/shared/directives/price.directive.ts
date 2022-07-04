import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[testInterviewPrice]'
})
export class PriceDirective implements OnInit {
  private el: HTMLInputElement;

  constructor(
    private elementRef: ElementRef,
  ) {
    this.el = this.elementRef.nativeElement;
  }

  ngOnInit() {
    setTimeout(() => {
      this.el.value = (+this.el.value.split(',').join('')).toFixed(2);
    });
  }

  @HostListener('blur', ['$event.target.value'])
  onBlur(value: any) {
    this.el.value = (+value.split(',').join('')).toFixed(2);
  }

}
