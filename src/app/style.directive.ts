import { Directive, ElementRef, } from '@angular/core';

@Directive({
  selector: '[appStyle]',
  standalone: true
})
export class StyleDirective {

  constructor(private el:ElementRef) {
    console.log(this.el) 
    this.el.nativeElement.style.margin="0 auto" 
    this.el.nativeElement.style.backgroundColor="aliceblue" 
    this.el.nativeElement.style.width="400px" 
    this.el.nativeElement.style.height="auto" 
    this.el.nativeElement.style.textAlign="center" 
    this.el.nativeElement.style.padding="20px" 




   }


}
