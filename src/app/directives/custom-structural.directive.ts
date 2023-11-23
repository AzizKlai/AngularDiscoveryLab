import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { range } from 'rxjs';


class CustomStructuralContext
{
public somethingToShare = 'hi i am the customStructural Directive'
}


@Directive({
  selector: '[appCustomStructural]'
})
export class CustomStructuralDirective implements OnInit {
@Input('appCustomStructural') param1:number = 1; 
@Input('appCustomStructuralParam2') param2:string = "second"; 
context = new CustomStructuralContext();
  
  constructor
(
private viewContainerRef: ViewContainerRef,
private template: TemplateRef<any>
) {}
  ngOnInit(): void {
    for (let i = 0; i < this.param1; i++) {
      //this.viewContainerRef.createEmbeddedView(this.template,this.context);
      this.viewContainerRef.createEmbeddedView(this.template,{index:i});
      
      
    }
  }


}
