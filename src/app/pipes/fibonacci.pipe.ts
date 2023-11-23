import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';

@Pipe({
  name: 'fibonacci'
})
export class FibonacciPipe implements PipeTransform {
  
  //purefunction
  @memo()
  fibonacci(value:number): number{
    console.log(value) 
    if(value==1 || value==0)
    return 1
    else
     return this.fibonacci(value-1)+this.fibonacci(value-2)
    
  }
  transform(value: number): number {
    return this.fibonacci(value)
  }

}
