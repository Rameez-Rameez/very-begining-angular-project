import { Directive ,ElementRef} from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private elementRef:ElementRef) {
    this.elementRef.nativeElement.style.color="green";
   }
}
