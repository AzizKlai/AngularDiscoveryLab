import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test-fils',
  templateUrl: './test-fils.component.html',
  styleUrls: ['./test-fils.component.css']
})
export class TestFilsComponent implements OnInit {
  
  @Input()  filsProperty: any;
  @Output() sendRequestToData= new EventEmitter();
  constructor(){}

  ngOnInit(): void {
    console.log(this.filsProperty) 
  }

  sendEventToFather(){
    this.sendRequestToData.emit(
      `how dare you, i said no!!!!!`
    )
  }
 
}
