import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultImagePipe } from '../pipes/default-image.pipe';
import { FibonacciPipe } from '../pipes/fibonacci.pipe';
import { CustomStructuralDirective } from '../directives/custom-structural.directive';
import { RainbowDirective } from '../directives/rainbow.directive';



@NgModule({
  declarations: [
    DefaultImagePipe,
    FibonacciPipe,
    CustomStructuralDirective,
    RainbowDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DefaultImagePipe,
    FibonacciPipe,
    CustomStructuralDirective,
    RainbowDirective,
  ]
})
export class SharedModule { }
