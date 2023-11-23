import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {
  colors=[
    "red",         // #FF0000
    "orange",      // #FFA500
    "yellow",      // #FFFF00
    "green",       // #008000
    "blue",        // #0000FF
    "indigo",      // #4B0082
    "violet",      // #9400D3
    "pink",        // #FFC0CB
    "turquoise",   // #40E0D0
    "gold"         // #FFD700
  ];
  @HostBinding('style.color') color='red';
  @HostBinding('style.borderColor') bColor = 'red';
  @HostListener('keypress') change() {
    this.color= this.colors[Math.floor(Math.random()*(this.colors.length-1))]
    this.bColor= this.colors[Math.floor(Math.random()*(this.colors.length-1))]
  }

  constructor() { }

}
