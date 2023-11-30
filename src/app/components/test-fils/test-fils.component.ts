import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-test-fils',
  templateUrl: './test-fils.component.html',
  styleUrls: ['./test-fils.component.css']
})
export class TestFilsComponent implements OnInit {
  
  @Input()  filsProperty: any;
  @Output() sendRequestToData= new EventEmitter();
  constructor(){}
  private loggerService:LoggerService=inject(LoggerService)
  ngOnInit(): void {
    console.log(this.filsProperty) 
    this.loggerService.log(this.loggerService.data)
  }

  sendEventToFather(){
    this.loggerService.log(this.loggerService.data)
    this.sendRequestToData.emit(
      `how dare you, i said no!!!!!`
    )
  }
 
}
