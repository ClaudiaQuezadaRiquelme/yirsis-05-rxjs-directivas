import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[btnTheme]'
})
export class BtnThemeDirective implements OnInit{

  @Input()
  bgColor: string = 'red';
  @Input()
  textColor: string = 'snow';
  @Input()
  width: string = '6rem';

  constructor(
    private elem: ElementRef<HTMLButtonElement>
  ) { }

  ngOnInit(): void {
      this.setColor();
      this.setWidth();
  }

  setColor() {
    this.elem.nativeElement.style.backgroundColor = this.bgColor;
    this.elem.nativeElement.style.color = this.textColor;
    this.elem.nativeElement.style.border = 'none';
  }
  setWidth() {
    this.elem.nativeElement.style.width = this.width;
    this.elem.nativeElement.style.padding = '.3rem';
  }

}
