import { Component, inject } from '@angular/core';
import { LoggerService } from './services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

   loggerService:LoggerService=inject(LoggerService)
   log(){
    this.loggerService.log(this.loggerService.data)
   }
}
