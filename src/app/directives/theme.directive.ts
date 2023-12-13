import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[darkTheme]'
})
export class ThemeDirective implements OnInit {
  private htmlElement?: ElementRef<HTMLDivElement>;

  constructor(
    private elem: ElementRef<HTMLDivElement>
  ) {
    this.htmlElement = this.elem;
  }

  ngOnInit(): void {
      this.setBackground();
      this.setTextColor();
  }

  setBackground() {
    this.htmlElement!.nativeElement.style.backgroundColor = '#333';
  }

  setTextColor() {
    this.htmlElement!.nativeElement.style.color = 'snow';
  }

}
