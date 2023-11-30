import { Component, Inject, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers:[LoggerService]
})
export class TestComponent {
  tunis=false
  algerie=true
  title = 'AngularDiscoveryLab_tp1';
  bgColor='yellow'
  show=false
  constructor( private loggerService:LoggerService ){  }
  changeStatus(){
    this.loggerService.log("changing status")
    this.loggerService.push("usedBy test")
    this.loggerService.log(this.loggerService.data)
    
    this.show=!this.show
    this.tunis=!this.tunis
    this.algerie=!this.algerie
  }
  processReq(message: any){
    alert(message)

  }



    
}
