import { Directive, ElementRef,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangecolor]'
})
export class ChangecolorDirective {

  constructor(
    private _eleRef:ElementRef,
    private _renders:Renderer2
    ) {

      //console.log(_eleRef.nativeElement)
      _renders.setStyle(_eleRef.nativeElement,"background","orange")
      _renders.setStyle(_eleRef.nativeElement,"color","white")
 
    }

}
