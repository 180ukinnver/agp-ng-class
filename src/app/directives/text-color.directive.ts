import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTextColor]'
})
export class TextColorDirective {

  @Input() color: String;

  constructor(public el: ElementRef) { 
    console.log(this.color);  
  }
  
  ngOnInit() {
    console.log(this.color);
    this.el.nativeElement.style.color = this.color;
    this.el.nativeElement.innerHTML = "change text";
  }

  @HostListener('click', ['$event.target']) 
  onClick(el) {
    alert(el.innerHTML);
  }
}
