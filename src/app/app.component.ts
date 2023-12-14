import { Component, inject } from '@angular/core';
import { LoggerService } from './services/logger.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { NgxUiLoaderConfig, NgxUiLoaderService, PB_DIRECTION, POSITION, SPINNER } from 'ngx-ui-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
   router=inject(Router)
   ngxService=inject(NgxUiLoaderService)
   loggerService:LoggerService=inject(LoggerService)
   log(){
    this.loggerService.log(this.loggerService.data)
   }
   constructor(){
   this.router.events.subscribe((event) => {
    if (event instanceof NavigationStart) {
    this.ngxService.startBackground() 
    } else if (event instanceof NavigationEnd) {
    this.ngxService.stopBackground()
    }
    });}
}

//this is used for .start 
export const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  fgsColor: 'red',
  fgsPosition: POSITION.bottomCenter,
  fgsSize: 40,
  // fgsType: SPINNER.rectangleBounce, // background spinner type
  fgsType: SPINNER.chasingDots, // foreground spinner type
  pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  pbThickness: 5, // progress bar thickness
  masterLoaderId: "master", //by-default its master
};
