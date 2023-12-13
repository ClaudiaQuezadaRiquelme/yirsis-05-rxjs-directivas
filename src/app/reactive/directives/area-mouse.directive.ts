import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[areaMouse]'
})
export class AreaMouseDirective implements OnInit {
  @Input()
  color: string = 'green';
  @Input()
  height: string = '150px';

  constructor(
    private elem: ElementRef<HTMLDivElement>,
  ) { }

  ngOnInit(): void {
    this.setBackground();
    this.setHeight();
  }

  setBackground() {
    this.elem.nativeElement.style.backgroundColor = this.color;
  }

  setHeight() {
    this.elem.nativeElement.style.height = this.height;
  }

}
